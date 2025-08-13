'use client'

import { motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations'
import TextReveal from './TextReveal'
import MagneticButton from './MagneticButton'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<number>(0)

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
      className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/20"
    >
      {/* Ultra-sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/10" />

        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-blue-400/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-32 w-1 h-1 bg-purple-400/30 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-green-400/25 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.25, 0.6, 0.25]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <TextReveal
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            delay={0.2}
          >
            Technical Expertise
          </TextReveal>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Mastering cutting-edge technologies and frameworks to build exceptional,
            scalable digital experiences that drive business success.
          </motion.p>
        </motion.div>

        {/* Interactive Skills Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {skillCategories.map((category, index) => (
            <MagneticButton
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedCategory === index
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200/50 hover:bg-white hover:shadow-md'
              }`}
            >
              {category.category}
            </MagneticButton>
          ))}
        </motion.div>

        {/* Animated Skills Display */}
        <motion.div
          className="max-w-4xl mx-auto"
          key={selectedCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {skillCategories[selectedCategory].category}
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {skillCategories[selectedCategory].skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="group relative"
                  variants={scaleIn}
                  transition={{ delay: skillIndex * 0.05 }}
                >
                  <motion.div
                    className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default text-center"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    onHoverStart={() => setHoveredCategory(skillIndex)}
                    onHoverEnd={() => setHoveredCategory(null)}
                  >
                    {/* Skill Icon/Indicator */}
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center"
                      animate={hoveredCategory === skillIndex ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                        animate={hoveredCategory === skillIndex ? {
                          scale: [1, 1.2, 1],
                        } : {}}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Skill Name */}
                    <motion.h4
                      className="font-semibold text-gray-900 mb-2"
                      animate={hoveredCategory === skillIndex ? {
                        scale: 1.05
                      } : {}}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.h4>

                    {/* Animated Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${85 + Math.random() * 15}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>

                    {/* Proficiency Level */}
                    <motion.p
                      className="text-xs text-gray-600 font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: skillIndex * 0.1 + 0.5 }}
                    >
                      Expert
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills