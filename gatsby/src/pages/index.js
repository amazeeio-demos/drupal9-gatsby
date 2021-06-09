import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from 'gatsby'

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to an amazee.io demo Gatsby site running on Lagoon!</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>Here are some pages from Drupal</p>
    <ul>
      { data.allNodeArticle.edges.map((edge) => {
          return <li><Link to={`/drupal-node-${edge.node.drupal_internal__nid}`}>{edge.node.title}</Link><br /></li>
        })
      }
    </ul>
  </Layout>
)

export const query = graphql`
  query drupalNodes {
    allNodeArticle {
      edges {
        node {
          id
          drupal_internal__vid
          drupal_internal__nid
          title
        }
      }
    }
  }
`

export default IndexPage
