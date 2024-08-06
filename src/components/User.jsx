import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className="user">
      <h1>Name: {user.name}</h1>
      <h3>Email:{user.email}</h3>
      <button className="bg-blue-400 py-3 px-2">
        <Link to={`/users/${user.id}`}>View More</Link>
      </button>
    </div>
  );
};

export default User;
