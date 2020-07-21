/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <strong>{author}</strong>, using <a href={`https://gatsbyjs.org`}>Gatsby</a>, a framework built upon the
              React library.
              {` `}
              <a href={`${social[0].url}`}>
                Follow me on twitter
              </a> or <a href={`${social[1].url}`}>on instagram</a>.
              
              Better yet my photo gallery is <a href={``}> here :) </a>
            </p>
          </Container>
        )
      }}
    />
  )
}

// swap gatsby-icon.png for your own
const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          url
          name
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
