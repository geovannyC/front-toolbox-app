import React from "react";
import { Card } from "react-bootstrap";

export  function Empty_status() {
  return (
    <Card style={{ margin: "2% 4%", width: "92%" }}>
      <Card.Body style={{display: "flex", width: "100%", justifyContent: "center", fontSize:"1.8rem" }}>Select a File</Card.Body>
    </Card>
  );
}
