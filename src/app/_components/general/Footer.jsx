import { MdHome, MdGroups, MdAccountCircle, MdSettings } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="fixed max-w-[768px] w-screen bottom-0 h-12">
            <div className="h-full bg-dark-green text-white grid grid-rows-1 grid-cols-4 py-3 px-2 justify-center items-center">
                <button className="home flex h-12 justify-center items-center border-r">
                    <Link href="/" className="h-full w-full flex items-center justify-center">
                        <MdHome size={28} />
                    </Link>
                </button>
                <button className="group flex h-12 justify-center items-center border-r">
                    <Link href="/group" className="h-full w-full flex items-center justify-center">
                        <MdGroups size={28} />
                    </Link>
                </button>
                <button className="settings flex h-12 justify-center items-center border-r">
                    <Link href="/settings" className="h-full w-full flex items-center justify-center">
                        <MdSettings size={28} />
                    </Link>
                </button>               
                <button className="account flex h-12 justify-center items-center">
                    <Link href="/account" className="h-full w-full flex items-center justify-center">
                        <MdAccountCircle size={28} />
                    </Link>
                </button>
            </div>
        </footer>
    )
}