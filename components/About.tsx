'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TextReveal from './TextReveal'
import { fadeInUp, staggerContainer } from '../utils/animations'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50/30 via-white to-blue-50/10">
      <div className="container-max">
        <div className="max-w-6xl mx-auto" ref={ref}>
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
              My work slogan is "See carefully what Clients want, then Build exactly what Clients like"
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
                With over <strong>7 years of experience</strong> in full-stack development, I specialize in
                building client's ideas into real world applications. Client satisfaction is my top priority
                and I always strive to understand their requirements and business objectives.
              </motion.p>
              <motion.p
                className="text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                My passion for coding and problem-solving has driven me to deliver exceptional results
                for clients across various industries. With a strong command over both front-end and
                back-end development, I possess a deep understanding of the entire software development lifecycle.
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
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Expertise</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Full-Stack Web Development</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Cloud Architecture & DevOps</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Performance Optimization</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Team Leadership & Mentoring</span>
                  </motion.div>
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
