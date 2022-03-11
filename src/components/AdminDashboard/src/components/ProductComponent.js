import React from "react";
import { connect } from "react-redux";
import SingleProductComponent from "./SingleProductComponent";
import products from "../../../ProponentDashboard/ProponentDetails";

import { addProduct, removeProduct } from "../actions/index";

function setTotal() {
  for (var i = 0; i < products.length; i++) {
    products[i].Total = (products[i].Durability + products[i].Quality + products[i].Usability)/3;
    products[i].Total.toFixed(2);
  }
}

class ProductComponent extends React.Component {

  render() 
  {
    {console.log(this.props.products);
    setTotal();
    }
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
