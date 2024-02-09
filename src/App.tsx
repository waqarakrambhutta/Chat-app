import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import Chatarea from "./components/Chatarea";

const App = () => {
  const [isAuthencticated, setIsAuthenticated] = useState(false);
  // console.log(isAuthencticated)
  useEffect(() => {
    const token = document.cookie;
    // console.log(token.length>150);

    if (token.length>0) {
      setIsAuthenticated(true);
      // console.log(true)
    }else{
      setIsAuthenticated(false)
      console.log(false);
      
    }
  }, [isAuthencticated]);

  return (
    <>
      {/* <div className="chat-container">
        <Sidebar />
        <Chatarea />
      </div> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/chat"
            element={
              isAuthencticated ? (
                <>
                  <Sidebar />
                  <Chatarea />
                </>
              ) : (
                <Login />
              )
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
