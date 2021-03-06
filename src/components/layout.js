import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Box } from "rebass"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Box
        backgroundColor="darkBlue"
        minHeight="100vh"
        sx={{ overflowX: "hidden" }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
