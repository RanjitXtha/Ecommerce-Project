import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const authenticate = async () => {
      try {
        const token = localStorage.getItem("token");
       
        if (!token) {
          console.log("No token available");
          return;
        }

        const response = await fetch("https://ecommerce-project-ierh.vercel.app/protected", {
          headers: {
            Authorization: token,
          },
        });

        const data = await response.json();
    
        if (!data.success) {
          console.log(data.message);
          localStorage.removeItem("token");
          setUser(null);
          return;
        }
        setUser(data.user);
      } catch (error) {
        console.error("Authentication Error:", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    };

    authenticate();
  }, []);

  const logout = () => {
    console.log("logging out")
    localStorage.removeItem('token'); 
    setUser(null); 
  };

  return <AuthContext.Provider value={{ user, setUser ,logout }}>{children}</AuthContext.Provider>;
};
