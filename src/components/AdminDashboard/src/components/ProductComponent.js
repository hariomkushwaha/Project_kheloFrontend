import React from "react";
import { connect } from "react-redux";
import SingleProductComponent from "./SingleProductComponent";
import products from "../../../ProponentDashboard/ProponentDetails";

import { addProduct, removeProduct } from "../actions/index";

class ProductComponent extends React.Component {
  render() 
  {
    {console.log(this.props.products)}
    return (
      <div>

            {products.map(product => (
              <SingleProductComponent
                key={product.id}
                product={product}
                addProduct={this.props.addProduct}
                removeProduct={this.props.removeProduct}
              />
            ))}
      </div>
    );
  }
}

export default connect(
  null,
  { addProduct, removeProduct }
)(ProductComponent);
