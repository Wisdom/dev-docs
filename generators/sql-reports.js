



// curl -qs https://community-sql.s3-us-west-2.amazonaws.com/composed-queries.csv | node sql-reports.js


const fs         = require('fs');
const path       = require('path');
const PapaParse  = require('papaparse');
const markdownIt = require('markdown-it')();
const { execSync } = require('child_process');

const sidebarEntries = [];

const stdInData = fs.readFileSync(0).toString();
const [header, ...reportsRaw] = PapaParse.parse(stdInData, {
    // quotes: false, //or array of booleans
    // quoteChar: '"',
    // escapeChar: '"',
    delimiter: ",",
    header: true,
    // newline: "\n",
    skipEmptyLines: true, //or 'greedy',
    // columns: null //or array of strings
}).data;

// console.log(stdInData);

const generateTable = (sizedHeaders, rows) => {
    const DEFAULT_WIDTH = 10;
    const header = sizedHeaders.map(([title, width]) => `| ${(title||'').padEnd(width || DEFAULT_WIDTH, ' ')} `).join('') + '|';
    const structure = sizedHeaders.map(([title, width]) => `|-${''.padEnd(width || DEFAULT_WIDTH, '-')}-`).join('') + '|';
    const entry = rows.map(row => {
        return '| ' + row.map((col,i) => {
            return (col||'').toString().padEnd(sizedHeaders[i][1] || DEFAULT_WIDTH, ' ');
        }).join(' | ') + ' |';
    });
    return '\n' + [header, structure, ...entry].join('\n') + '\n';
}



reports = reportsRaw.map(report => {
    return {
        ...report,
        queryPath: report.path,
        manifest: JSON.parse(report.manifest),
    };
});

// console.log(reports);

const alphanumericFilter = (str) => (str || '').replace(/[^a-zA-Z0-9]/g, '');




try {
    fs.mkdirSync(path.join(__dirname, './output/sql-reports'));
}
catch (e) {;}


reports.forEach(({queryPath, manifest, sql, readme}) => {
    // TODO: 1. Generate report doc
    // TODO: 2. Add self to sidebar...somehow

    const tableInputParams = generateTable(
        [['Name', 50]],
        manifest.requiredParams.slice().map(param => [
            alphanumericFilter(param)
        ]),
    );

    const tableOutputType = generateTable(
        [['Name', 30],['Type', 20]],
        Object.entries(manifest.types).map(([key, val])=>[
            alphanumericFilter(key), 
            alphanumericFilter(val)
        ]),
    );

    const exampleArgs = manifest.requiredParams.length ? ', \n' + manifest.requiredParams.map(x=>`\t${x} = ?`).join(', \n') + '\n' : '';

    let generatedReadme = /*markdownIt.render*/(
`---
title: 'Report: ${manifest.title}'
sidebar_label: '${queryPath}'
---


## Example Usage

\`\`\`sql
SELECT * FROM community.report(NULL::"${queryPath}"${exampleArgs});
\`\`\`


## Report Context

${readme}


## Report Definitions

#### Input Parameters

${tableInputParams}


#### Output Record Type

${tableOutputType}


#### SQL Report Query

\`\`\`
${sql}
\`\`\`

    `);

    const queryPathUnderscored = queryPath.replace(/\//g, '_');
    const reportPath = path.join(__dirname, './output/sql-reports/', queryPathUnderscored+'.md');
    fs.writeFileSync(reportPath, generatedReadme, {encoding: 'utf8', mode: 0o666, flag: 'w'});
    sidebarEntries.push(queryPathUnderscored);
    return generatedReadme;
});




const overviewToC = generateTable(
    [
        ['Report Query Path', 50],
        ['Title', 25],
        ['Requires Params', 15]
    ],
    reports.slice().map(entry => [
        `[${entry.queryPath}](./${entry.queryPath})`,
        alphanumericFilter(entry.manifest.title),
        !!entry.manifest.requiredParams.length ? '✓' : '✘',
    ]),
);

const overviewDevToC = generateTable(
    [   ['Step', 5],
        ['Report Query Path', 50],
        ['Title', 25],
        ['Requires Params', 15]
    ],
    reports.slice().filter(x=>x.queryPath.startsWith('@wisdom/developing/')).map((entry, i) => [
        i+1,
        `[${entry.queryPath}](https://github.com/Wisdom/community-sql/blob/master/queries/${entry.queryPath})`,
        alphanumericFilter(entry.manifest.title),
        !!entry.manifest.requiredParams.length ? '✓' : '✘',
    ]),
);


// Build overview.md
let readmeContent = fs.readFileSync(path.join(__dirname, './templates/sql-reports.overview.md'), 'utf-8');
readmeContent = readmeContent.replace(/<!--INJECT_QUERY_TABLE_HERE-->/g, overviewToC);
readmeContent = readmeContent.replace(/<!--INJECT_DEV_QUERY_TABLE_HERE-->/g, overviewDevToC);
fs.writeFileSync(path.join(__dirname, './output/sql-reports/overview.md'), readmeContent, {encoding: 'utf8', mode: 0o666, flag: 'w'});



// Build sidebar entries.
fs.writeFileSync(
    path.join(__dirname, './output/', 'sidebar.sql-reports.json'), 
    JSON.stringify(sidebarEntries, null, 2), 
    {encoding: 'utf8', mode: 0o666, flag: 'w'},
);



const resp1 = execSync(`rm -rf ./docs/data-access/sql-reports/; mkdir -p ./docs/data-access/sql-reports/`).toString();
const resp2 = execSync(`cp ./generators/output/sql-reports/* ./docs/data-access/sql-reports/`).toString();
