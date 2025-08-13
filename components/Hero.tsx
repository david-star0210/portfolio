'use client'

import { Download, ExternalLink, ArrowDown } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, textReveal } from '../utils/animations'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/David-Crystal-Resume.pdf`
    link.download = 'David-Crystal-Resume.pdf'
    link.click()
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-50/20 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            className="space-y-10 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.div
              className="space-y-2"
              variants={fadeInUp}
            >
              <motion.p
                className="text-lg text-gray-600 font-medium tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                variants={textReveal}
              >
                <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  David Crystal
                </span>
              </motion.h1>
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Senior Full-Stack Engineer
              </motion.h2>
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              I craft exceptional digital experiences through innovative web technologies,
              scalable architectures, and pixel-perfect design implementations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ExternalLink size={20} />
                  </motion.div>
                  View My Work
                </div>
              </motion.button>

              <motion.button
                onClick={handleDownloadResume}
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-2xl border-2 border-gray-200 hover:border-blue-300 shadow-lg transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.95)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center gap-3">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Download size={20} />
                  </motion.div>
                  Download Resume
                </div>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-center lg:text-left">
                <motion.div
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  5+
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <motion.div
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  50+
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <motion.div
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  1M+
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Users Impacted</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Profile Section */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            variants={fadeInRight}
          >
            <div className="relative">
              {/* Background decorative elements */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-3xl blur-3xl scale-110"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1.1, 1.15, 1.1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main image container */}
              <motion.div
                className="relative z-10 p-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.img
                  src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/profile-avatar.png`}
                  alt="David Crystal"
                  className="w-80 h-auto object-cover rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />

                {/* Floating tech icons */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⚛️
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  🚀
                </motion.div>

                <motion.div
                  className="absolute top-1/4 -left-8 w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
                  animate={{
                    x: [0, -15, 0],
                    y: [0, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  💻
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full mt-2 group-hover:bg-gray-600 transition-colors"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
