import Image from "next/image";

export default function NotificationMessage({ isNotification, setNotification }) {
    return (
        <div className={`notification max-w-[768px] w-[95vw] md:w-[500px] top-0 min-h-[19vh] rounded-md shadow-md mt-[-1vh] pt-[1vh] bg-white z-20 ${isNotification ? 'flex' : 'hidden'}`}>
            <div className="flex flex-col justify-center items-center h-full min-h-[19vh]">
                <div className="notificaton-message grid grid-flow-col py-4 pl-8 pr-4 justify-center items-center max-h-3/4">
                    <div className="notification-logo w-[50px] h-[50px] pr-2">
                        <Image
                            id="notification-logo"
                            src="/icons/android-chrome-192x192.png"
                            width={192}
                            height={192}
                            alt="logo"
                            className="mr-4 w-50 h-50"
                        />
                    </div>
                    <p id="notification-text" className="font-sans pl-4">&quot;To Go!&quot; would like to send you notifications for latest news and updates.</p>
                </div>
                <button
                    id="allow-button"
                    className="bg-blue-highlight hover:opacity-90 hover:scale-110 w-1/2 rounded-sm my-3 py-2 shadow-md"
                    onClick={(e) => {
                        document.getElementById('notification-text').className += 'transition-opacity duration-500 opacity-0';
                        document.getElementById('allow-button').className += 'transition-opacity duration-500 opacity-0';
                        document.getElementById("notification-logo").className += 'transition-opacity duration-500 opacity-0';
                        setTimeout(() => {
                            document.getElementById('notification-text').innerHTML = 'Notifications are now enabled! You can disable them from your browser settings.';
                            document.getElementById('notification-text').className = 'font-sans pl-4';
                            document.getElementById('allow-button').className = 'hidden';
                            document.getElementById('done-button').className = 'bg-light-green hover:opacity-90 hover:scale-110 w-1/2 rounded-sm my-3 py-2 shadow-md block text-white';
                            document.getElementById("notification-logo").className = 'mr-4';
                        }, 500);

                    }}
                >
                    Allow
                </button>
                <button
                    id="done-button"
                    className="hidden"
                    onClick={(e) => {
                        document.getElementById('notification-text').className += 'transition-opacity duration-500 opacity-0';
                        document.getElementById('done-button').className += 'transition-opacity duration-500 opacity-0';
                        document.getElementById("notification-logo").className += 'transition-opacity duration-500 opacity-0';
                        setTimeout(() => {
                            setNotification(false);
                        }, 500)

                    }}
                >
                    Done
                </button>
            </div>

        </div>
    )
}