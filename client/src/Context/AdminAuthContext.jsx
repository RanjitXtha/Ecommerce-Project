import React, { createContext, useState, useEffect } from "react";

export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
 
  useEffect(() => {
    const authenticate = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        // console.log("admin" + token)
        if (!token) {
          console.log("No token available");
          return;
        }

        const response = await fetch("http://localhost:5000/admin/protected", {
          headers: {
            Authorization: token,
          },
        });

        const data = await response.json();
        //console.log(data);

        if (!data.success) {
          //console.log(data.message);
          localStorage.removeItem("adminToken");
          setAdmin(null);
          return;
        }
        //console.log(data.user)
        setUser(data.user);
      } catch (error) {
        console.error("Authentication Error:", error);
        localStorage.removeItem("adminToken");
        setAdmin(null);
      }
    };

    authenticate();
  }, []);

  const logout = () => {
    console.log("logging out")
    localStorage.removeItem('adminToken'); 
    setAdmin(null); 
  };

  return <AdminAuthContext.Provider value={{ admin, setAdmin ,logout }}>{children}</AdminAuthContext.Provider>;
};
