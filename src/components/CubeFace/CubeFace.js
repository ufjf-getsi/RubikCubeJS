import React from "react";

export default function CubeFace({ valor }) {
  return (
    <div className="CubeFace">
      <table>
        <tr>
          <td>
            {valor}
          </td>
          <td>
            {valor}
          </td>
          <td>
            {valor}
          </td>
        </tr>
        <tr>
          <td>
            {valor}
          </td>
          <td>
            {valor}
          </td>
          <td>
            {valor}
          </td>
        </tr>
        <tr>
          <td>
            {valor}
          </td>
          <td>
            {valor}
          </td>
          <td>
            {valor}
          </td>
        </tr>
      </table>
    </div>
  );
}
