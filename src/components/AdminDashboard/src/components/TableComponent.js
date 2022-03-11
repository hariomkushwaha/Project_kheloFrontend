import React from "react";
import { connect } from "react-redux";
import { removeProduct } from "../actions/index";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import ComparisonCard from "./ComparisonCard";
class TableComponent extends React.Component {
  removeProduct = (product) => {
    this.props.removeProduct(product);
  };

  render() {
    return (
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
              {this.props.products.map((product) => {
                return <ComparisonCard prod={product} />;
              })}
          </Card>
        </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { removeProduct })(TableComponent);
