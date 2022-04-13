import React, { useEffect } from "react";
import {  useDispatch } from "react-redux";

import { NavBar } from "../nav/navBar";
import { HandleChangueStatus } from "../content/handleChangueStatus";
import { homeController } from "./controller/home.controller";

export function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    getListFiles();
  }, []);
  const getListFiles = async () => {
    const url = "/files/list";
    const getAllFiles = await homeController(url)
    if (getAllFiles) {
        dispatch(getAllFiles);
      }
  };
  return (
    <>
      <NavBar />
      <HandleChangueStatus />
    </>
  );
}
