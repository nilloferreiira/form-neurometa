import { toast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export function logout() {
  const router = useRouter();
  async function handleLogout() {
    try {
      Cookies.remove("token");
      return router.push("/");
    } catch (e) {
      console.log(`Logout Error: ${e}`);
      return toast({
        title: "Erro ao fazer sair da conta",
        variant: "destructive",
      });
    }
  }
  return { handleLogout };
}
