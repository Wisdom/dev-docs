

const fs         = require('fs');
const path       = require('path');
const { exec, execSync } = require('child_process');


const sidebarEntries = [];


try {
    fs.mkdirSync(path.join(__dirname, './output/sql-tables'));
}
catch (e) {;}



const generateTable = (sizedHeaders, rows) => {
    const DEFAULT_WIDTH = 10;
    const header = sizedHeaders.map(([title, width]) => `| ${(title||'').padEnd(width || DEFAULT_WIDTH, ' ')} `).join('') + '|';
    const structure = sizedHeaders.map(([title, width]) => `|-${''.padEnd(width || DEFAULT_WIDTH, '-')}-`).join('') + '|';
    const entry = rows.map(row => {
        return '| ' + row.map((col,i) => {
            return (col||'').padEnd(sizedHeaders[i][1] || DEFAULT_WIDTH, ' ');
        }).join(' | ') + ' |';
    });
    return '\n' + [header, structure, ...entry].join('\n') + '\n';
}




const schemas = execSync(`PGPASSFILE=../.pgpass psql -h pg.getwisdom.io -d internal_prod -U master -p 5432 -c "COPY (select schema_name from information_schema.schemata WHERE schema_name <> ALL(array['internal', 'internal_audit', 'aws_s3', 'aws_commons', 'public', 'information_schema']) AND schema_name NOT LIKE 'pg_%') TO STDOUT with CSV"`).toString().split('\n').filter((str) => str&&!(str || '').match(/[^a-zA-Z0-9_]/g));
console.log('\n\n', schemas);

const tables = execSync(`PGPASSFILE=../.pgpass psql -h pg.getwisdom.io -d internal_prod -U master -p 5432 -c "COPY (SELECT table_schema || '.' || table_name FROM information_schema.tables WHERE table_schema <> ALL(array['community_types', 'internal', 'internal_audit', 'aws_s3', 'aws_commons', 'public', 'information_schema']) AND table_schema NOT LIKE 'pg_%' ORDER BY table_schema ASC, table_name ASC) TO STDOUT with CSV"`).toString().split('\n').filter(str => str&&!str.match(/[^a-zA-Z0-9._]/g));

console.log('\n\n', tables);


const overviewListSchemas = generateTable(
    [['Schemas', 30]],
    schemas.map(x=>[x]),
);

const overviewListTables = generateTable(
    [
        ['Tables with Schema', 30],
    ],
    tables.slice().map(table => [
        `[${table}](./${table}.md)`
    ]),
);


let overviewReadme = fs.readFileSync(path.join(__dirname, './templates/sql-tables.overview.md'), 'utf-8');
overviewReadme = overviewReadme.replace('<!--INSERT_SCHEMAS_HERE-->', overviewListSchemas);
overviewReadme = overviewReadme.replace('<!--INSERT_TABLES_HERE-->', overviewListTables);

fs.writeFileSync(path.join(__dirname, './output/sql-tables/overview.md'), overviewReadme, {encoding: 'utf8', mode: 0o666, flag: 'w'});






(async ()=>{
    const tablesDetailsArr = await Promise.all([
        ...tables.map(table => {

            sidebarEntries.push(table);
            return new Promise((resolve, reject) => {
                exec(`PGPASSFILE=../.pgpass psql -h pg.getwisdom.io -d internal_prod -U master -p 5432 -c "\\d+ ${table}"`, (err, stdout, stderr) => {
                    if (err || stderr) {
                        return reject(err || stderr)
                    }
                    else {
                        const details = 
`---
title: 'Table "${table}"'
sidebar_label: '${table}'
---\n` + stdout
                            .replace(/-\+-/g, '-|-') 
                            .replace(/\s*Table "([^"]*)"\s*/, '\n\n\n') //.replace(/\s*Table "([^"]*)"\s*/, '## Table $1\n\n')
                            .replace(/Description\s+\n\s+-/m, 'Description')
                            .replace(/^([^|]+\|) ([^|]+\|) ([^|]+\|) ([^|]+\|) ([^|]+\|) ([^|]+\|) ([^|]+\|)/gm, '$1 $2 $4 $5 $6') // Remove column $3 and $7
                            .replace(/^([^|]+\|)-([^|]+\|)-([^|]+\|)-([^|]+\|)-([^|]+\|)-([^|]+\|)-([^|]+\|)/gm, '$1-$2-$4-$5-$6') // Remove column $3 and $7 of divider
                            .replace('Indexes:', '\n\n### Indexes:\n\n\`\`\`')
                            .replace('Policies:', '\`\`\`\n\n### Policies:\n\n\`\`\`')
                            .replace('Access method:', '\`\`\`\n\n### Access method:\n\n\`\`\`\n')
                            .replace(/^ ([a-z][a-zA-Z]+)(\s+)\|/gm, '`"$1"`$2|')
                            .replace(/^\s*/gm, '')
                            + '\`\`\`';
                        return resolve(details);
                    }
                })
            });
        })
    ]);

    // Build sidebar entries.
    fs.writeFileSync(
        path.join(__dirname, './output/', 'sidebar.sql-tables.json'), 
        JSON.stringify(sidebarEntries, null, 2), 
        {encoding: 'utf8', mode: 0o666, flag: 'w'},
    );

    const tableDetails = {};
    tablesDetailsArr.forEach((details, i) => {
        console.log(tables[i]);
        const table = tables[i];
        tableDetails[table] = details;

        fs.writeFileSync(path.join(__dirname, './output/sql-tables/', `${table}.md`), details, {encoding: 'utf8', mode: 0o666, flag: 'w'});
    });


    const resp1 = execSync(`rm -rf ./docs/data-access/sql-tables/ ; mkdir -p ./docs/data-access/sql-tables/`).toString();
    const resp2 = execSync(`cp ./generators/output/sql-tables/* ./docs/data-access/sql-tables/`).toString();
})();
