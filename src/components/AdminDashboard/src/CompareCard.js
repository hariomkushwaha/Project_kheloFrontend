import React from "react";
import ProductComponent from "./components/ProductComponent";
import TableComponent from "./components/TableComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Compare() {
  return (
    <div>
      <Container>
        <br />
        <Row>
          <ProductComponent />
        </Row>
        <br />
        <Row>
          <TableComponent />
        </Row>
      </Container>
    </div>
  );
}