import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            color: "#007acc",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <div style={{ textAlign: "center" }}>
          <footer>
            <a href="https://stackoverflow.com/users/5767110/bhirawa-mbani">
              stackoverflow
            </a>{" "}
            • <a href="https://github.com/bhirmbani">github</a> •{" "}
            <a href="https://twitter.com/bhirmbani">twitter</a> •{" "}
          </footer>
          <footer style={{ fontSize: "0.65em", marginTop: '0.30em' }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>. Hosted on{" "}
            <a href="https://www.netlify.com/">Netlify</a>. Content management
            with <a href="https://www.netlifycms.org/">Netlify cms</a>.
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
