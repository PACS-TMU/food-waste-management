import './globals.css'
import Footer from "@/app/_components/general/Footer";
import Navbar from "@/app/_components/general/Navbar";

export const metadata = {
  title: 'Food Waste Management',
  description: 'PACS x VIRO Food Waste Management App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className="main">{children}</body>
      <Footer />
    </html>
  )
}
