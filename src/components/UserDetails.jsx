import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  //console.log(id);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }, [id]);

  if (!user.name) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center mt-3 border border-solid border-blue-500 py-3 px-2">
      <h1 className="text-6xl">User Details</h1>
      <h1 className="text-3xl">Name: {user.name}</h1>
      <h3>Username:{user.username}</h3>
      <h5>Phone:{user.phone}</h5>
      <h3>Company:{user.company.name}</h3>
      <div>
        <h3>Address:</h3>
        <h5>Street: {user.address.street}</h5>
        <hr />
        <h5>City: {user.address.city}</h5>
      </div>
    </div>
  );
};

export default UserDetails;
