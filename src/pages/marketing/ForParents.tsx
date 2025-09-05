// ================================================================
// FOR PARENTS PAGE
// Parent-focused messaging about ending homework battles and learning insights
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Heart, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  BarChart3,
  Brain,
  Users,
  BookOpen,
  Target,
  Lightbulb,
  Shield,
  Smile
} from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';

export const ForParents: React.FC = () => {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section id="end-homework-battles" className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="w-8 h-8 text-pink-500" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                End Homework Battles Forever
              </h1>
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Finally understand HOW your child learns best. No more tears, frustration, or "I'm stuck" meltdowns—just confident, engaged learning that feels like play.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-10 text-lg text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span>No More Meltdowns</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <span>Learning Style Insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smile className="w-6 h-6 text-green-500" />
                <span>Confident Kids</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/demo"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>See How It Works</span>
              </Link>
              
              <Link
                to="/waitlist"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 border-2 border-blue-300 dark:border-blue-500 rounded-xl font-semibold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* The Problem */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Problem You Know Too Well</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">😢 "I'm Stuck" Meltdowns</h3>
                  <p className="text-gray-700 dark:text-gray-300">Your child hits a wall on homework and can't move forward. Tears, frustration, and bedtime battles become the daily norm.</p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🤔 Learning Style Mystery</h3>
                  <p className="text-gray-700 dark:text-gray-300">You know your child is smart, but traditional methods aren't clicking. You wonder: "HOW does my child learn best?"</p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎮 Gaming vs. Homework Paradox</h3>
                  <p className="text-gray-700 dark:text-gray-300">They play games for hours without getting frustrated, but 20 minutes of homework leads to tears. Why can't learning work like games?</p>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-green-500" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Pathfinity.ai Solution</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ No More "I'm Stuck" Moments</h3>
                  <p className="text-gray-700 dark:text-gray-300">Your child always progresses through the full learning journey. Struggling with fractions? They'll try them as a chef, then in a story adventure.</p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🔍 Learning Style Discovery</h3>
                  <p className="text-gray-700 dark:text-gray-300">Finally understand HOW your child learns best: "Emma masters math through hands-on activities, not abstract problems."</p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Game-Like Learning</h3>
                  <p className="text-gray-700 dark:text-gray-300">Learning that works like their favorite games—engaging, progressive, and never blocking them from continuing their adventure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll See at Home Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🏠 What You'll See at Home
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Real changes you'll notice in your child's relationship with learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Confidence Building</h3>
              </div>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>Skills work in real contexts they can understand</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>Multiple chances to succeed reduce anxiety</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>"I can do this!" replaces "I'm stuck!"</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Voluntary Learning</h3>
              </div>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                  <span>Extended learning when they discover careers they love</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                  <span>"Can I do more?" instead of "Do I have to?"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                  <span>Self-directed exploration and curiosity</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-8 h-8 text-purple-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Rich Insights</h3>
              </div>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                  <span>Concrete data about HOW your child learns best</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                  <span>Career interests emerging through authentic engagement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                  <span>Progress tracking across different learning contexts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-8 h-8 text-pink-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Family Harmony</h3>
              </div>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                  <span>No anxiety about "failing" or getting blocked</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                  <span>Peaceful bedtimes without homework battles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                  <span>Conversations about interests, not just grades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Analytics Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📊 Parent Dashboard: Your Child's Learning Insights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Get the answers you've been looking for about how your child learns best
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Dashboard Preview */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
                Emma's Learning Profile
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Optimal Learning Style</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Emma masters math through hands-on activities like cooking scenarios, not abstract problems</p>
                  <div className="mt-2 flex space-x-2">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded">Hands-On Learner</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded">Visual Context</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Career Interest Trends</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Shows sustained interest in veterinary careers - spent 3 hours exploring animal care scenarios</p>
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded">Healthcare Interest</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Progress Across Contexts</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Traditional Lessons</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">72%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Career Applications</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Story Adventures</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Lightbulb className="w-8 h-8 text-yellow-500 mr-3" />
                Actionable Insights for Parents
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Learning Style Identification</h4>
                    <p className="text-gray-600 dark:text-gray-300">Know exactly HOW your child learns best and apply these insights to homework help and study strategies.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Career Interest Discovery</h4>
                    <p className="text-gray-600 dark:text-gray-300">Identify genuine interests vs. casual curiosity to guide extracurricular choices and future planning.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Progress Patterns</h4>
                    <p className="text-gray-600 dark:text-gray-300">Understand which learning contexts work best and celebrate growth across all three phases of learning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              💝 What Parents Are Saying
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real families, real transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Jennifer M.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Parent of 4th Grader</p>
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                "My son always struggled with math and would get so frustrated being stuck on the same problems. With Pathfinity.ai, he learned fractions by being a chef, then chose to continue his cooking adventure for two extra hours! Now he says he wants to be a chef AND he's good at math!"
              </blockquote>
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">K-5: Creative/Practical Learning Path</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">David R.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Parent of 7th Grader</p>
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                "The learning analytics showed us that our daughter learns best through hands-on experiences, not abstract problems. But the real revelation was watching her voluntarily spend extra time advancing through veterinary careers. She went from Animal Helper to Veterinary Assistant to Junior Vet—we never knew she had such deep interest in animal care!"
              </blockquote>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">6-8: Science/Healthcare Interest Discovery</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Family's Learning Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of families who have already ended homework battles and discovered how their children learn best
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>See the Parent Dashboard</span>
            </Link>
            
            <Link
              to="/waitlist"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
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

export default ForParents;