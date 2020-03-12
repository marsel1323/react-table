import React from 'react';

import TableHead from '../table-head/table-head.component';
import TableBody from '../table-body/table-body.component';

const TableComponent = ({ data }) => (
  <div className="table">
    <table>
      <TableHead />
      <TableBody data={data} />
    </table>
  </div>
);

export default TableComponent;
