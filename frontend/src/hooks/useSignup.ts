import { useState } from "react";
import toast from "react-hot-toast";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }:any) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    try {
      const res = await fetch("/api/auth/signup/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error:any) {
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
}:any) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields.");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password do not match.");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters.");
    return false;
  }
  return true;
}
