"use client";

import { backend } from "@/lib/backend";
import { jwtResponse } from "@/utils/jwt-response-interface";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export interface User {
  id: string;
  nome: string;
  dataNascimento: string;
  fotoPerfil: string;
  enderecoCompleto: string;
  role: string;
}

export async function useUser() {
  const jwt = Cookies.get("jwtToken");

  if (!jwt) {
    throw new Error("Back-end unauthenticated.");
  }

  const decoded: jwtResponse = jwtDecode(jwt);

  const userId = decoded.id;

  try {
    const userResponse = await backend.get(`/GetById/${userId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const user = userResponse.data.data;

    return user;
  } catch (e) {
    console.log(`Erro getUser(): ${e}`);
  }
}
