import GitHubProfile from '@/components/GitHubProfile'
import GitHubRepos from '@/components/GitHubRepos'

export default function Home() {
  // 여기에 본인의 GitHub username을 입력하세요
  const githubUsername = 'vmaca123'

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Full Stack Developer | Web Development Enthusiast
          </p>
        </section>

        {/* GitHub Profile Section */}
        <GitHubProfile username={githubUsername} />

        {/* Projects Section */}
        <section className="mb-12">
          <GitHubRepos username={githubUsername} />
        </section>

        {/* Deployed Services Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Deployed Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">MongoDB CRUD App</h3>
              <p className="text-slate-600 mb-4">
                A full-stack CRUD application built with Next.js and MongoDB
              </p>
              <a
                href="/topics"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Demo
              </a>
            </div>

            {/* 추가 서비스들을 여기에 추가하세요 */}
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Example Service</h3>
              <p className="text-slate-600 mb-4">
                Add your deployed services here
              </p>
              <a
                href="#"
                className="inline-block bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700 transition"
              >
                Coming Soon
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-slate-700 leading-relaxed">
            안녕하세요! 저는 웹 개발에 열정을 가진 개발자입니다. 
            이 포트폴리오에는 제가 강의 시간에 개발한 프로젝트들과 
            개인적으로 진행한 프로젝트들이 포함되어 있습니다.
          </p>
        </section>
      </div>
    </div>
  )
}