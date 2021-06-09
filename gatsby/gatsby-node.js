/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions, reporter }) => {
    await pageGenerator(graphql, actions, reporter)
 }
 
 const pageGenerator = async (graphql, actions, reporter) => {
   const {createPage} = actions
 
   const result = await graphql(`
    {
        allNodeArticle {
            edges {
                node {
                    id
                    drupal_internal__vid
                    drupal_internal__nid                
                }
            }
        }
    }
   `)
 
   if (result.errors) {
     throw result.errors
   }
 
   const pages = result.data.allNodeArticle.edges || []
   pages.forEach((edge) => {
     const path = `drupal-node-${edge.node.drupal_internal__nid}`
     const renderTemplate = `./src/templates/page-drupal.js`
     createPage({
       path,
       component: require.resolve(renderTemplate),
       context: {
         id: edge.node.id,
         slug: path
       },
     })
   })
 }