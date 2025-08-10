'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'david05220210@gmail.com',
      href: 'mailto:david05220210@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+1) 606-308-9728',
      href: 'tel:+16063089728'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Los Angeles, CA',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/david-crystal',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/david-star0210',
      color: 'hover:text-gray-900'
    }
  ]

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/David-Crystal-Resume.pdf`;
    link.download = 'David-Crystal-Resume.pdf';
    link.click();
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together to build something amazing.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {contact.label}
                  </h3>
                  <a
                    href={contact.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {contact.value}
                  </a>
                </div>
              )
            })}
          </div>

          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-gray-600 transition-colors ${social.color}`}
                >
                  <IconComponent size={20} />
                  <span className="font-medium">{social.label}</span>
                </a>
              )
            })}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleDownloadResume}
              className="btn-primary flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Education
            </h3>
            <div className="text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Bachelor of Science in Computer Science
              </h4>
              <p className="text-gray-600 mb-4">
                University of Northern Colorado – Greeley, CO
              </p>
              <p className="text-gray-600 mb-4">
                Graduation: May 10, 2017
              </p>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h5>
                <ul className="space-y-1 text-gray-600">
                  <li>• Web Development</li>
                  <li>• Data Structures and Algorithms</li>
                  <li>• Cloud Computing</li>
                  <li>• Database Management Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact