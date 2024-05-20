"use client";

import { useState, useEffect } from "react";
import { RegisterButton } from "../register-button";
import { DropDownUser } from "./dropdown-user";
import Cookies from 'js-cookie';

export function ProfileContainer() {
  const [token, setToken] = useState<boolean>(false);

  useEffect(() => {
    const jwt = Cookies.get("jwtToken");
    if (jwt !== undefined) {
      setToken(!token);
    }
  }, []);

  return <>{token ? <DropDownUser /> : <RegisterButton />}</>;
}
