import Image from "next/image";

export default function NotificationMessage({ isNotification, setNotification }) {
    return (
        <div className={`notification max-w-[768px] w-[95vw] lg:w-[500px] top-0 min-h-[19vh] rounded-md shadow-md mt-[-1vh] pt-[1vh] bg-white z-20 ${isNotification ? 'fixed' : 'hidden'}`}>
            <div className="flex flex-col justify-center items-center h-full min-h-[19vh]">
                <div className="notificaton-message grid grid-flow-col py-4 pl-8 pr-4 justify-center items-center max-h-3/4">
                    <div className="notification-logo w-[50px] h-[50px] pr-2">
                        <Image
                            src="/icons/android-chrome-192x192.png"
                            width={50}
                            height={50}
                            alt="logo"
                            className="mr-4"
                        />
                    </div>
                    <p className="notification-text font-sans pl-4">&quot;To Go!&quot; would like to send you notifications for latest news and updates.</p>
                </div>
                <button
                    className="notification-button bg-blue-highlight hover:opacity-90 w-1/2 rounded-sm my-3 py-2 shadow-md"
                    onClick={(e) => { setNotification(!isNotification) }}
                >
                    Allow
                </button>
            </div>

        </div>
    )
}