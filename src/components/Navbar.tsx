import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Navbar() {
 return (
  <nav className="bg-slate-900 text-white shadow-lg">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
     <Link className="text-2xl font-bold hover:text-blue-400 transition" href="/">
      Portfolio
     </Link>
     
     <div className="flex items-center gap-6">
      <Link
       className="hover:text-blue-400 transition font-medium"
       href="/"
      >
       Home
      </Link>
      <Link
       className="hover:text-blue-400 transition font-medium"
       href="/about"
      >
       About
      </Link>
      <Link
       className="hover:text-blue-400 transition font-medium"
       href="/projects"
      >
       Projects
      </Link>
      <Link
       className="hover:text-blue-400 transition font-medium"
       href="/topics"
      >
       Team
      </Link>
      <a
       href="https://github.com"
       target="_blank"
       rel="noopener noreferrer"
       className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition"
      >
       <FaGithub size={20} />
       GitHub
      </a>
     </div>
    </div>
   </div>
  </nav>
 )
}