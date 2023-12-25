import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <h1>Page Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/" className='underline'>Return Home</Link>
    </div>
  )
}