'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
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
    <section
      ref={ref}
      id="skills"
      className="section-padding relative overflow-hidden"
    >
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-50/20 to-transparent" />

      <div className="container-max relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Mastering cutting-edge technologies to build exceptional digital experiences
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={scaleIn}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative z-10">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    {category.category}
                  </motion.h3>

                  <motion.div
                    className="space-y-3"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="group/skill relative"
                        variants={fadeInUp}
                        transition={{ delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                      >
                        <motion.div
                          className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl hover:bg-white/80 transition-all duration-300 cursor-default"
                          whileHover={{
                            scale: 1.02,
                            x: 5,
                            backgroundColor: "rgba(255, 255, 255, 0.9)"
                          }}
                        >
                          <span className="text-sm font-medium text-gray-700 group-hover/skill:text-gray-900">
                            {skill}
                          </span>
                          <motion.div
                            className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover/skill:opacity-100"
                            animate={{
                              scale: [1, 1.5, 1],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: skillIndex * 0.1
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills