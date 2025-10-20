'use client'
import { useState, useEffect } from 'react'
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
  updated_at: string
}

export default function GitHubRepos({ username }: { username: string }) {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
        )
        if (!res.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const data = await res.json()
        setRepos(data)
      } catch (error) {
        console.error('Error fetching repositories:', error)
        setError('Failed to load repositories')
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [username])

  if (loading) return <div className="text-center py-8">Loading repositories...</div>
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-blue-600">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {repo.name}
                </a>
              </h3>
            </div>

            <p className="text-slate-600 mb-4 min-h-[3rem]">
              {repo.description || 'No description available'}
            </p>

            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.slice(0, 5).map((topic) => (
                  <span
                    key={topic}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-slate-600">
                {repo.language && (
                  <span className="font-medium">{repo.language}</span>
                )}
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCodeBranch />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
              
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-green-600 text-white text-sm px-3 py-1.5 rounded hover:bg-green-700 transition"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt size={12} />
                  <span>Live</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
