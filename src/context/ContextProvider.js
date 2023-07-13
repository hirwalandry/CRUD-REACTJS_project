import React, { useState, useEffect, createContext, useContext,  } from "react"

const StateContext = createContext()

const initialValues = {
  firstname: "",
  secondname: "",
  email: "",
  gender: "",
  dob: "",
  status: "",
  asset: { havingHouse: false, havingCar: false, havingBisycle: false },
};

export const  ContextProvider = ({ children }) => {
    const [values,] = useState(initialValues)
    const [users, setUsers] = useState([])
 
   

    const usersRecord = (user) => {
     
        let recordUsers = [...users]
        recordUsers.push(user)
        localStorage.setItem("users", JSON.stringify(recordUsers))
        setUsers(recordUsers);
    }
     useEffect(() => {
       const localUser = JSON.parse(localStorage.getItem("users"));
       setUsers(localUser || []);
     }, []);
    console.log(users);
    return (
      <StateContext.Provider value={{ values, users, usersRecord }}>
        {children}
      </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);