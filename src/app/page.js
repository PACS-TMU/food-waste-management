'use client'
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    OneSignalDeferred.push(async function (OneSignal) {
        await OneSignal.init({
            appId: "b26b5cc4-1879-4a63-b584-929ec6109184",
            safari_web_id: "web.onesignal.auto.1a6e6435-147d-4598-9ef8-2c64afd14980",
            notifyButton: {
                enable: true,
            },
            allowLocalhostAsSecureOrigin: true,
        });
    });
    return () => {
        window.OneSignal = undefined;
    };
}, []);
  return (
      <div>
      </div>
  )
}
