
import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";

const useAuth = () => {
  return useContext(AuthProvider);
};

// import { useContext } from "react";
// import { AuthContext } from "../context/AuthProvider";

// const useAuth = () => {
//   return useContext(AuthContext);
// };

// export default useAuth;
