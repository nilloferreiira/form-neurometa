import { toast } from "@/components/ui/use-toast";
import { jwtDecode } from "jwt-decode";
import { api } from "@/lib/api";
import Cookies from "js-cookie";

export async function useUploadForm(form: FormData) {
  const token = Cookies.get("token");
  const decoded = jwtDecode(token!);

  await api
    .post(`/upload/${decoded.sub}`, form, {
      headers: {
        "Content-Type": "application/pdf",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() =>
      toast({
        title: "Arquivo enviado com sucesso!",
      })
    )
    .catch((error) => {
      toast({
        title: "Erro ao enviar o arquivo!",
        variant: "destructive",
      });

      console.log(error);
    });
}
