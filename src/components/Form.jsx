import React, { useState } from "react";

const Form = ({ users, setUsers }) => {
  const [FormData, setFormData] = useState({
    name: "",
    username: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    //updating state

    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(FormData),
    })
      .then((res) => res.json())
      .then((user) => setUsers([user, ...users]));
    setFormData({
      name: "",
      username: "",
    });
  };
  return (
    <div className="form-wrapper">
      <div>
        <h1>Post User</h1>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter name..."
            value={FormData.name}
            name="name"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter username...."
            value={FormData.email}
            name="email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <input type="submit" className="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
