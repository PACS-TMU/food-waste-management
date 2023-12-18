import "./globals.css";
import Footer from "@/app/_components/general/Footer";
import Navbar from "@/app/_components/general/Navbar";
import NotificationMessage from "@/app/_components/homepage/NotificationMessage";

export const metadata = {
  title: "Food Waste Management",
  description: "PACS x VIRO Food Waste Management App",
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
