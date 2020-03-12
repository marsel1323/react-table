import React from 'react';

import TableRow from '../table-row/table-row.component';

const TableBodyComponent = ({ data }) => (
  <tbody>
    {data.map((row) => (<TableRow row={row} />))}
  </tbody>
);

export default TableBodyComponent;
