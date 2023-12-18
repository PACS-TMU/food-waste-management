import "./globals.css";
import Footer from "@/app/_components/general/Footer";
import Navbar from "@/app/_components/general/Navbar";

export const metadata = {
  title: "Food Waste Management",
  description: "PACS x VIRO Food Waste Management App",
  script: "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
      </head>
      <body className="main">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
