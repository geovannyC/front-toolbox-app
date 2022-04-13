import React from "react";
import { Empty_status } from "./status/empty_status";
import { TableComponent } from "./table/table.js";
import { Loading_status } from "./status/loading_status";
import { Error_status } from "./status/error_status";
import { useSelector } from "react-redux";
export function HandleChangueStatus() {
  const data = useSelector((state) => state.reducerReemplace);
  const HandleChangueStatusManager = () => {
    switch (true) {
      case data.state === "success":
        return <TableComponent/>;
      case data.state === "loading":
        return <Loading_status/>;
      case data.state === "error":
        return <Error_status/>;
      default:
        return <Empty_status/>;
    }
  };

  return HandleChangueStatusManager();
}
