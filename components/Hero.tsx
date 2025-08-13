'use client'

import { Download, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50"></div>

      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight"
                variants={itemVariants}
              >
                Senior Full-Stack Engineer
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 max-w-2xl"
              variants={itemVariants}
            >
              I design and build scalable, high-performance applications with modern web technologies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ExternalLink size={20} />
                </motion.div>
                View Projects
              </motion.button>
              <motion.button
                onClick={handleDownloadResume}
                className="btn-secondary flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download size={20} />
                </motion.div>
                Download Resume
              </motion.button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="flex flex-wrap gap-6 text-sm text-gray-600"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-medium">Location:</span>
                <span>Los Angeles, CA</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-medium">Phone:</span>
                <a href="tel:+16063089728" className="hover:text-primary-600 transition-colors">
                  (+1) 606-308-9728
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-medium">Email:</span>
                <a href="mailto:david05220210@gmail.com" className="hover:text-primary-600 transition-colors">
                  david05220210@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/profile-avatar.png`}
                alt="David Crystal"
                className="w-80 h-auto object-cover shadow-2xl border-4 border-white rounded-xl"
                whileHover={{ rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
              {/* Animated decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
              {/* Additional floating elements */}
              <motion.div
                className="absolute top-1/4 -left-8 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-70"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
