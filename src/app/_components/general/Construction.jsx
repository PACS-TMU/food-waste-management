import Link from "next/link";
import { GiBulldozer } from "react-icons/gi";

export default function Construction() {
    return (
        <div className="flex flex-col justify-center items-center w-[95%] mx-auto">
            <GiBulldozer className="text-9xl text-center pt-4" />
            <p className="text-3xl font-bold text-center py-4">We&apos;re working on it!</p>
            <p className="text-lg text-gray-700 text-center pt-4">This page is currently under construction!</p>
            <p className="text-lg text-gray-700 text-center pt-2">Check back soon!</p>
            <Link href="/" className='underline text-gray-700 pt-2'>Return Home</Link>
        </div>
        
    );
}