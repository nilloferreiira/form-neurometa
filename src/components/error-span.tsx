export function ErrorSpan({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <span className="text-sm md:text-base font-semibold text-red-500">{children}</span>
    )
}