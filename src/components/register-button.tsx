import Link from "next/link";

export function RegisterButton() {
  return (
    <Link
      href={"/register-form"}
      className="bg-royleBlue hover:bg-royleBlue/80 text-zinc-50 p-2 rounded-md font-regular"
    >
      Cadastre-se
    </Link>
  );
}
