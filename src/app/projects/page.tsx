import GitHubRepos from '@/components/GitHubRepos'

export default function ProjectsPage() {
  // 여기에 본인의 GitHub username을 입력하세요
  const githubUsername = 'vmaca123'

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <GitHubRepos username={githubUsername} />
      </div>
    </div>
  )
}
