import "../app/globals.css";
import Navbar from "./navbar.jsx";
import { AuthProvider } from "../context/AuthContext";

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
          <div style={{ height: "72px" }} />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
