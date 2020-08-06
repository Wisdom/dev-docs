const sqlTables = require(__dirname + '/generators/output/sidebar.sql-tables.json');
const sqlReports = require(__dirname + '/generators/output/sidebar.sql-reports.json');


module.exports = {
  docs: {
    'Wisdom Overview': [
      'wisdom/introduction',
      // 'wisdom/product-logistics',
      // 'wisdom/business-engagement'
    ],

    'Tracking Setup': [
      'tracking/quick-installation',
      'tracking/full-installation',
      {
        type: 'category',
        label: 'Censorship Configs',
        items: [
          'censorship/overview',
          'censorship/recording-modules',
          'censorship/sanitizers',
          'tracking/web/service-integrations',
        ],
      },
      {
        type: 'category',
        label: 'Web Tracking',
        items: [
          'tracking/web/js-reference',
        ],
      },
      {
        type: 'category',
        label: 'Server Side Tracking',
        items: [
          'tracking/server/overview',
          'tracking/server/inbox',
          'tracking/server/company',
          'tracking/server/saas',
        ],
      },
    ],

    'Accessing Your Data:new': [
      'data-access/overview',
      'data-access/management',
      'data-access/blob',
      {
        type: 'category',
      label: 'SQL Tables',
        items: [
          'data-access/sql-tables/overview',
          ...sqlTables.map(x=>'data-access/sql-tables/'+x),
        ],
      },
      {
        type: 'category',
        label: 'REST HTTP API',
        items: [
          // 'data-access/rest-api',
          'data-access/api/overview',
          'data-access/api/auth',
          'data-access/api/general',
          'data-access/api/data-export',
          'data-access/api/gdpr-darp',
          'data-access/api/reference-spec',
        ]
      },
      // {
      //   type: 'category',
      //   label: 'Ecosystem Connections',
      //   items: [
      //     'ecosystem/overview',
      //     // 'ecosystem/cube-js',
      //     {
      //       type: 'category',
      //       label: 'SQL Clients',
      //       items: [
      //         // 'ecosystem/sql/clients',
      //         'ecosystem/sql/psql',
      //         'ecosystem/sql/pgadmin4',
      //       ],
      //     },
      //     {
      //       type: 'category',
      //       label: 'BI Visualization',
      //       items: [
      //         'ecosystem/bi/superset',
      //         'ecosystem/bi/athena',
      //         'ecosystem/bi/chartio',
      //         'ecosystem/bi/looker',
      //         'ecosystem/bi/tableau',
      //       ],
      //     },
      //   ],
      // },
    ],


    'Community Extensions': [
      {
        type: 'category',
        label: 'SQL Reports:new',
        items: [
          'data-access/sql-reports/overview',
          ...sqlReports.map(x=>'data-access/sql-reports/'+x),
        ],
      },
      {
        type: 'category',
        label: 'Web Reports:soon',
        items: [
          'extension-developers/overview',
          'extension-developers/storybook',
          'data-access/cube-js',
        ],
      },
    ],

    // 'Team Management': [ // https://pantheon.io/docs/manage
    //   'team-management/overview',
    //   'team-management/invites-permissions',
    //   'team-management/collaboration',
    // ],

    // 'Product Velocity': [
    //   'direction', 
    //   'magnitude', 
    //   'daily standup', 
    //   'roadmap', 
    //   'changelog'
    // ],

    'Enterprise Due Dilligence': [
      // 'due-dilligence/overview',
      // 'due-dilligence/company',
      // 'due-dilligence/system',
      // 'due-dilligence/process-changelog',
      'due-dilligence/billing',
      'due-dilligence/globals-and-side-effects',
      'due-dilligence/browser-support',
      'due-dilligence/browser-performance',
      // 'due-dilligence/data-assurance',
      // 'due-dilligence/business-engagement',
      // {
      //   type: 'category',
      //   label: 'Service Organization Controls',
      //   items: [
      //     'due-dilligence/service-controls/policy-adherence',
      //     'due-dilligence/service-controls/security',
      //     'due-dilligence/service-controls/availability',
      //     'due-dilligence/service-controls/privacy',
      //     'due-dilligence/service-controls/processing-integrity',
      //     'due-dilligence/service-controls/confidentiality',
      //     'due-dilligence/service-controls/change-management',
      //   ],
      // },
      // {
      //   type: 'category',
      //   label: 'Regulatory Compliance',
      //   items: [
      //     'due-dilligence/regulatory-compliance/soc2',
      //     'due-dilligence/regulatory-compliance/gdpr',
      //     'due-dilligence/regulatory-compliance/iso27001',
      //     'due-dilligence/regulatory-compliance/pci',
      //     'due-dilligence/regulatory-compliance/hipaa',
      //   ],
      // },
      // 'due-dilligence/risk-mitigation',
      // 'due-dilligence/government-coersion',
    ],


    'Continuous Learning': [
      'community',
      // {
      //   type: 'category',
      //   label: 'Tutorials',
      //   items: [
      //     'empty',
      //   ],
      // },
      // {
      //   type: 'category',
      //   label: 'Knowledgebase',
      //   items: [
      //     'empty',
      //   ],
      // },
      // {
      //   type: 'category',
      //   label: 'Product Guide',
      //   items: [
      //     'empty',
      //   ],
      // },
      'snippets',
      
    ],

    'FAQ': [
      'faq/faq-articles/censoring-sensitive-information',
      'faq/faq-articles/does-wisdom-support-complex-ajax-sites',
      'faq/faq-articles/how-do-i-change-my-plan-what-about-going-over-quota',
      'faq/faq-articles/using-replayed-remote-developer-tools',
      'faq/faq-articles/using-wisdom-live-view',
    ],

    '__Hidden': [   /* Manual overrides since sidebar only shows up if document is listed here */
      'announcements',
    ],
  },
};
