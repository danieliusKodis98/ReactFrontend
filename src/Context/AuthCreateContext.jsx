import React, { createContext, useState, useEffect } from "react";

const globalAuthContext = createContext({
    isAuthenticated: false,
    user: null,
    login: () => {},
    logout: () => {},
  });

   const GlobalAuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    if(isLoading){
        return(
        <div>Is Loading</div>
        );
    }
    useEffect(() => {
        setIsLoading(true)
       
        const token = localStorage.getItem('token');
        const currUser = localStorage.getItem('user');
        if (token && currUser) {
          setIsAuthenticated(true);
          setUser(JSON.parse(currUser));
          console.log("Initial user loaded from storage:", JSON.parse(currUser));
        }
        setIsLoading(false);
      }, []);
      
      useEffect(() => {
        console.log("Auth context updated");
        console.log("isAuthenticated:", isAuthenticated);
        console.log("user:", user);
      }, [isAuthenticated, user]);

   const login = (token, userInfo) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userInfo));

    setIsAuthenticated(true);
    setUser(userInfo);
    
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
  };
  
    return (
      <globalAuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
        {children}
      </globalAuthContext.Provider>
    );
}
 export { globalAuthContext, GlobalAuthProvider };