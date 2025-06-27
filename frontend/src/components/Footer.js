import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="ml-3 text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Servnai
              </span>
            </div>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Empowering businesses with AI-powered solutions for complete digital transformation. 
              From websites to automation, we handle it all.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'Twitter', icon: '𝕏' },
                { name: 'LinkedIn', icon: 'in' },
                { name: 'Facebook', icon: 'f' },
                { name: 'Instagram', icon: '📷' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg flex items-center justify-center text-white hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                'AI Website Development',
                'Chatbot Integration',
                'Social Media Management',
                'SEO Optimization',
                'Business Automation',
                'Analytics & Reporting'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                'About Us',
                'Case Studies',
                'Careers',
                'Blog',
                'Contact',
                'Help Center'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h3 className="text-white text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest AI business insights and updates.</p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800 border border-slate-600 rounded-l-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-r-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Servnai. All rights reserved. Built with AI-powered excellence.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex justify-center space-x-8 opacity-60">
          {[
            { name: 'ISO 27001', icon: '🛡️' },
            { name: 'GDPR Compliant', icon: '🔒' },
            { name: 'SOC 2 Type II', icon: '✅' },
            { name: '99.9% Uptime', icon: '⚡' }
          ].map((badge, index) => (
            <div key={index} className="flex items-center text-gray-400 text-xs">
              <span className="mr-1">{badge.icon}</span>
              {badge.name}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;