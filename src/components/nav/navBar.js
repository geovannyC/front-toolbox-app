import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { NavDropDownList } from "./navDropDownList";
import { navigatorController } from "./controller/navigator.controller";
import { ACTIONS } from "../../actions/actions";
export function NavBar() {
  const dispatch = useDispatch();
  const sendContent =async (e) => {
    dispatch({
      type: ACTIONS.REEMPLACE,
      payload: {
        data: {
            file: false,
            lines: false,
          state: "loading",
        },
      },
    });
    const handleChangueContentFn = await navigatorController(e);
    dispatch(handleChangueContentFn);
  };
  return (
    <Navbar bg="danger" expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          React Test App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropDownList handleChangueContent={sendContent} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
