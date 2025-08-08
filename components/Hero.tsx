'use client'

import { Download, ExternalLink } from 'lucide-react'

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/David-Crystal-Resume.pdf' // Make sure your resume is in /public
    link.download = 'David-Crystal-Resume.pdf'
    link.click()
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Senior Full-Stack Engineer
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              I design and build scalable, high-performance applications with modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <ExternalLink size={20} />
                View Projects
              </button>
              <button
                onClick={handleDownloadResume}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-medium">Location:</span>
                <span>Los Angeles, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Phone:</span>
                <a href="tel:+16063089728" className="hover:text-primary-600 transition-colors">
                  (+1) 606-308-9728
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:david05220210@gmail.com" className="hover:text-primary-600 transition-colors">
                  david05220210@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image (Rectangle) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/profile-avatar.png" // ✅ Your photo file in /public
                alt="David Crystal"
                className="w-80 h-auto object-cover shadow-lg border-4 border-white rounded-xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-600 rounded-full opacity-30"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
