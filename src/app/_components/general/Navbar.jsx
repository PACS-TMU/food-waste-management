import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-dark-green py-2 w-full flex">
            <Image
                src={"/icons/favicon-32x32.png"}
                alt={"PACS x VIRO"}
                width={32}
                height={32}
                priority={true}
                className="my-2 mx-3"
            />
        </nav>
    )
}