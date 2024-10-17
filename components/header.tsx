
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Media Downloader API Service</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/api-example">API Example</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
