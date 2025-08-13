'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations'
import TextReveal from './TextReveal'
import AnimatedProgressBar from './AnimatedProgressBar'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const allSkills = [
    // Frontend Technologies
    { name: 'React', category: 'Frontend', level: 95, color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
    { name: 'Next.js', category: 'Frontend', level: 92, color: 'from-gray-700 to-gray-900', icon: '▲' },
    { name: 'TypeScript', category: 'Language', level: 90, color: 'from-blue-600 to-blue-800', icon: '📘' },
    { name: 'JavaScript', category: 'Language', level: 95, color: 'from-yellow-400 to-yellow-600', icon: '🟨' },
    { name: 'Vue.js', category: 'Frontend', level: 85, color: 'from-green-400 to-green-600', icon: '💚' },
    { name: 'Tailwind CSS', category: 'Styling', level: 93, color: 'from-teal-400 to-blue-500', icon: '🎨' },
    { name: 'HTML5', category: 'Language', level: 98, color: 'from-orange-500 to-red-500', icon: '🌐' },
    { name: 'CSS3', category: 'Styling', level: 95, color: 'from-blue-400 to-purple-500', icon: '🎨' },
    
    // Backend Technologies
    { name: 'Node.js', category: 'Backend', level: 88, color: 'from-green-500 to-green-700', icon: '🟢' },
    { name: 'Express', category: 'Backend', level: 87, color: 'from-gray-600 to-gray-800', icon: '🚀' },
    { name: 'Python', category: 'Language', level: 82, color: 'from-blue-400 to-yellow-500', icon: '🐍' },
    { name: 'PHP', category: 'Language', level: 80, color: 'from-purple-600 to-indigo-700', icon: '🐘' },
    { name: 'GraphQL', category: 'API', level: 83, color: 'from-pink-500 to-purple-600', icon: '🔗' },
    { name: 'REST API', category: 'API', level: 90, color: 'from-green-500 to-blue-500', icon: '🌐' },
    
    // Databases
    { name: 'PostgreSQL', category: 'Database', level: 85, color: 'from-blue-700 to-indigo-800', icon: '🐘' },
    { name: 'MongoDB', category: 'Database', level: 80, color: 'from-green-600 to-green-800', icon: '🍃' },
    { name: 'MySQL', category: 'Database', level: 83, color: 'from-blue-500 to-blue-700', icon: '🗄️' },
    { name: 'Redis', category: 'Database', level: 78, color: 'from-red-600 to-red-800', icon: '⚡' },
    
    // Cloud & DevOps
    { name: 'AWS', category: 'Cloud', level: 88, color: 'from-orange-400 to-orange-600', icon: '☁️' },
    { name: 'Docker', category: 'DevOps', level: 85, color: 'from-blue-500 to-blue-700', icon: '🐳' },
    { name: 'Kubernetes', category: 'DevOps', level: 75, color: 'from-blue-600 to-purple-600', icon: '⚙️' },
    { name: 'CI/CD', category: 'DevOps', level: 82, color: 'from-green-500 to-teal-600', icon: '🔄' },
    
    // Tools & Testing
    { name: 'Git', category: 'Tools', level: 92, color: 'from-red-500 to-red-700', icon: '📝' },
    { name: 'Jest', category: 'Testing', level: 87, color: 'from-red-400 to-orange-500', icon: '🧪' },
    { name: 'Cypress', category: 'Testing', level: 82, color: 'from-green-500 to-teal-600', icon: '🌲' },
    { name: 'Figma', category: 'Design', level: 85, color: 'from-purple-500 to-pink-500', icon: '🎨' },
  ]

  return (
    <section 
      ref={ref}
      id="skills" 
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* Clean background with subtle elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white to-blue-50/10" />
        
        {/* Minimal floating elements */}
        <motion.div 
          className="absolute top-32 left-16 w-2 h-2 bg-blue-400/10 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-1.5 h-1.5 bg-purple-400/15 rounded-full"
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
            Technical Skills
          </TextReveal>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A comprehensive toolkit of modern technologies and frameworks 
            for building exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Beautiful Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={scaleIn}
              transition={{ delay: index * 0.05 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-500 cursor-default text-center relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Animated background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition-opacity duration-500`}
                  animate={{ opacity: hoveredSkill === index ? 0.05 : 0 }}
                />
                
                <div className="relative z-10">
                  {/* Skill Icon */}
                  <motion.div
                    className="text-3xl mb-4"
                    animate={hoveredSkill === index ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  {/* Skill Name */}
                  <motion.h4 
                    className="font-semibold text-gray-900 mb-2 text-sm"
                    animate={hoveredSkill === index ? {
                      scale: 1.05
                    } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.name}
                  </motion.h4>
                  
                  {/* Category */}
                  <motion.p 
                    className="text-xs text-gray-500 mb-4"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: hoveredSkill === index ? 1 : 0.7 }}
                  >
                    {skill.category}
                  </motion.p>
                  
                  {/* Animated Progress Bar */}
                  <div className="mb-2">
                    <AnimatedProgressBar
                      percentage={skill.level}
                      color={skill.color}
                      delay={index * 0.05}
                      duration={1.5}
                      showPercentage={false}
                    />
                  </div>
                  
                  {/* Proficiency Level */}
                  <motion.p 
                    className="text-xs font-medium text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.8 }}
                  >
                    {skill.level}%
                  </motion.p>
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
