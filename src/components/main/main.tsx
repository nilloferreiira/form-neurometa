import { Toaster } from "../ui/toaster";

export function Main({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <main className={`mx-[5%] w-[95%]`}>
      {children}
      <Toaster  />
    </main>
  );
}
