import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
export function NavDropDownList({ handleChangueContent}) {
    const data = useSelector((state) => state.reducerListFiles);
    const SchemmaDropDown = () => {
        const ListMap = () => {
          if (typeof data === "object") {
            return data.map((e) => {
              return (
                <NavDropdown.Item key={e} onClick={() => handleChangueContent(e)}>
                  {e}
                </NavDropdown.Item>
              );
            });
          } else {
            return <small>cargando</small>;
          }
        };
        return (
          <NavDropdown title="Files" id="basic-nav-dropd  own">
            {ListMap()}
          </NavDropdown>
        );
      };
  return SchemmaDropDown()
}
