"use client";

import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

export function PsychologistsProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-2">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
}
