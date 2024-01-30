import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { data } from "autoprefixer";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });
  const BASE_URL = "http://127.0.0.1:8000/";

  const handleFormSubmit = () => {
    fetch(`${BASE_URL}/auth/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="flex flex-col items-center w-full h-full pt-20 space-y-10">
        <TextField
          id="email"
          className="w-1/4"
          type="email"
          label="Email"
          variant="outlined"
        />
        <TextField
          id="first_name"
          className="w-1/4 pt-10"
          type="text"
          label="First Name"
          variant="outlined"
        />
        <TextField
          id="last_name"
          className="w-1/4 my-5"
          type="text"
          label="Last Name"
          variant="outlined"
        />
        <TextField
          id="password"
          className="w-1/4 my-5"
          type="password"
          label="Password"
          variant="outlined"
        />
        <Button variant="contained" onClick={handleFormSubmit}>Submit</Button>
      </div>
    </>
  );
};

export default Register;
