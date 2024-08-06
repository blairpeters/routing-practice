import React from "react";

const TableData = ({ data }) => {
  return (
    <div className="table-data">
      <tr key={data.id}>
        <td>{data.name}</td>
        <td>{data.username}</td>
        <td>{data.email}</td>
        <td>{data.address.street}</td>
        <td>{data.phone}</td>
        <td>{data.website}</td>
        <td>{data.company.name}</td>
      </tr>
    </div>
  );
};

export default TableData;
