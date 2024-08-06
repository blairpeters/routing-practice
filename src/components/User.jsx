import React from "react";

const User = ({ user }) => {
  return (
    <div className="user">
      <h1>Name: {user.name}</h1>
      <h3>Email:{user.email}</h3>
    </div>
  );
};

export default User;
