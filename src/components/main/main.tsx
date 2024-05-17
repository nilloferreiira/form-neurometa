import { Toaster } from "../ui/toaster";

export function Main({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <main className={`w-full`}>
      {children}
      <Toaster  />
    </main>
  );
}
