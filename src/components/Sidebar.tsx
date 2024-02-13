import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, LinearProgress, List } from "@mui/material";
import UserItems from "./UserItems";

const Sidebar = () => {
  const BASE_URL = "http://127.0.0.1:8000/";
  const [userList, setUserList] = useState([]) ;
  const [userLoader, setUserLoader] = useState(true)

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
          setUserLoader(false)
          // console.log(userList);  
          // console.log(response.data);               
        })
        .catch((error) => {
          console.log("Error while making API request", error);
        });
    }
  }, []);

  return <div className="sidebar">
  {userLoader ? (<Box sx={{width: 100%}}><LinearProgress /></Box> ): 
  (<List sx={{width:'100%',maxWidth:360,bgcolor:'background.paper'}}>
     {userList.map((user,index)=>{
      <UserItems email={user.email} name={user.name}/>
     })}
  </List>)}
  </div>
};

export default Sidebar;
