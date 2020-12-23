export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe2d28ea52fb4ba3e1654b7',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-6tssu1ms',
                  apiId: '22fe82e1-5d7a-4935-b356-6e204d191186'
                },
                {
                  buildHookId: '5fe2d28ee8a4d5b70cfe3ecd',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-96dzv3d6',
                  apiId: '90ab5aee-6028-410a-9f76-158688712ee5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BodyCopy/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-96dzv3d6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
