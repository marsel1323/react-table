import React from 'react';

const TableRowComponent = ({ row }) => (
  <tr key={row.id}>
    <td>*</td>
    <td>{row.id}</td>
    <td>{row.firstName}</td>
    <td>{row.lastName}</td>
    <td>{row.email}</td>
    <td>{row.phone}</td>
  </tr>
);

export default TableRowComponent;
