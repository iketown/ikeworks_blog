export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f75ed99ab8cdba89fa9a03a',
                  title: 'Sanity Studio',
                  name: 'ikeworks-blog-studio',
                  apiId: 'fcb3f3d3-ad08-4a4e-9cfa-8df766adca65'
                },
                {
                  buildHookId: '5f75ed99d3c9a4686163d745',
                  title: 'Blog Website',
                  name: 'ikeworks-blog',
                  apiId: 'cf1d35fa-0931-4a32-a682-49b80aeba41f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iketown/ikeworks_blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ikeworks-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
