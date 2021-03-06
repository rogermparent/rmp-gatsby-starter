import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { scale } from "../utils/typography"
import styles from "../styles"

import "typeface-space-mono"
import "typeface-spectral"

import "prismjs/themes/prism-solarizedlight.css"

class Layout extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutIndexQuery {
            site {
              siteMetadata {
                author
                homepage
              }
            }
          }
        `}
        render={data => {
          const { author, homepage } = data.site.siteMetadata
          return (
            <>
              <header {...styles.container} {...styles.verticalPadding}>
                <Link
                  to="/"
                  css={{
                    display: `inline-block`,
                    textDecoration: `none`,
                  }}
                >
                  <h1
                    css={{
                      ...scale(0),
                      color: styles.colors.light,
                      fontWeight: `normal`,
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    gatsby-example-using-remark
                  </h1>
                </Link>
              </header>
              <main {...styles.container} {...styles.verticalPadding}>
                {this.props.children}
              </main>
              <footer
                css={{
                    ...scale(-0.5),
                    color: styles.colors.light,
                }}
                >
                powered by{` `}
                <a target="_blank" rel="noopener noreferrer" href={homepage}>
                  {author}
                </a>
              </footer>
            </>
          )
        }}
      />
    )
  }
}

export default Layout
