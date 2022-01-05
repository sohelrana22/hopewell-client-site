<<<<<<< HEAD
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthProvider";

// const useAuth = () => {
//   return useContext(AuthContext);
// };
=======
import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";

const useAuth = () => {
  return useContext(AuthProvider);
};

>>>>>>> 81faef4b8f47eff9c4d845b32667b71a8d92403b

export default useAuth;
