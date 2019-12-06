import React from "react";
import PropTypes from "prop-types";

import { NavbarTemplate } from "../../components/Footer";

const NavbarPreview = ({ entry }) => {
  const home = entry.getIn(["data"]).toJS();
  return <NavbarTemplate data={home} />;
};

NavbarPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default NavbarPreview;
 