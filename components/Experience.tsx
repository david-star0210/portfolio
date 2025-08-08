import { Briefcase, Cloud, Code } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Engineer',
      company: 'Chili Piper',
      location: 'Remote',
      period: 'Jan 2022 – Present',
      icon: Cloud,
      achievements: [
        'Led development of core scheduling and routing features used by 1,000+ B2B teams worldwide.',
        'Built high-performance frontends with Next.js, React, and TypeScript, cutting page load times by 30% and improving UX.',
        'Modernized legacy services into AWS-based microservices using Lambda and Docker, reducing deployment time by 40%.',
        'Set up CI/CD pipelines with GitHub Actions and Jenkins, enabling faster and safer releases.',
        'Implemented observability tooling using Datadog and CloudWatch, reducing incident response time by 35%.',
        'Mentored engineers across time zones, led async design reviews, and influenced engineering standards.'
      ]
    },
    {
      title: 'Full-Stack Engineer',
      company: 'Close',
      location: 'Remote',
      period: 'Feb 2020 – Dec 2021',
      icon: Briefcase,
      achievements: [
        'Led development of high-impact features on Close’s CRM used by teams in 100+ countries.',
        'Redesigned the lead import pipeline using Node.js, PostgreSQL, and Redis, doubling throughput.',
        'Rebuilt the analytics dashboard in React, speeding up load times by 40% and increasing usage by 22%.',
        'Implemented OAuth, RBAC, and encrypted session storage to harden security and pass audits.',
        'Automated test coverage and release workflows to reduce bugs and shorten QA cycles.'
      ]
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'Automattic',
      location: 'Remote',
      period: 'Jun 2017 – Jan 2020',
      icon: Code,
      achievements: [
        'Built and maintained production features across WordPress.com and WooCommerce, improving UX for millions of users.',
        'Developed frontend components and backend logic using JavaScript, PHP, and MySQL, focusing on accessibility and performance.',
        'Improved checkout and billing flows, increasing conversion by 12% and lowering support volume.',
        'Completed Automattic’s onboarding program in async collaboration and global-scale development.',
        'Collaborated daily with global teams via Git, Slack, and internal P2s to maintain high code quality.'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
                        {exp.title}
                      </h3>
                      <div className="text-sm text-gray-500">
                        {exp.company} • {exp.location} • {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-12 bg-gray-200"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience