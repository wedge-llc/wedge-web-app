import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/images/icon-white.png"
              alt="Wedge Golf"
              width={32}
              height={32}
              className="mr-3"
            />
          </div>
          <p className="text-gray-400 mb-6">
            The premier social network for golf enthusiasts.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://apps.apple.com/" className="text-gray-400 hover:text-white">Download</a>
            <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <a href="mailto:support@wedgegolf.com" className="text-gray-400 hover:text-white">Support</a>
          </div>
          <p className="text-gray-400 text-sm">&copy; 2024 Wedge Golf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}