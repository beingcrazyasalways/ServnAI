import React, { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses just getting started',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Professional Website',
        'Basic AI Chatbot',
        'Social Media Setup',
        'Email Support',
        '5 Hours/Month Maintenance',
        'Basic Analytics'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Growth',
      description: 'Ideal for growing businesses ready to scale',
      monthlyPrice: 299,
      annualPrice: 239,
      features: [
        'Everything in Starter',
        'Advanced AI Assistant',
        'Full Social Media Management',
        'SEO Optimization',
        'Lead Generation System',
        '20 Hours/Month Maintenance',
        'Advanced Analytics',
        'Priority Support'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for established businesses',
      monthlyPrice: 599,
      annualPrice: 479,
      features: [
        'Everything in Growth',
        'Custom AI Solutions',
        'Multi-Platform Integration',
        'Advanced Automation',
        'Dedicated Account Manager',
        'Unlimited Maintenance',
        'Custom Reporting',
        '24/7 Phone Support',
        'White-Label Options'
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success Plan
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No hidden fees. No setup costs. Cancel anytime. 
            Start your 14-day free trial and see the results for yourself.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center mt-8">
            <span className={`text-sm font-medium mr-3 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                isAnnual ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ml-3 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                  : 'border-slate-700/50 hover:border-purple-500/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg`}>
                  {plan.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                {/* Price */}
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                {isAnnual && (
                  <div className="text-sm text-gray-400 mt-1">
                    Billed annually (${plan.annualPrice * 12})
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${plan.color} rounded-full mr-3 flex-shrink-0`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full bg-gradient-to-r ${plan.color} text-white px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 ${
                plan.popular ? 'shadow-lg shadow-purple-500/25' : ''
              }`}>
                Start Free Trial
              </button>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We understand that every business is unique. Let's discuss a custom plan 
              that fits your specific requirements and budget.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-3">
            <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-green-300 font-medium">30-Day Money Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;