module.exports = {
  title: 'Wisdom docs',
  tagline: 'Developer docs, data schemas, and enterprise due dilligence.',
  url: 'https://developers.getwisdom.io',
  baseUrl: '/',
  favicon: 'https://getwisdom.io/favicon.ico',
  organizationName: 'wisdom', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  plugins: [
    require.resolve('docusaurus-plugin-sass'),
    [require.resolve('@docusaurus/plugin-sitemap'), {
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: 'weekly',
      priority: 0.5,
    }],
    // require.resolve('@babel/plugin-proposal-class-properties'),
    [
      require.resolve('@docusaurus/plugin-ideal-image'),
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
    // [require.resolve('@docusaurus/plugin-client-redirects'), {
    //   fromExtensions: ['html'],
    //   redirects: [
    //     {from: ['/',], to: '/wisdom/introduction',},
    //   ],
    //   createRedirects: function (path) {
    //     // redirect to /docs from /docs/introduction,
    //     // as introduction has been made the home doc
    //     // if (allDocHomesPaths.includes(path)) {
    //     //   return [`${path}/introduction`];
    //     // }
    //   },
    // }],
    // [ require.resolve('@docusaurus/plugin-content-docs'), {
    //   path: 'docs',
    //   editUrl: 'https://github.com/wisdom/docs/edit/master/website/',
    //   routeBasePath: '/',
    //   homePageId: 'wisdom/introduction',
    //   include: ['**/*.md', '**/*.mdx'], // Extensions to include.
    //   sidebarPath: require.resolve('./sidebars.js'),
    //   docLayoutComponent: '@theme/DocPage',
    //   docItemComponent: '@theme/DocItem',
    //   remarkPlugins: [require('./plugins/remark-npm2yarn')],
    //   rehypePlugins: [],
    //   beforeDefaultRemarkPlugins: [],
    //   beforeDefaultRehypePlugins: [],
    //   showLastUpdateAuthor: true,
    //   showLastUpdateTime: true,
    //   admonitions: {
    //     tag: ':::',
    //     icons: 'svg', //'svg'|'emoji'|'none', // the type of icons to use (default "svg")
    //     infima: true,
    //   },
    // },],
    // [ require.resolve('@docusaurus/plugin-content-docs'), {
    //   path: 'docs2',
    //   editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
    //   routeBasePath: 'docs2', // *DO NOT* include a trailing slash.
    //   homePageId: '_index', // Document id for docs home page.
    //   include: ['**/*.md', '**/*.mdx'], // Extensions to include.
    //   sidebarPath: require.resolve('./sidebars2.js'),
    //   docLayoutComponent: '@theme/DocPage',
    //   docItemComponent: '@theme/DocItem',
    //   remarkPlugins: [require('./plugins/remark-npm2yarn')],
    //   rehypePlugins: [],
    //   beforeDefaultRemarkPlugins: [],
    //   beforeDefaultRehypePlugins: [],
    //   showLastUpdateAuthor: true,
    //   showLastUpdateTime: true,
    //   admonitions: {
    //     tag: ':::',
    //     icons: 'svg', //'svg'|'emoji'|'none', // the type of icons to use (default "svg")
    //     infima: true,
    //   },
    // }],

    [ require.resolve('@docusaurus/plugin-content-blog'), {
      path: './snippets',
      routeBasePath: '/blog/snippets',
      showReadingTime: true,
      // include: ['*.md', '*.mdx'],
      BlogPostItem: '@theme/BlogPostItem',
      blogListComponent: '@theme/BlogListPage',
      blogPostComponent: '@theme/BlogPostPage',
      blogTagsListComponent: '@theme/BlogTagsListPage',
      blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
      postsPerPage: 9999,
      // Please change this to your repo.
      editUrl:
        'https://github.com/wisdom/docs/edit/master/website/',
      feedOptions: {
        type: 'all',
        copyright: `Copyright © ${new Date().getFullYear()} Wisdom`,
      },
    }],

    [ require.resolve('@docusaurus/plugin-content-blog'), {
      path: './announcements',
      routeBasePath: '/blog/announcements',
      showReadingTime: true,
      // include: ['*.md', '*.mdx'],
      BlogPostItem: '@theme-original/BlogPostItem',
      blogListComponent: '@theme-original/BlogListPage',
      blogPostComponent: '@theme-original/BlogPostPage',
      blogTagsListComponent: '@theme/BlogTagsListPage',
      blogTagsPostsComponent: '@theme-original/BlogTagsPostsPage',
      postsPerPage: 9999,
      // Please change this to your repo.
      editUrl:
        'https://github.com/wisdom/docs/edit/master/website/announcements/',
      feedOptions: {
        type: 'all',
        copyright: `Copyright © ${new Date().getFullYear()} Wisdom`,
      },
    }],

  ],
  themeConfig: {
    announcementBar: {
      id: 'announcement__new_feature__wisdom2', // Any value that will identify this message.
      content: 'Wisdom 2.0 is here, now with open data access!',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
    },
    sidebarCollapsible: true,
    prism: {
      defaultLanguage: 'javascript',
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    algolia: {
      apiKey: 'd081a1783dc1fceab58ce7cb1ad284eb',
      indexName: 'getwisdom_developers',
      // appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      hideOnScroll: true,
      title: '',
      logo: {
        alt: 'Wisdom',
        src: 'img/logo.svg',
        srcDark: 'img/logo.dark.svg',
      },
      links: [
        // {to: 'https://app.getwisdom.io', label: 'App', position: 'left'},
        // {
        //   to: '/docs',
        //   // activeBasePath: '',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'dilligence', label: 'Dilligence', position: 'left'},
        // {to: 'changelog', label: 'Announcements', position: 'left'},
        // {to: 'api', label: 'HTTP API', position: 'left'},
        // {to: 'storybook', label: 'Storybook', position: 'left'},
        // {
        //   label: 'More',
        //   to: 'storybook', // "fake" link
        //   position: 'left',
        //   // activeBaseRegex: `docs/(?!next/(support|team|resources))`,
        //   items: [
        //     {to: 'changelog', label: 'Changelog', position: 'left', activeBaseRegex: `changelog/`},
        //     {to: 'storybook', label: 'Storybook', position: 'left', activeBaseRegex: `storybook/`},
        //     {to: 'api',       label: 'API Spec',  position: 'left', activeBaseRegex: `api/`},
        //   ],
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/wisdom/docs',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    // footer: {
    //   style: 'light',
    //   links: [
    //     // {
    //     //   title: 'Docs',
    //     //   items: [
    //     //     {
    //     //       label: 'Docs',
    //     //       to: '/',
    //     //     },
    //     //     {
    //     //       label: 'Second Doc',
    //     //       to: 'docs/doc2/',
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   title: 'Community',
    //     //   items: [
    //     //     // {
    //     //     //   label: 'Stack Overflow',
    //     //     //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //     //     // },
    //     //     // {
    //     //     //   label: 'Discord',
    //     //     //   href: 'https://discordapp.com/invite/docusaurus',
    //     //     // },
    //     //     {
    //     //       label: 'Twitter',
    //     //       href: 'https://twitter.com/WisdomHQ',
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   title: 'More',
    //     //   items: [
    //     //     {
    //     //       label: 'Blog',
    //     //       to: 'blog',
    //     //     },
    //     //     {
    //     //       label: 'GitHub',
    //     //       href: 'https://github.com/facebook/docusaurus',
    //     //     },
    //     //   ],
    //     // },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} Wisdom Technologies Ltd.`,
    // },
  },
  presets: [
    [
      require.resolve('@docusaurus/preset-classic'),
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          cacheTime: 60* 10 * 1000,
          changefreq: 'weekly',
          priority: 0.5,
        },
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'wisdom/introduction',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/wisdom/docs/edit/master/website/',
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/DocItem',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          admonitions: {
            // customTypes: customTypes, // additional types of admonitions
            tag: ':::', // the tag to be used for creating admonitions (default ":::")
            icons: 'svg', //'svg'|'emoji'|'none', // the type of icons to use (default "svg")
            infima: true, // wether the classes for infima alerts should be added to the markup
          },
          remarkPlugins: [require('./plugins/remark-npm2yarn')],
        },
        // blog: {
        //   path: './announcements',
        //   routeBasePath: '/blog/announcements',
        //   showReadingTime: true,
        //   // include: ['*.md', '*.mdx'],
        //   blogListComponent: '@theme/BlogListPage',
        //   blogPostComponent: '@theme/BlogPostPage',
        //   blogTagsListComponent: '@theme/BlogTagsListPage',
        //   blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
        //   postsPerPage: 20,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/wisdom/docs/edit/master/website/changelog/',
        //   feedOptions: {
        //     type: 'all',
        //     copyright: `Copyright © ${new Date().getFullYear()} Wisdom`,
        //   },
        // },
      },
    ],
  ],
  themes: [
    require.resolve('@docusaurus/theme-live-codeblock'), // Doesn't work with dark theme mode
    // require.resolve('./src/css/custom.css'),
    // require.resolve('@docusaurus/theme-search-algolia'),
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Ubuntu|Roboto|Source+Code+Pro",
    "https://at-ui.github.io/feather-font/css/iconfont.css",
    // {
    //   rel: 'stylesheet',
    //   href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap',
    //   integrity: 'sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=',
    //   crossorigin: 'anonymous',
    // },
  ],
  scripts: [
    {
      src: '/global.js',
      async: true,
      defer: true,
    },
  ],
};
