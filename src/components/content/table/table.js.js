import React from "react";
import { Table } from "react-bootstrap";
import { ContentTable } from "./content_table";
import { useSelector } from "react-redux";
export function TableComponent() {
  const data = useSelector((state) => state.reducerReemplace);
  const HandleManagerContentTable = () => {
    if (typeof data.file === "string") {
      return (
        <Table striped bordered hover style={{ margin: "2% 4%", width: "92%" }}>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Numer</th>
              <th>Hex</th>
            </tr>
          </thead>
          <ContentTable content={data} />
        </Table>
      );
    } else {
      return null;
    }
  };
  return HandleManagerContentTable();
}
