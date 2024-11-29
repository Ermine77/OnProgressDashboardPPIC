import React from 'react';
import '../styles/table.css';

function InjectionTable() {
  // Updated dummy data to include separate targets and times for each shift
  const data = [
    {
      id: 1,
      machine: 'HC 600T',
      product: 'Shell TRX 3.2 Injection',
      partNo: 'P11403A',
      cycleTime: 55,
      cavity: 1,
      shift1Qty: 449,
      shift1Time: 7,
      shift2Qty: 449,
      shift2Time: 7,
      shift3Qty: 449,
      shift3Time: 7,
      addedTime: '7',
      action: 'Edit/Delete',
    },
    // Add more entries as needed...
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Mesin</th>
          <th>Nama Produk / Item</th>
          <th>Part No</th>
          <th>Cycle Time</th>
          <th>Cavity</th>
          <th colSpan="2">Shift 1</th>
          <th colSpan="2">Shift 2</th>
          <th colSpan="2">Shift 3</th>
          <th>Added Time</th>
          <th>Action</th>
        </tr>
        <tr>
          {/* Empty headers for first 6 columns */}
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>

          {/* Sub-headers for each shift */}
          <th>Target Qty</th>
          <th>Waktu (Jam)</th>
          <th>Target Qty</th>
          <th>Waktu (Jam)</th>
          <th>Target Qty</th>
          <th>Waktu (Jam)</th>

          {/* Empty headers for the last two columns */}
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
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
        ))}
      </tbody>
    </table>
  );
}

export default InjectionTable;