import React from 'react';

function TableHeader() {
  return (
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
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>Target Qty</th>
        <th>Waktu (Jam)</th>
        <th>Target Qty</th>
        <th>Waktu (Jam)</th>
        <th>Target Qty</th>
        <th>Waktu (Jam)</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
  );
}

export default TableHeader;