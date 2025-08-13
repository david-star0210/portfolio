'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations'
import TextReveal from './TextReveal'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Los Angeles",
      location: "Los Angeles, CA",
      period: "2016 - 2020",
      gpa: "3.8/4.0",
      achievements: [
        "Magna Cum Laude Graduate",
        "Dean's List (6 semesters)",
        "Outstanding Student in Computer Science",
        "President of Programming Club"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Computer Networks",
        "Machine Learning",
        "Web Development"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      location: "Online Certification",
      period: "2021",
      gpa: "Professional Level",
      achievements: [
        "Cloud Architecture Design",
        "Scalable Systems Implementation",
        "Cost Optimization Strategies",
        "Security Best Practices"
      ],
      courses: [
        "EC2 & Auto Scaling",
        "RDS & DynamoDB",
        "Lambda & Serverless",
        "CloudFormation",
        "VPC & Networking",
        "IAM & Security"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      degree: "Full-Stack Web Development",
      institution: "freeCodeCamp",
      location: "Online Certification",
      period: "2020",
      gpa: "300+ Hours",
      achievements: [
        "Responsive Web Design",
        "JavaScript Algorithms",
        "Front End Development",
        "Back End Development"
      ],
      courses: [
        "HTML5 & CSS3",
        "JavaScript ES6+",
        "React & Redux",
        "Node.js & Express",
        "MongoDB",
        "API Development"
      ],
      color: "from-green-500 to-teal-500"
    }
  ]

  return (
    <section 
      ref={ref}
      id="education" 
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white to-blue-50/10" />
        
        {/* Floating academic elements */}
        <motion.div 
          className="absolute top-32 left-16 opacity-5"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <GraduationCap size={64} />
        </motion.div>
        <motion.div 
          className="absolute bottom-32 right-16 opacity-5"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          <Award size={48} />
        </motion.div>
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
            Education & Certifications
          </TextReveal>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Continuous learning and professional development through formal education 
            and industry certifications to stay at the forefront of technology.
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div 
          className="space-y-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={scaleIn}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredItem(index)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500`}
                  animate={{ opacity: hoveredItem === index ? 0.03 : 0 }}
                />
                
                <div className="relative z-10 grid lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <GraduationCap size={24} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.h3 
                          className="text-2xl font-bold text-gray-900 mb-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          {item.degree}
                        </motion.h3>
                        <motion.p 
                          className="text-lg font-semibold text-gray-700 mb-1"
                          whileHover={{ scale: 1.02 }}
                        >
                          {item.institution}
                        </motion.p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {item.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {item.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <Award size={14} />
                            {item.gpa}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <h4 className="font-semibold text-gray-900">Key Achievements</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            className="flex items-center gap-2 p-2 bg-gray-50/50 rounded-lg hover:bg-white/80 transition-colors"
                            whileHover={{ scale: 1.02, x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}
                              animate={{ 
                                scale: [1, 1.2, 1],
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: achIndex * 0.2
                              }}
                            />
                            <span className="text-sm text-gray-700">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Courses */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <h4 className="font-semibold text-gray-900">Key Subjects</h4>
                    <div className="space-y-2">
                      {item.courses.map((course, courseIndex) => (
                        <motion.div
                          key={courseIndex}
                          className="px-3 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 text-sm text-gray-700 hover:bg-white/80 transition-colors cursor-default"
                          whileHover={{ scale: 1.05, x: 5 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.8 + index * 0.1 + courseIndex * 0.05 }}
                        >
                          {course}
                        </motion.div>
                      ))}
                    </div>
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

export default Education
