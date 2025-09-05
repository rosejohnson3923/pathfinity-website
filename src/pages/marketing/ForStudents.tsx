// ================================================================
// FOR STUDENTS PAGE
// Student-focused messaging with gaming elements and epic learning adventures
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Gamepad2, 
  Trophy, 
  Star, 
  Zap, 
  Target, 
  BookOpen, 
  Users, 
  ChevronRight,
  Award,
  Sparkles
} from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';

export const ForStudents: React.FC = () => {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section id="level-up-learning" className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 py-20 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-green-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Gamepad2 className="w-8 h-8 text-yellow-400" />
              <h1 className="text-5xl sm:text-6xl font-bold">
                Level Up Your Learning!
              </h1>
              <Gamepad2 className="w-8 h-8 text-yellow-400" />
            </div>
            
            <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              Finally, school that works like your favorite games—engaging adventures where you always progress, never get stuck, and discover your superpowers!
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-10 text-lg">
              <div className="flex items-center space-x-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <span>Earn XP Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-400" />
                <span>Unlock Careers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span>Never Get Blocked</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/demo"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-6 h-6" />
                <span>Start Your Adventure</span>
              </Link>
              
              <Link
                to="/waitlist"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Connection Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🎮 Why You'll Love Learning with Pathfinity.ai
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              We studied what makes games so addictive and applied those same principles to education. The result? Learning that feels like playing your favorite game!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Gaming Elements */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Gamepad2 className="w-8 h-8 text-purple-600 mr-3" />
                Just Like Your Favorite Games
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">XP and Achievement System</h4>
                    <p className="text-gray-600 dark:text-gray-300">Earn experience points for every activity, unlock badges, and level up your learning profile—even when you're still figuring things out!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Multiple Paths to Victory</h4>
                    <p className="text-gray-600 dark:text-gray-300">Struggling with math in one context? No problem! Try the same skills as a chef, architect, or game designer until you find your winning strategy.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Never Get Blocked</h4>
                    <p className="text-gray-600 dark:text-gray-300">Unlike school where you get "stuck" on hard problems, you always progress through your full learning adventure—just like the best games!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Learning Adventure */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Sparkles className="w-8 h-8 text-indigo-600 mr-3" />
                Your Epic Learning Adventure
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-gray-900 dark:text-white">Phase 1: LEARN</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Master new skills with Finn as your personal guide—like having the best gaming tutorial ever!</p>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-gray-900 dark:text-white">Phase 2: EXPERIENCE</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Choose your career at Career, Inc. and use your new skills in epic real-world scenarios—from chef to astronaut!</p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Star className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-gray-900 dark:text-white">Phase 3: DISCOVER</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Become the hero of amazing story adventures where your skills save the day and unlock new possibilities!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Adventure Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🏢 Welcome to Career, Inc.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Every day, you'll clock in at Career, Inc. and choose from hundreds of exciting careers. Use your real skills in real scenarios that actually matter!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Chef Adventures</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Use fractions to perfect recipes and ratios to create amazing dishes!</p>
              <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">Cooking Helper → Sous Chef → Head Chef → Master Chef</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Game Designer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Use geometry to create levels and storytelling to build characters!</p>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Level Designer → Game Developer → Studio Director</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Space Explorer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Use physics and math to navigate through space and discover new worlds!</p>
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">Cadet → Pilot → Commander → Mission Director</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Architect</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Use measurement and design thinking to build amazing structures!</p>
              <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">Assistant → Designer → Architect → Master Builder</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">...and hundreds more careers to explore!</p>
            <Link
              to="/demo"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Play className="w-5 h-5" />
              <span>Start Your Career Adventure</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🌟 What Students Are Saying
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real students, real excitement about learning!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-400">Tyler, 2nd Grade</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "I wanted to be a firefighter and got to count fire equipment! Math was actually fun when I was helping keep people safe. Now I love counting everything!"
              </p>
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">K-5: Community Helper Path</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Maya, 7th Grade</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "Being a game designer was AMAZING! I used geometry to create cool level designs and wrote stories for the characters. I never knew math and writing worked together like that!"
              </p>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">6-8: Technology Innovation Path</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-700 dark:text-purple-400">Jordan, 11th Grade</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "The marketing director scenario blew my mind - I analyzed real data, created campaigns, and presented to executives. I'm definitely taking business and statistics classes now."
              </p>
              <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">9-12: Professional Leadership Path</div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement System */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              🏆 Level Up Your Learning Profile
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Track your progress, unlock achievements, and discover your learning superpowers!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Daily XP Rewards</h3>
              <p className="opacity-90">Earn experience points for every activity—reading, problem-solving, career exploration, and story adventures!</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Career Badges</h3>
              <p className="opacity-90">Unlock special badges as you master different careers and advance through the ranks from helper to expert!</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Learning Superpowers</h3>
              <p className="opacity-90">Discover whether you're a Visual Learner, Hands-On Hero, Logic Master, or Story Champion—then use your powers!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Learning Adventure?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of students who are already leveling up their learning!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Try the Demo Now</span>
            </Link>
            
            <Link
              to="/waitlist"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 border-2 border-purple-300 dark:border-purple-500 rounded-xl font-semibold text-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default ForStudents;