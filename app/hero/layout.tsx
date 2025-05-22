export default function HeroLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth bg-white text-gray-900">
      <body className="antialiased font-sans min-h-screen bg-white">
        <main className="flex-grow w-full">{children}</main>
      </body>
    </html>
  );
}
