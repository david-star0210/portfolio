'use client'

const Projects = () => {
  const projects = [
    {
      title: 'Chili Piper Scheduling Platform',
      url: 'https://www.chilipiper.com/',
      description:
        'Modernized core scheduling and routing features used by 1,000+ B2B teams. Improved frontend UX and backend scalability using React, Next.js, AWS Lambda, and Docker.',
      technologies: ['Next.js', 'React', 'TypeScript', 'AWS Lambda', 'Docker', 'Jenkins'],
      features: [
        'Reduced page load time by 30% via frontend optimization',
        'Cut deployment time by 40% through AWS microservices refactor',
        'CI/CD automation with GitHub Actions & Jenkins',
        'Improved incident response time by 35% with Datadog + CloudWatch',
        'Led async design reviews across remote teams'
      ],
      image: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/chilipiper-demo.png`
    },
    {
      title: 'Close CRM Feature Enhancements',
      url: 'https://www.close.com/',
      description:
        'Enhanced lead import, analytics, and security in Close CRM used by global sales teams in 100+ countries. Delivered production-grade performance and reliability improvements.',
      technologies: ['Node.js', 'React', 'Redis', 'PostgreSQL', 'GraphQL', 'OAuth'],
      features: [
        'Doubled throughput of lead import pipeline',
        'Rebuilt dashboard for 40% faster load speed and 22% higher usage',
        'Implemented OAuth and RBAC with encrypted session storage',
        'Automated tests and releases to improve QA and reduce bugs'
      ],
      image: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/close-crm-demo.png`
    },
    {
      title: 'WordPress + WooCommerce Features',
      url: 'https://woocommerce.com/woocommerce-features/',
      description:
        'Built and maintained scalable frontend/backend features across WordPress.com and WooCommerce, impacting millions of users worldwide.',
      technologies: ['JavaScript', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'WordPress'],
      features: [
        'Improved checkout and billing flows, increasing conversion by 12%',
        'Enhanced accessibility and performance across all devices',
        'Collaborated asynchronously with global teams via Git and P2s',
        'Reduced support volume with better UX flows'
      ],
      image: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/woocommerce-demo.png`
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Image */}
              <div className="order-2 lg:order-1">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="rounded-xl shadow-md object-contain w-full h-auto bg-white"
                />
              </div>

              {/* Project Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-primary-600">
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects