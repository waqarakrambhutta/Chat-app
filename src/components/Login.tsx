import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const BASE_URL = "http://127.0.0.1:8000/";

  const handleFormSubmit = () => {
    fetch(`${BASE_URL}auth/jwt/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        const token = data["access"];
        document.cookie = `token=${token}; path=/`;
        // console.log(document.cookie)
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="flex flex-col items-center w-full h-full pt-20 space-y-10">
        <TextField
          id="email"
          className="w-1/4 my-5"
          type="email"
          label="Email"
          variant="outlined"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          id="password"
          className="w-1/4 my-5"
          type="password"
          label="Password"
          variant="outlined"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Button variant="contained" onClick={handleFormSubmit}>
          Login
        </Button>
      </div>
    </>
  );
};

export default Login;
