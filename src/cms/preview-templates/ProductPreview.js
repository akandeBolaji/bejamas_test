import React from "react";
import PropTypes from "prop-types";

import { ProductsPageTemplate } from "../../templates/products-page";

const ProductPagePreview = () => {
  return <ProductsPageTemplate />;
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ProductPagePreview;
 