import { FaEnvelope, FaGithub, FaLinkedin, FaGraduationCap, FaCalendar, FaBook } from 'react-icons/fa'

export default function AboutPage() {
  // 본인의 정보로 수정하세요
  const personalInfo = {
    name: '김민우',
    studentId: '92212752',
    university: '중부대학교',
    major: '정보보호학과',
    minor: '없음', // 부전공이 있다면
    year: '2학년',
    email: 'minwoo123451@naver.com',
    github: 'vmaca123',
    // profileImage: '/profile.jpg', // public 폴더에 이미지 추가 후 사용
  }

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Docker', 'Figma'] },
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java'] },
  ]

  const education = [
    {
      period: '2022.03 - 현재',
      school: personalInfo.university,
      major: personalInfo.major,
      status: personalInfo.year,
    },
  ]

  const activities: Array<{period: string, title: string, description: string}> = [
    // 활동 내역을 여기에 추가하세요
  ]

  const certifications: string[] = [
    // 자격증을 여기에 추가하세요
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>

        {/* Profile Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                {personalInfo.name.charAt(0)}
              </div>
              {/* 실제 이미지를 사용하려면 위 div를 아래 img 태그로 교체하세요
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-48 h-48 rounded-full object-cover shadow-xl"
              />
              */}
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">{personalInfo.name}</h2>
              <p className="text-xl text-slate-600 mb-4">{personalInfo.major}</p>
              
              <div className="space-y-2 mb-6 text-slate-700">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaGraduationCap className="text-blue-600" />
                  <span>{personalInfo.university}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaBook className="text-blue-600" />
                  <span>{personalInfo.major} {personalInfo.minor && `/ ${personalInfo.minor}`}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaCalendar className="text-blue-600" />
                  <span>학번: {personalInfo.studentId} ({personalInfo.year})</span>
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition"
                >
                  <FaEnvelope />
                  Email
                </a>
                <a
                  href={`https://github.com/${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-blue-600">👋</span> 소개
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            안녕하세요! {personalInfo.university} {personalInfo.major}에 재학 중인 {personalInfo.name}입니다.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            디지털 포렌식에 관심이 있으며
          </p>
          <p className="text-slate-700 leading-relaxed">
            끊임없이 배우고 성장하는 개발자가 되기 위해 노력하고 있으며, 
            팀 프로젝트를 통해 협업 능력을 키워가고 있습니다.
          </p>
        </section>

        {/* Education */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaGraduationCap className="text-blue-600" />
            학력
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4 mb-4">
              <p className="text-sm text-slate-500 mb-1">{edu.period}</p>
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="text-slate-600">{edu.major} ({edu.status})</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">기술 스택</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        {activities.length > 0 && (
          <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">활동</h2>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <p className="text-sm text-slate-500 mb-1">{activity.period}</p>
                  <h3 className="text-lg font-semibold mb-1">{activity.title}</h3>
                  <p className="text-slate-600">{activity.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">자격증</h2>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700">
                  <span className="text-blue-600">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  )
}
