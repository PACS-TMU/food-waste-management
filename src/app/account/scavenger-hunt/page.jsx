import Link from 'next/link';

export default function ScavengerHunt() {
    return (
        <div className="flex items-center justify-center p-4 h-[70vh] flex-col w-[95%] mx-auto py-4 mt-20 mb-16">
            <p className="text-3xl font-semibold text-center p-4">Let the Scavenger Hunt begin!!</p>
            <p className="text-left p-6 pt-2">
                Welcome, intrepid space explorers, to the VIRO X PACS Cosmic Scavenger Hunt – where the mysteries of the universe 
                unfold, and the fun is as boundless as the cosmos itself! As you rocket around the room, each clue holds a piece of the puzzle. Remember, complete all the 
                steps in the correct order, and you&apos;ll unlock the cosmic wonders that await. It&apos;s a space adventure like no other, and your mission, should you choose to accept 
                it, is to laugh, explore, and discover the treasures hidden among the stars!
            </p>
            <p className="text-lg font-semibold p-6 pb-0">Hint #1:</p>
            <p className="text-left p-6 pt-2">&quot;Under the rocket&apos;s glow, where lanterns brightly show, find the secret code that&apos;s ready to blow!&quot;</p>
            <p className="text-gray-400 p-6 pb-0">Done with this hint?</p>
            <Link href="/account/scavenger-hunt/code" className='flex items-center justify-center w-3/4 lg:w-1/2 h-10'><button className="my-4 bg-blue-highlight w-3/4 lg:w-1/2 h-10 rounded-md shadow-md hover:scale-105">Next Step</button></Link>
        </div>
    );
}