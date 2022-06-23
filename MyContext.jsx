import React, { createContext,useState } from "react";
export const UserContext = createContext();
// const UserProvider = ({ children }) => {
//     const [authorized,setAuthorized]=useState(false);
//     const [name, setName] = useState("John Doe");
//     const [age, setAge] = useState(1);
//     const happyBirthday = () => setAge(age + 1);
//     return (
//       <UserContext.Provider value={{ name, age, happyBirthday, authorized}}>
//         {children}
//       </UserContext.Provider>
//     );
//   };

//   export {UserContext,UserProvider};