import React from "react";
import PropTypes from "prop-types";

import { FooterTemplate } from "../../components/Footer";

const FooterPreview = ({ entry }) => {
  const home = entry.getIn(["data"]).toJS();
  return <FooterTemplate data={home} />;
};

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FooterPreview;
 