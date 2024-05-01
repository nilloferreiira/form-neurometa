import { Aside } from "../aside";
import { SideBar } from "../side-bar";

export function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full mx-auto flex items-center justify-around">
      {children}
    </main>
  );
}
