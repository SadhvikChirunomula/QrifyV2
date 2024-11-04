import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9',
      features: [
        'Generate up to 50 QR codes/month',
        'Basic customization options',
        'Standard support',
        'Export as PNG',
        'Basic analytics'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$29',
      features: [
        'Generate unlimited QR codes',
        'Advanced customization options',
        'Priority support',
        'Export in all formats',
        'Advanced analytics',
        'Custom branding',
        'Bulk generation'
      ],
      cta: 'Get Pro',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom integration',
        'SLA guarantee',
        'Enterprise security',
        'API access',
        'Custom solutions'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg overflow-hidden ${
                plan.highlighted
                  ? 'transform scale-105 bg-white ring-2 ring-blue-500'
                  : 'bg-white'
              }`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="ml-1 text-xl text-gray-500">/month</span>}
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pt-6 pb-8">
                <Link
                  to={plan.highlighted ? '/register' : '/contact'}
                  className={`block w-full text-center rounded-md py-3 px-6 font-medium ${
                    plan.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;