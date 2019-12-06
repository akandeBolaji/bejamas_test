import React from "react";
import PropTypes from "prop-types";

import { ProductTemplate } from "../../templates/products-page";

const ProductPagePreview = ({ entry }) => {
  return <ProductTemplate />;
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ProductPagePreview;
 