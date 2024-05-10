import { useRouter } from "next/navigation";

export function returnToUpload() {
  const router = useRouter();

  return router.push("/upload");
}
