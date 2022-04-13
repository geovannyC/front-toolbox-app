import React from "react";

export function ContentTable({ content }) {
  return (
    <tbody>
      {content.lines.map((item) => {
        return (
          <tr key={item.hex}>
            <td>{content.file}</td>
            <td>{item.text}</td>
            <td>{item.number}</td>
            <td>{item.hex}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
