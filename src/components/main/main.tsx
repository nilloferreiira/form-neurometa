export function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full mx-auto">
      {children}
    </main>
  );
}
