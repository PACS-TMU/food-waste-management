import OneSignal from "react-onesignal";

export default async function runOneSignal() {
    await OneSignal.init({ appId: 'b26b5cc4-1879-4a63-b584-929ec6109184', allowLocalhostAsSecureOrigin: true});
    OneSignal.Slidedown.promptPush();
}