import { useContext } from "react";
import { AuthContext } from "../contexts/FakeAuthContext";

function useAuth() {
  const value = useContext(AuthContext);

  if (value === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return value;
}

export { useAuth };
