// ================================================================
// ESA INFO HUB - Central page for all ESA information
// Links to calculator, eligibility, state programs, and guides
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, MapPin, BookOpen, Building, ArrowRight } from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';

export const ESAInfo: React.FC = () => {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Education Savings Accounts (ESA) Information
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about using state ESA funds and federal tax credits to make Pathfinity.ai essentially free for your family
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24</div>
              <div className="text-gray-600 dark:text-gray-300">States with ESA Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$7,500</div>
              <div className="text-gray-600 dark:text-gray-300">Average ESA Amount</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$3,400</div>
              <div className="text-gray-600 dark:text-gray-300">Federal Tax Credit (2027)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$10,900</div>
              <div className="text-gray-600 dark:text-gray-300">Average Family Profit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation Cards */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Calculator Card */}
            <Link to="/esa-calculator" className="group">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 h-full">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calculator className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Benefits Calculator
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Calculate your exact savings with state ESA funds and federal tax credits for your family
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  <span>Calculate Now</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            {/* Eligibility Card */}
            <div className="group cursor-not-allowed opacity-75">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg h-full">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Check Eligibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Find out if your family qualifies for ESA programs and federal tax credits
                </p>
                <div className="flex items-center text-gray-400 font-semibold">
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>

            {/* State Programs Card */}
            <div className="group cursor-not-allowed opacity-75">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg h-full">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  State Programs
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Detailed information about ESA programs in all 50 states
                </p>
                <div className="flex items-center text-gray-400 font-semibold">
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Application Guide Card */}
            <div className="group cursor-not-allowed opacity-75">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg h-full">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Application Guide
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Step-by-step guide to applying for ESA funds in your state
                </p>
                <div className="flex items-center text-gray-400 font-semibold">
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Federal ECCA Card */}
            <div className="group cursor-not-allowed opacity-75">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg h-full">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Federal ECCA Tax Credit
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Learn about the new federal tax credit starting in 2027
                </p>
                <div className="flex items-center text-gray-400 font-semibold">
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Get Started Card */}
            <Link to="/waitlist" className="group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 h-full text-white">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Get Started Today
                </h3>
                <p className="mb-4 opacity-90">
                  Join the waitlist to lock in your savings and be first to access when ESA funds become available
                </p>
                <div className="flex items-center font-semibold">
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                What are Education Savings Accounts (ESAs)?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                ESAs are government-funded accounts that parents can use for educational expenses, including private school tuition, tutoring, and educational technology platforms like Pathfinity.ai.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                How much can I receive from ESA programs?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                State ESA amounts range from $4,000 to $8,400 per child annually. Combined with the federal ECCA tax credit of $1,700-$3,400, most families receive $10,000-$12,000 per child in total benefits.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                When does the federal ECCA tax credit start?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The federal Educational Choice for Children Act (ECCA) tax credit begins January 1, 2027, providing up to $1,700 per taxpayer ($3,400 for married couples) as a dollar-for-dollar tax credit.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Can I use both state ESA and federal tax credits?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! Families can "stack" both benefits. Use your state ESA to pay for Pathfinity.ai, then claim the federal tax credit for additional savings. Most families actually profit $10,000+ per year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Save $49,100 Per Year on Education?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of families using ESA funds and tax credits to get premium education for free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/esa-calculator"
              className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Calculate Your Savings
            </Link>
            <Link
              to="/waitlist"
              className="px-8 py-4 bg-green-700 text-white rounded-xl font-semibold text-lg hover:bg-green-800 transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default ESAInfo;