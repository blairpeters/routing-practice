import React, { useEffect, useState } from "react";
import User from "./User";
import TableData from "./TableData";
import TableRow from "./TableRow";
import Form from "./Form";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const displayUsers = users.map((user) => <User user={user} />);
  return (
    <div>
      <div className="form-input">
        <Form users={users} setUsers={setUsers} />
      </div>
      <div className="display bg-slate-500">{displayUsers}</div>

      {/* <div className="table-container">
        <table>
          <thead>
            <TableRow />
          </thead>
          <tbody>
            {users.map((data, index) => (
              <TableData data={data} />
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Home;
