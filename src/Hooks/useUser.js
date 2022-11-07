import { useState } from "react";

export function useUser() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  return{user, setUser}
}
