import "./globals.css";
import Footer from "@/app/_components/general/Footer";
import Navbar from "@/app/_components/general/Navbar";

export const metadata = {
  title: "Food Waste Management",
  description: "PACS x VIRO Food Waste Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
          defer
        ></script>
        <script>
          window.OneSignalDeferred = window.OneSignalDeferred || [];
          OneSignalDeferred.push(function(OneSignal){" "}
          {OneSignal.init({
            appId: "b26b5cc4-1879-4a63-b584-929ec6109184",
            safari_web_id:
              "web.onesignal.auto.1a6e6435-147d-4598-9ef8-2c64afd14980",
            notifyButton: {
              enable: true,
            },
          })}
          );
        </script>
      </head>
      <body className="main">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
