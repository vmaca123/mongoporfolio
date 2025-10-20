import TopicsList from '@/components/TopicsList'
import Link from 'next/link'

export default function TopicsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">WebDev Topics</h1>
          <p className="text-slate-600">MongoDB CRUD Example</p>
        </div>
        <Link
          href="/addTopic"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Add Topic
        </Link>
      </div>
      <TopicsList />
    </div>
  )
}
