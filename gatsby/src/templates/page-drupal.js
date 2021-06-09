import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from 'gatsby'

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <h1>{data.drupalPage.title}</h1>
    <div dangerouslySetInnerHTML={{__html: data.drupalPage.body.value}} />
    <p>
      <Link to="/">Home</Link> <br />
    </p>
  </Layout>
)

export const query = graphql`
  query DrupalPageQuery($id: String!) {
    drupalPage: nodeArticle(id: {eq: $id}) {
      body {
        value
      }
      title
    }
  }
`

export default IndexPage
