import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-dark-green py-2 w-full flex flex-row justify-between items-center h-16 px-8 z-20">
            <h1 className="text-white text-3xl">To Go!</h1>
            <Image
                src={"/icons/logo.png"}
                alt={"PACS x VIRO"}
                width={512}
                height={512}
                priority={true}
                className="my-2 w-10"
            />
        </nav>
    )
}