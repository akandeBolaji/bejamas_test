import React from "react";
import PropTypes from "prop-types";

import { ContactPageTemplate } from "../../templates/contact-page";

const ContactPagePreview = () => {
  return <ContactPageTemplate />;
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default  ContactPagePreview;
 