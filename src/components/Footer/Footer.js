import React from "react";
import { Link } from "gatsby";

import "./styles.scss";

export const FooterTemplate = ({ data }) => (
  <footer className="foot">
       <span className="helper"></span><img src={data.logo} alt="logo"/>
      <div className="foot-copyright">{data.copyright}</div>
  </footer>
);

const Footer = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
   console.log(data);
  return <FooterTemplate data={data} />;
};

export { Footer };
