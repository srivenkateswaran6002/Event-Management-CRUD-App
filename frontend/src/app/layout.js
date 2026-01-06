import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="p-4 bg-zinc-900 text-white font-bold text-center">Event Management System</header>
      {children}
      </body>
    </html>
  );
}
