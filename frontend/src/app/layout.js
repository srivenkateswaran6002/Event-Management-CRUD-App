import Link from "next/link";
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Link href="/">
        <header className="p-4 bg-zinc-900 text-white font-bold text-center">Event Management System</header>
        </Link>
      {children}
      </body>
    </html>
  );
}
