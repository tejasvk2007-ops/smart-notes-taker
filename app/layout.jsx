import "./globals.css";
import { NotesProvider } from "../context/NotesContext";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export const metadata = { title: "Smart Note Taker", description: "Lectures into short, organised notes for college students." };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <NotesProvider>
            <Navbar />
            {children}
          </NotesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
