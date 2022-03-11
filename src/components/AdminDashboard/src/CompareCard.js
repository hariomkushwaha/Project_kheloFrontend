import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import ProductComponent from "./components/ProductComponent";
import TableComponent from "./components/TableComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Compare() {
  return (
    <div>
      <HeaderComponent />
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