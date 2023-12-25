import { MdHome, MdGroups, MdAccountCircle, MdSettings } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="fixed max-w-[768px] w-screen bottom-0 h-12">
            <div className="h-full bg-dark-green text-white grid grid-rows-1 grid-cols-4 py-3 px-2 justify-center items-center">
                <button className="home flex justify-center items-center border-r">
                    <Link href="/">
                        <MdHome size={28} />
                    </Link>
                </button>
                <button className="preferences flex justify-center items-center border-r">
                    <Link href="/preferences">
                        <MdSettings size={28} />
                    </Link>
                </button>
                <button className="group flex justify-center items-center border-r">
                    <Link href="/group">
                        <MdGroups size={28} />
                    </Link>
                </button>
                <button className="account flex justify-center items-center">
                    <Link href="/account">
                        <MdAccountCircle size={28} />
                    </Link>
                </button>
            </div>
        </footer>
    )
}