import React, { useEffect, useState } from "react";
import axios from "axios";

const Sidebar = () => {
  const BASE_URL = "http://127.0.0.1:8000/";
  const [userList, setUserList] = useState({});

  const getAuthTokenFromCookie = () => {
    const [name, value] = document.cookie.split("=");

  
      if (name === "token") {
        console.log(value)
        return value;
      } else {
        return null;
      }
  };

  useEffect(() => {
    const authToken = getAuthTokenFromCookie();
    // console.log(authToken)
    if (authToken) {
      axios
        .get(`${BASE_URL}api/users/`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          setUserList(response.data);
          console.log(userList);          
        })
        .catch((error) => {
          console.log("Error while making API request", error);
        });
    }
  }, []);

  return <div className="sidebar"></div>;
};

export default Sidebar;
