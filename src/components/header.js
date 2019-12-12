import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/domain.svg'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F6F6F6`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1400,
        padding: `1rem 1rem`,
      }}
    >
      <div>
        <a href="#">
          <img src={logo}
           style={{
            width: 50,
          }}
          />
        </a>
      </div>
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
