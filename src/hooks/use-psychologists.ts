'use client'

import { Psychologist } from "@/utils/interface-psychologist";
import { useQuery } from "@tanstack/react-query";
import { backend } from "@/lib/backend";
import Cookies from "js-cookie";

export function usePsychologists() {
  const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ1c2VyMTBAZXhhbXBsZS5jb20iLCJpZCI6ImI3ZGViMjg5LTI4YjgtNGNiNi04ZjBkLWMxODQ1YWZmODQyMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlBhY2llbnRlIiwiZXhwIjoxNzE1ODg5NjE3fQ.XikHc06ALVcgdW_bLy0y0z9ZKHJPBaK0jFhJByCXCKo'

  async function getPsychologists() {
    let PsychologistResponse: Psychologist[] = [];
    const jwt = Cookies.get("jwt");
    console.log(jwt)

    try {
      const response = await backend.get("/api/Psicologo/GetAll", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.$values);
      PsychologistResponse = response.data.$values;

    //   if (!Array.isArray(response.data)) {
    //     throw new Error("Data is not an array!");
    //   }

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
