// ================================================================
// HOMEPAGE - Marketing Landing Page
// Main entry point for pathfinity.ai with hero, features, and conversion
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Play, Users, BookOpen, Target, Brain, Sparkles, TrendingUp, Shield } from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';
import { PathfinityHeroTypewriter } from '../../components/animations/TypewriterAnimation';

export const Homepage: React.FC = () => {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20 sm:py-32">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-indigo-100/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* ESA + ECCA Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg mb-8 animate-pulse">
              <span className="text-2xl">✅</span>
              <div className="text-left">
                <div className="font-bold text-lg">ESA-Eligible + Federal Tax Credit Qualified</div>
                <div className="text-sm opacity-90">Stack Your Benefits: State ESA + ECCA = FREE Education</div>
              </div>
            </div>
            
            {/* Main Headline with Typewriter Animation */}
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <PathfinityHeroTypewriter 
                className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white"
                typingSpeed={120}
                deletingSpeed={60}
                pauseDuration={2000}
              />
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              The first AI-powered learning platform that shows kids exactly why their education matters by connecting every lesson to real careers and engaging stories.
            </p>
            
            {/* PathIQ Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 px-4 py-2 rounded-full mb-6">
              <Brain className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Powered by PathIQ™ Intelligence System</span>
              <Sparkles className="w-5 h-5 text-indigo-600" />
            </div>
            
            {/* Secondary Description */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Finally, education that works like kids' favorite games—engaging, progressive, and never blocking them from continuing their adventure.
            </p>

            {/* Key Value Props */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
              <div className="flex items-center space-x-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">No More Getting "Stuck" - Every child progresses</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Three Chances to Master Every Skill</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Discover How You Learn Best</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/waitlist"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Join the Waitlist - Transform Learning Into Adventure</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/demo"
                className="w-full sm:w-auto px-8 py-4 bg-white text-purple-600 border-2 border-purple-300 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>See Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ESA + Federal Tax Credit Value Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              💰 Double Your Education Benefits
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Starting January 2027, combine State ESA funds with Federal ECCA tax credits to make private school education essentially FREE
            </p>
            <p className="text-lg text-green-600 dark:text-green-400 font-semibold mt-4">
              Example for typical family with 3 children:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Traditional Private School */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-600 mb-6">❌ Traditional Private School</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Annual Tuition (3 kids):</span>
                  <span className="font-bold text-xl text-red-600">$75,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">State ESA Covers:</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">~3 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Federal Credit Covers:</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">&lt; 1 week</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-700 dark:text-gray-200">Your Out-of-Pocket:</span>
                    <span className="font-bold text-2xl text-red-600">$49,100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pathfinity.ai */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-green-400 relative">
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                SAVES YOU $49,100/YEAR!
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">✅ Pathfinity.ai</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Annual Tuition (3 kids):</span>
                  <span className="font-bold text-xl text-gray-700 dark:text-gray-300">$15,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">State ESA (3 kids):</span>
                  <span className="font-semibold text-green-600">+$22,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Federal Tax Credit:</span>
                  <span className="font-semibold text-green-600">+$3,400</span>
                </div>
                <div className="pt-4 border-t border-green-300">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-700 dark:text-gray-200">Your Out-of-Pocket:</span>
                    <span className="font-bold text-3xl text-green-600">$0</span>
                  </div>
                  <div className="text-sm text-green-600 mt-2">
                    Actually PROFIT $10,900 for college savings!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* State Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              📍 Your State's Benefits for 3 Children (ESA + Federal Credit)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { state: 'Arizona', esa: '$21,000', total: '$24,400', profit: '$9,400' },
                { state: 'Florida', esa: '$24,000', total: '$27,400', profit: '$12,400' },
                { state: 'Texas', esa: '$24,000', total: '$27,400', profit: '$12,400' },
                { state: 'Tennessee', esa: '$21,225', total: '$24,625', profit: '$9,625' },
                { state: 'Ohio', esa: '$25,200', total: '$28,600', profit: '$13,600' },
              ].map((item) => (
                <div key={item.state} className="text-center p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                  <div className="font-bold text-purple-600 dark:text-purple-400">{item.state}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">ESA: {item.esa}</div>
                  <div className="font-bold text-green-600 text-sm mt-1">Total: {item.total}</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">Profit: {item.profit}!</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                to="/esa-calculator"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Calculate Your Exact Benefits</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Phase Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Three-Phase Learning Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every day, students experience a complete learning adventure that guarantees multiple opportunities to master skills
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Gate 1: LEARN */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🚪 LEARN Phase</h3>
              <p className="text-gray-600 text-lg">
                Master core skills across Math, English, Science, and Social Studies through focused lessons.
              </p>
            </div>

            {/* Gate 2: EXPERIENCE */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🚪 EXPERIENCE Phase</h3>
              <p className="text-gray-600 text-lg">
                Apply those same skills in exciting careers at Career, Inc.—from chef to architect to game designer.
              </p>
            </div>

            {/* Gate 3: DISCOVER */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🚪 DISCOVER Phase</h3>
              <p className="text-gray-600 text-lg">
                Reinforce learning through engaging story adventures that test knowledge in narrative contexts.
              </p>
            </div>
          </div>

          {/* Breakthrough Message */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 The Breakthrough</h3>
            <p className="text-lg text-gray-700">
              A child who struggles with abstract math might excel when using those same skills as a chef, then master them completely in a story adventure.
            </p>
          </div>

          {/* Demo CTA */}
          <div className="text-center mt-12">
            <Link
              to="/demo"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Experience It Yourself</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Finn Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Finn Visual */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-8 mx-auto lg:mx-0 p-4">
                <img 
                  src="/finn-enhanced.jpeg" 
                  alt="Finn - Your AI Learning Guide" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Finn's Daily Greeting</h4>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "Good morning! I've prepared your perfect learning adventure today. We'll master fractions by helping Chef Maya in the kitchen, then solve a mystery story where counting is the key to saving the day!"
                  </p>
                </div>
              </div>
            </div>

            {/* Finn Description */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Meet Finn: Your AI Learning Guide
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Finn acts like a personal tutor, career counselor, and storyteller all rolled into one—supported by a team of 6 AI Teacher Assistants dedicated to each student's daily learning journey.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 dark:text-purple-400 text-sm">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Personalized Learning Adventures</h4>
                    <p className="text-gray-600 dark:text-gray-300">Every session, Finn greets students with a personalized learning adventure tailored to their interests and skill level.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 dark:text-purple-400 text-sm">🛤️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Always a Path Forward</h4>
                    <p className="text-gray-600 dark:text-gray-300">Finn ensures students always have a path forward, no matter how they perform at each phase—just like the best game guides.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 dark:text-purple-400 text-sm">🎭</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Three Roles in One</h4>
                    <p className="text-gray-600 dark:text-gray-300">Personal tutor for academic support, career counselor for real-world connections, and storyteller for engaging adventures.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 dark:text-purple-400 text-sm">👥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">AI Teaching Team</h4>
                    <p className="text-gray-600 dark:text-gray-300">Finn leads a team of 6 specialized AI Teacher Assistants, each focused on different aspects of your child's learning journey and development.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🔬 The Science Behind Finn</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Finn is powered by PathIQ™ Intelligence System, using advanced AI to identify each student's optimal learning sequence and context preferences, ensuring every child discovers their unique learning superpowers while building confidence through guaranteed progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PathIQ Intelligence System Section */}
      <section id="pathiq" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Brain className="w-10 h-10 text-purple-600" />
              <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                PathIQ™ Intelligence System
              </h2>
              <Sparkles className="w-10 h-10 text-indigo-600" />
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-4">
              The proprietary AI intelligence that powers every personalized learning journey
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
              PathIQ™ analyzes millions of learning interactions to create the perfect educational path for each student
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* PathIQ Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-purple-200 dark:border-purple-700">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Brain className="w-14 h-14 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
                  PathIQ™ Intelligence Engine
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Proprietary Learning Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3">
                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Real-Time Adaptation Engine</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg p-3">
                    <Sparkles className="w-5 h-5 text-pink-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Predictive Success Modeling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PathIQ Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                How PathIQ™ Powers Superior Learning
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🧠</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Intelligent Learning Sequencing
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      PathIQ™ analyzes each student's performance across all three phases to determine the optimal learning sequence, ensuring concepts are introduced when the student is most ready to absorb them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Multi-Context Mastery Detection
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      PathIQ™ tracks skill mastery across academic lessons, career applications, and story adventures, identifying exactly how each student learns best and adapting content delivery accordingly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Predictive Career Matching
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      PathIQ™ identifies career interests and aptitudes by analyzing performance patterns across thousands of career simulations, helping students discover their passions and strengths.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">📊</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Real-Time Progress Intelligence
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      PathIQ™ provides instant insights to parents and educators about learning progress, predicted mastery timelines, and personalized recommendations for supporting each student's unique journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PathIQ Stats */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">PathIQ™ by the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10M+</div>
                <div className="text-sm opacity-90">Learning Interactions Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3,000+</div>
                <div className="text-sm opacity-90">Career Skills Mapped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">0.3s</div>
                <div className="text-sm opacity-90">Adaptation Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">97%</div>
                <div className="text-sm opacity-90">Prediction Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Connection Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Finally, Education That Works Like Good Games
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto">
              Games are engaging precisely because they never block players from progressing. Struggle with a level? You can still continue the adventure, learn through different challenges, and circle back stronger.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Kids intuitively understand this approach works—so why doesn't education follow the same principle?
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">🎮 Student Gaming Appeal</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Every day is a complete adventure - you always progress through all three phases</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Multiple ways to master skills - struggle with abstract math? Excel as a chef using the same skills</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Never blocked from advancing - just like your favorite games, there's always a path forward</span>
                </li>
              </ul>
              
              <Link
                to="/demo"
                className="inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Try Our Three-Phase System Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Real Results Across All Grade Levels
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what students are experiencing in our three-phase learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* K-5 Testimonial */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="text-sm font-medium text-green-700 mb-2">K-5: Community Helper</div>
              <p className="text-gray-700 text-sm mb-4 italic">
                "I wanted to be a firefighter and got to count fire equipment! Math was actually fun when I was helping keep people safe. Now I love counting everything!"
              </p>
              <div className="text-xs text-green-600 font-medium">- Tyler, 2nd Grade</div>
            </div>

            {/* 6-8 Testimonial */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <div className="text-sm font-medium text-blue-700 mb-2">6-8: Technology Innovation</div>
              <p className="text-gray-700 text-sm mb-4 italic">
                "Being a game designer was AMAZING! I used geometry to create cool level designs and wrote stories for the characters. I never knew math and writing worked together like that!"
              </p>
              <div className="text-xs text-blue-600 font-medium">- Maya, 7th Grade</div>
            </div>

            {/* 9-12 Testimonial */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <div className="text-sm font-medium text-purple-700 mb-2">9-12: Professional Leadership</div>
              <p className="text-gray-700 text-sm mb-4 italic">
                "The marketing director scenario blew my mind - I analyzed real data, created campaigns, and presented to executives. I'm definitely taking business and statistics classes now."
              </p>
              <div className="text-xs text-purple-600 font-medium">- Jordan, 11th Grade</div>
            </div>

            {/* Parent Testimonial */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <div className="text-sm font-medium text-orange-700 mb-2">Parent Impact</div>
              <p className="text-gray-700 text-sm mb-4 italic">
                "My son always struggled with math and would get so frustrated being stuck on the same problems. With Pathfinity.ai, he learned fractions by being a chef, then chose to continue his cooking adventure for two extra hours!"
              </p>
              <div className="text-xs text-orange-600 font-medium">- Jennifer M., Parent of 4th Grader</div>
            </div>
          </div>

          {/* Demo Prompt */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">See what students are experiencing</p>
            <Link
              to="/demo"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Play className="w-5 h-5" />
              <span>Experience the Demo</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Learning Into Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of families already on the waitlist for the future of education
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/waitlist"
              className="w-full sm:w-auto px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/how-it-works"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Homepage;