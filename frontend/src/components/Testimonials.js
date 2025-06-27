import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Solutions',
      company: 'TechStart Solutions',
      image: 'https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg',
      content: 'Servnai transformed our entire business operations. Our website traffic increased by 300% and our customer engagement is through the roof. The AI assistant handles 80% of our customer inquiries automatically.',
      rating: 5,
      metrics: { growth: '300%', satisfaction: '95%' }
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GrowthHub',
      company: 'GrowthHub',
      image: 'https://images.unsplash.com/photo-1599090738077-75d2187fd892?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNjYXJjaHwyfHxidXNpbmVzcyUyMHN1Y2Nlc3N8ZW58MHx8fGJsdWV8MTc1MDk4MjkzNXww&ixlib=rb-4.1.0&q=85',
      content: 'The social media automation alone saved us 20 hours per week. Our Instagram engagement tripled and we\'re getting quality leads daily. Best investment we\'ve ever made for our marketing.',
      rating: 5,
      metrics: { time_saved: '20hrs/week', engagement: '3x' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, BrightFuture',
      company: 'BrightFuture Agency',
      image: 'https://images.pexels.com/photos/7562452/pexels-photo-7562452.jpeg',
      content: 'As an agency, we needed scalable solutions for our clients. Servnai\'s white-label options allowed us to offer premium AI services while maintaining our brand. Our client retention rate is now 98%.',
      rating: 5,
      metrics: { retention: '98%', revenue: '+250%' }
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-green-300 text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by
            <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              500+ Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how businesses like yours are achieving remarkable growth with our AI-powered solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.content}"
              </blockquote>

              {/* Metrics */}
              <div className="flex space-x-4 mb-6">
                {Object.entries(testimonial.metrics).map(([key, value], metricIndex) => (
                  <div key={metricIndex} className="bg-green-500/10 rounded-xl px-4 py-2 border border-green-500/20">
                    <div className="text-green-400 font-bold text-lg">{value}</div>
                    <div className="text-gray-400 text-sm capitalize">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-green-400 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              { name: 'StartupHub', logo: 'SH' },
              { name: 'TechGrow', logo: 'TG' },
              { name: 'InnovateCorp', logo: 'IC' },
              { name: 'DigitalFirst', logo: 'DF' }
            ].map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">
                  {company.logo}
                </div>
                <div className="text-gray-400 text-sm">{company.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Businesses Served' },
              { value: '99.9%', label: 'Uptime Guarantee' },
              { value: '24/7', label: 'AI Support' },
              { value: '3.2x', label: 'Average ROI' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;