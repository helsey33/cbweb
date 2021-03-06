import React from "react"
import Layout from "./layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { Flex, Box } from "bricks"
import SEO from "../components/seo"

const Sidebar = ({ author, category, tags }) => <div></div>

const SolutionLayout = ({
  title,
  body,
  keywords,
  description,
  link,
  image,
}) => {
  return (
    <Layout>
      <SEO
        title={title}
        keywords={keywords}
        description={description}
        link={link}
        image={image ? image.publicURL : null}
      />
      <Flex flexWrap="wrap">
        <Box width={["100%", 2 / 3]}>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
        <Box width={["100%", 1 / 3]} marginTop={[1, 5]}>
          <Sidebar />
        </Box>
      </Flex>
    </Layout>
  )
}

const Transformer = ({ data }) => {
  let { title, keywords, description, link, image } = data.post.frontmatter
  let body = data.post.body
  return (
    <SolutionLayout
      title={title}
      keywords={keywords}
      description={description}
      body={body}
      link={link}
      image={image}
    />
  )
}

export default Transformer

export const pageQuery = graphql`
  query($link: String!) {
    post: mdx(frontmatter: { link: { eq: $link } }) {
      body
      frontmatter {
        title
        description
        keywords
        link
        image {
          publicURL
        }
      }
    }
  }
`
