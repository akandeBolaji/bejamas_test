import React from "react";
import PropTypes from "prop-types";

import { ContactTemplate } from "../../templates/contact-page";

const ContactPagePreview = ({ entry }) => {
  return <ContactTemplate />;
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default  ContactPagePreview;
 