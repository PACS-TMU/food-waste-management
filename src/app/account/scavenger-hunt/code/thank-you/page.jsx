import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";

export default function ThankYou() {
    return (
        <div className="flex items-center justify-center p-4 h-[70vh] flex-col w-[95%] mx-auto py-4 mt-20 mb-20">
            <p className="text-3xl font-semibold text-center p-4">That&apos;s all Folks!</p>
            <p className="text-lg text-left px-4 py-2">
                Please speak to one of the VIRO X PACS team members to get a small thank you prize!
            </p>
            <p className="text-lg text-left py-2 px-4">
                Thank you for participating in our scavenger hunt and app demo, and we hope to see you at our next events! Good luck in the upcoming winter semester!
            </p>
            <div className="flex items-center justify-center flex-row my-6">
                <Image
                    src="/images/pacs.png"
                    width={150}
                    height={150}
                    alt="PACS Logo"
                />
                <IoCloseSharp size={24} className="mx-2" />
                <Image
                    src="/images/viro.png"
                    width={150}
                    height={150}
                    alt="VIRO Logo"
                />
            </div>
        </div>
    );
}