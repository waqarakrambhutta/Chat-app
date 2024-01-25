import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = () => {
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
        <Button variant="contained">Submit</Button>
      </div>
    </>
  );
};

export default Register;
