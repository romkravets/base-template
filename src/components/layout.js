/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div className="page-wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
      style= {{
        flexGrow: `1`,
      }}
      >
        <main
        style= {{
          maxWidth: `1170px`,
          margin: `0 auto`,
        }}
          >{children}
        </main>
      </div>
      <footer 
      style={{
        height: `150px`,
        background: `green`,
      }}>
              © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
