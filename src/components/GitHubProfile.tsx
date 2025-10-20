'use client'
import { useState, useEffect } from 'react'
import { FaGithub, FaMapMarkerAlt, FaLink } from 'react-icons/fa'

interface GitHubUser {
  login: string
  name: string
  avatar_url: string
  bio: string
  location: string
  blog: string
  public_repos: number
  followers: number
  following: number
  html_url: string
}

export default function GitHubProfile({ username }: { username: string }) {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGitHubUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`)
        if (!res.ok) {
          throw new Error('Failed to fetch GitHub profile')
        }
        const data = await res.json()
        setUser(data)
      } catch (error) {
        console.error('Error fetching GitHub profile:', error)
        setError('Failed to load GitHub profile')
      } finally {
        setLoading(false)
      }
    }
    fetchGitHubUser()
  }, [username])

  if (loading) return <div className="text-center py-8">Loading profile...</div>
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>
  if (!user) return null

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="w-32 h-32 rounded-full border-4 border-slate-200"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
          <p className="text-xl text-slate-600 mb-3">@{user.login}</p>
          {user.bio && <p className="text-slate-700 mb-4">{user.bio}</p>}
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-slate-600 mb-4">
            {user.location && (
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt />
                <span>{user.location}</span>
              </div>
            )}
            {user.blog && (
              <div className="flex items-center gap-1">
                <FaLink />
                <a
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {user.blog}
                </a>
              </div>
            )}
          </div>

          <div className="flex gap-6 justify-center md:justify-start">
            <div>
              <span className="font-bold text-lg">{user.public_repos}</span>
              <span className="text-slate-600 ml-1">Repositories</span>
            </div>
            <div>
              <span className="font-bold text-lg">{user.followers}</span>
              <span className="text-slate-600 ml-1">Followers</span>
            </div>
            <div>
              <span className="font-bold text-lg">{user.following}</span>
              <span className="text-slate-600 ml-1">Following</span>
            </div>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition"
          >
            <FaGithub size={20} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}
