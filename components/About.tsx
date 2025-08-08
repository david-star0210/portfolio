const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            About
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              Senior Full-Stack Engineer with 8 years of experience in TypeScript, React, and AWS. I specialize in building scalable SaaS platforms and high-performance web applications that serve thousands of users.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I bring a strong product mindset, advocate for clean architecture, and lead cross-functional teams with a focus on collaboration, ownership, and continuous improvement.
            </p>
            <p className="text-lg leading-relaxed">
              I’ve helped companies like Chili Piper, Close, and Automattic ship impactful products, modernize tech stacks, and improve performance, reliability, and developer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">8+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">1000s</div>
              <div className="text-gray-600 font-medium">Users Served</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">35%</div>
              <div className="text-gray-600 font-medium">Faster Incident Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About