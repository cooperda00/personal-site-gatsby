const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const portfolioPieceTemplate = path.resolve(
    `src/templates/IndividualPortfolioItem.js`
  )

  const result = await graphql(`
    query {
      allContentfulPortfolioItem {
        edges {
          node {
            path
            title
          }
        }
      }
    }
  `)

  result.data.allContentfulPortfolioItem.edges.forEach(edge => {
    createPage({
      path: `/portfolio${edge.node.path}`,
      component: portfolioPieceTemplate,
      context: {
        title: edge.node.title,
      },
    })
  })
}
