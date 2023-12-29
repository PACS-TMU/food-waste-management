import "./globals.css";
import Footer from "@/app/_components/general/Footer";
import Navbar from "@/app/_components/general/Navbar";

export const metadata = {
  title: "To Go!",
  description: "PACS x VIRO Food Waste Management App - Reducing food waste generated from student groups, one meal at a time!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
