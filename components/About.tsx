'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TextReveal from './TextReveal'
import { fadeInUp, staggerContainer } from '../utils/animations'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-5xl mx-auto" ref={ref}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <TextReveal 
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
              delay={0.2}
            >
              About Me
            </TextReveal>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Passionate about creating exceptional digital experiences through clean code, 
              innovative solutions, and collaborative teamwork.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="space-y-6"
              variants={fadeInUp}
            >
              <motion.p 
                className="text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                With over <strong>5 years of experience</strong> in full-stack development, I specialize in 
                building scalable web applications using modern technologies like React, Next.js, Node.js, and AWS.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                I'm passionate about clean architecture, performance optimization, and creating 
                intuitive user experiences. My approach combines technical expertise with a strong 
                product mindset to deliver solutions that truly make a difference.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring fellow developers in the community.
              </motion.p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={fadeInUp}
            >
              <motion.div
                className="card-clean p-8"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Expertise</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Full-Stack Web Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Cloud Architecture & DevOps</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Performance Optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Team Leadership & Mentoring</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
