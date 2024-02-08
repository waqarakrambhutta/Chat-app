import React, { useEffect, useState } from "react";
import withAuthenctication from "../utils/withAuthentication";
import axios from "axios";

const Sidebar = () => {
  const BASE_URL = "http://127.0.0.1:8000/";
  const [userList, setUserList] = useState([]);

  const getAuthTokenFromCookie = () => {
    const [name, value] = document.cookie.split("=");
    console.log()
    if (name === "token") {
      // console.log(value)
      return value;
    }
    return null;
  };

  useEffect(() => {
    const authToken = getAuthTokenFromCookie();
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

export default withAuthenctication(Sidebar);
