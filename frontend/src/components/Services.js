import React from 'react';

const Services = () => {
  const services = [
    {
      category: 'AI-Powered Solutions',
      items: [
        'Custom Website Development',
        'AI Chatbot Integration',
        'Automated Customer Support',
        'Lead Generation Systems'
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      category: 'Digital Marketing',
      items: [
        'Social Media Management',
        'Content Creation & Automation',
        'SEO Optimization',
        'Google Ads Management'
      ],
      color: 'from-purple-500 to-pink-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6" />
        </svg>
      )
    },
    {
      category: 'Business Automation',
      items: [
        'Workflow Automation',
        'CRM Integration',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      color: 'from-green-500 to-emerald-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Comprehensive Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services Tailored for
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Success
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose from our comprehensive suite of AI-powered services designed to transform 
            and scale your business operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors duration-300">
                {service.category}
              </h3>

              <ul className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                    {item}
                  </li>
                ))}
              </ul>

              <button className={`w-full mt-8 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
                Learn More
              </button>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Simple 3-Step Process
            </h3>
            <p className="text-gray-400">
              Get started with your business transformation in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Tell us about your business goals and current challenges',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '02',
                title: 'Customization',
                description: 'Our AI creates tailored solutions for your specific needs',
                color: 'from-purple-500 to-pink-500'
              },
              {
                step: '03',
                title: 'Launch',
                description: 'Go live with your new AI-powered business systems',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className={`w-20 h-20 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 shadow-lg`}>
                  {process.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{process.title}</h4>
                <p className="text-gray-400">{process.description}</p>
                
                {/* Connection Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-600 to-slate-700 transform translate-x-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;