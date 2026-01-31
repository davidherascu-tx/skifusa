import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import Footer here
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Navbar and Footer here ensure they are on EVERY page */}
        <Navbar />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}