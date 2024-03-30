import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface SignUp {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
}

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }: SignUp) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      // const res = await fetch("http://localhost:3000/api/auth/signup/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     fullName,
      //     username,
      //     password,
      //     confirmPassword,
      //     gender,
      //   }),
      // });

      await axios
        .post(
          "http://localhost:5000/api/auth/signup",
          JSON.stringify({
            fullName,
            username,
            password,
            confirmPassword,
            gender,
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => console.log(res.data));
      // .then(res => console.log(res));

      // const data = await res.json();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};
export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}: any) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
