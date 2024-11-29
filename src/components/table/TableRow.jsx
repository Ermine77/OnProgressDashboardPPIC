import React from 'react';

function TableRow({ item }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.machine}</td>
      <td>{item.product}</td>
      <td>{item.partNo}</td>
      <td>{item.cycleTime}</td>
      <td>{item.cavity}</td>
      <td>{item.shift1Qty}</td>
      <td>{item.shift1Time}</td>
      <td>{item.shift2Qty}</td>
      <td>{item.shift2Time}</td>
      <td>{item.shift3Qty}</td>
      <td>{item.shift3Time}</td>
      <td>{item.addedTime}</td>
      <td>{item.action}</td>
    </tr>
  );
}

export default TableRow;