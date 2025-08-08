const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'SQL', 'PHP', 'HTML5', 'CSS3']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'Webpack']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'REST', 'GraphQL', 'WebSockets', 'Microservices']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
      category: 'DevOps & Cloud',
      skills: ['AWS (Lambda, EC2, S3, CloudWatch)', 'Docker', 'CI/CD (GitHub Actions, Jenkins)', 'NGINX']
    },
    {
      category: 'Testing',
      skills: ['Jest', 'Mocha', 'Chai', 'Cypress', 'Postman']
    },
    {
      category: 'Monitoring',
      skills: ['Datadog', 'CloudWatch', 'Sentry']
    },
    {
      category: 'Tools & Workflow',
      skills: ['Git', 'GitHub', 'Jira', 'Slack', 'Agile/Scrum']
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills