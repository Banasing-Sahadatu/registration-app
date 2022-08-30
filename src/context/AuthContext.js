import React, { createContext, useState } from 'react'

const authContext = createContext();
AuthProvider = authContext.Provider;
function AuthContextProvider() {

    const [success, setSuccess] = useState("false");
    const [error, setError] = useState("null");
    const [loading, setLoading] = useState("false");
  const [user, setUser] = useState("null");
  
  // signup function
  const authRegister = async (username, email, password) =>{
    await fetch(url, {
      method:"POST"

    });
    }


  return (
    <div>
      
    </div>
  )
}

export default AuthContextProvider
