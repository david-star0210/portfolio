'use client'

import { Briefcase, Cloud, Code, Calendar, MapPin, ChevronRight, Building } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations'
import TextReveal from './TextReveal'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null)
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
    <section
      ref={ref}
      id="experience"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-50/30 via-white to-blue-50/10"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-blue-400/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-400/15 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
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
            Professional Experience
          </TextReveal>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A journey of building scalable solutions, leading teams, and delivering
            exceptional results across diverse technology stacks and industries.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <motion.div
                key={index}
                className="relative"
                variants={scaleIn}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setHoveredExperience(index)}
                onHoverEnd={() => setHoveredExperience(null)}
              >
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Animated background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500"
                    animate={{ opacity: hoveredExperience === index ? 1 : 0 }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Company Icon */}
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center shadow-lg">
                          <IconComponent className="w-8 h-8 text-gray-700" />
                        </div>
                      </motion.div>

                      <div className="flex-1">
                        {/* Job Title and Company */}
                        <motion.div
                          className="mb-6"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-gray-600">
                            <div className="flex items-center gap-2">
                              <Building className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                          className="space-y-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors group"
                              whileHover={{ x: 5 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.7 + index * 0.1 + achievementIndex * 0.05 }}
                            >
                              <motion.div
                                className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"
                                animate={{
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: achievementIndex * 0.2
                                }}
                              />
                              <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                                {achievement}
                              </span>
                              <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto flex-shrink-0" />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <motion.div
                    className="absolute left-8 -bottom-6 w-0.5 h-12 bg-gradient-to-b from-blue-300 to-purple-300 rounded-full"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  />
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience