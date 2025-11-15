import "./globals.css";
import Navbar from "../components/Navbar.jsx";
import AuthProvider from "@context/AuthContext";

export const metadata = {
  title: "AidHandy",
  description: "Airport & inflight companion service made simple.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {/* Main content wrapper: pt-16 ensures content starts below the Navbar. */}
          <main className="pt-16 min-h-screen">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
