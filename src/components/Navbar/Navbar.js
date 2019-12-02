import React from "react";
import { Link } from "gatsby";

import "./styles.scss";

export const NavbarTemplate = ({ data }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container  navbar-container">
      {data.menuItems.length > 0 && (
        <ul className="navbar-menu">
          {data.menuItems.map(menuItem => (
            <li key={menuItem.linkURL} className="navbar-menuItem">
                <Link className="navbar-menuLink" to={menuItem.linkURL}>
                    {menuItem.label}
                </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  </nav>
);

const Navbar = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <NavbarTemplate data={data} />;
};

export { Navbar };
