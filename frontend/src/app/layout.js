import Link from "next/link";
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-gray-100">
        <div className="w-full flex items-center justify-between bg-zinc-900 px-6 py-4">
        <Link href="/" className="text-white font-bold text-xl">
        Event Management System
        </Link>
        <Link href="/events/new" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-center rounded px-4 py-2">
        Create New Event
        </Link>
        </div>
      {children}
      </body>
    </html>
  );
}
