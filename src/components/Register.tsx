import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    "username": "",
    "email": "",
    "first_name": "",
    "last_name": "",
    "password": "",
  });
  const BASE_URL = "http://127.0.0.1:8000/";

  const handleFormSubmit = () => {
    fetch(`${BASE_URL}user/register/`, {
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
          id="username"
          className="w-1/4"
          type="text"
          label="Username"
          variant="outlined"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <TextField
          id="email"
          className="w-1/4"
          type="email"
          label="Email"
          variant="outlined"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          id="first_name"
          className="w-1/4 pt-10"
          type="text"
          label="First Name"
          variant="outlined"
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
        />
        <TextField
          id="last_name"
          className="w-1/4 my-5"
          type="text"
          label="Last Name"
          variant="outlined"
          onChange={(e) =>
            setFormData({ ...formData, last_name: e.target.value })
          }
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
          Submit
        </Button>
      </div>
    </>
  );
};

export default Register;
