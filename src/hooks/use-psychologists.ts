'use client'

import { Psychologist } from "@/utils/interface-psychologist";
import { useQuery } from "@tanstack/react-query";
import { backend } from "@/lib/backend";
import Cookies from "js-cookie";

export function usePsychologists() {
  async function getPsychologists() {
    let PsychologistResponse: Psychologist[] = [];
    const jwt = Cookies.get("jwtToken");

    try {
      const response = await backend.get("/api/Psicologo/GetAll", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log(response.data.$values);
      PsychologistResponse = response.data.$values;

      if (!Array.isArray(response.data)) {
        throw new Error("Data is not an array!");
      }

    } catch (e) {
      console.log("Erro api getPsychologists");
    }


    
    return PsychologistResponse;
  }

  const { data: psychologists } = useQuery({
    queryKey: ["psychologists"],
    queryFn: getPsychologists,
  });

  return { psychologists };
}
