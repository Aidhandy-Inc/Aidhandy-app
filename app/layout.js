import "./globals.css";
import Navbar from "../components/Navbar.jsx";
// FIX: Changed alias import to relative path:
// Assuming 'context' folder is at the root level (one level above 'app')
import AuthProvider from "../context/AuthContext";

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
          {/* Main content wrapper with pt-16 to create space below the fixed Navbar */}
          <main className="pt-16 min-h-screen">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
