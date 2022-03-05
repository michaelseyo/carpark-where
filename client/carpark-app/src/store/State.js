import React, { useState, useContext, useEffect, createContext } from "react";

export const AuthContext = createContext();

export const useAuthProvider = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false); // set token together with the auth state?

  const checkToken = async () => {
    try {
      const res = await fetch("/api/check-auth", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      // Auth failed
      setAuthState(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {children}
    </AuthContext.Provider>
  );
};
