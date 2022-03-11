import React from "react";
import { connect } from "react-redux";
import { removeProduct } from "../actions/index";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

class TableComponent extends React.Component {
  removeProduct = product => {
    this.props.removeProduct(product);
  };

  render() {
    return (
      <Col md={{ span: 10, offset: 1 }}>
        <Table hover className="tableProducts">
          <thead>
            <tr>
            <th>Tender ID</th>
            <th>Tender Reference Number</th>
            <th>Organisation</th>
            <th>Tender Value</th>
            <th>EMD Amount</th>
            <th>Tender Fee</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => {
              return (
                <tr key={product.TenderID}>
                  <td>{product.TenderID}</td>
                  <td>{product.TenderReferenceNumber}</td>
                  <td>{product.Organisation}</td>
                  <td>{product.TenderValue}</td>
                  <td>{product.EmdAmount}</td>
                  <td>{product.TenderFee}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { removeProduct }
)(TableComponent);
