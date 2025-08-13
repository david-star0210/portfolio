'use client'

import { motion } from 'framer-motion'

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container-max">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl border border-white/20"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-lg font-semibold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {category.category}
              </motion.h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 text-sm font-medium rounded-full hover:from-primary-200 hover:to-purple-200 cursor-default"
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills