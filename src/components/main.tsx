"use client";

import { Aside } from "./aside";

export function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full mx-auto flex items-center">
      <Aside />
      {children}
    </main>
  );
}
