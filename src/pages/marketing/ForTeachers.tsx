// ================================================================
// FOR TEACHERS PAGE
// Teacher-focused messaging about data-driven differentiation and classroom analytics
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  BarChart3, 
  Users, 
  Target, 
  BookOpen,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Clock,
  Brain,
  Lightbulb,
  Award,
  MessageSquare,
  Sparkles,
  Shield,
  Star
} from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';

export const ForTeachers: React.FC = () => {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section id="data-driven-differentiation" className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="w-8 h-8 text-emerald-500" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                Data-Driven Differentiation Made Simple
              </h1>
              <Award className="w-8 h-8 text-emerald-500" />
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Finally understand HOW each of your 25+ students learns best. Rich analytics transform parent conferences into collaborative conversations about optimizing each child's learning path.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-10 text-lg text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-emerald-500" />
                <span>Rich Learning Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-emerald-500" />
                <span>Learning Style ID</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-emerald-500" />
                <span>Parent Conference Gold</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/demo"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>See Teacher Analytics</span>
              </Link>
              
              <Link
                to="/waitlist"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-700 text-emerald-600 dark:text-emerald-400 border-2 border-emerald-300 dark:border-emerald-500 rounded-xl font-semibold text-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge/Solution Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* The Challenge */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Challenge You Face Daily</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🤹 Differentiation for 25+ Students</h3>
                  <p className="text-gray-700 dark:text-gray-300">You know every child learns differently, but how do you personalize learning for an entire classroom? You need data to prove learning styles and tools to act on insights.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📊 Limited Learning Data</h3>
                  <p className="text-gray-700 dark:text-gray-300">Traditional assessments only give you one data point per skill. You need rich insights into HOW each child learns best to guide your instruction.</p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">👨‍👩‍👧‍👦 Parent Conference Struggles</h3>
                  <p className="text-gray-700 dark:text-gray-300">You want to give parents specific guidance about their child's learning, but you lack concrete data about individual learning preferences and career interests.</p>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-emerald-500" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Pathfinity.ai Advantage</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🔍 Learning Style Identification</h3>
                  <p className="text-gray-700 dark:text-gray-300">Get concrete data: "Sarah masters math through practical applications, not abstract problems." Now you can differentiate with confidence.</p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📈 Three-Phase Assessment System</h3>
                  <p className="text-gray-700 dark:text-gray-300">Instead of one data point per skill, get rich insights into HOW each child learns best through traditional, practical, and narrative assessment contexts.</p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💎 Parent Conference Gold</h3>
                  <p className="text-gray-700 dark:text-gray-300">"Emma learns math best through hands-on activities" and "Marcus shows sustained interest in engineering careers" - specific, actionable insights for every student.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Analytics Dashboard */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📊 Your Classroom Analytics Dashboard
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Rich insights for every student, delivered in formats that help you take immediate action
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Dashboard Preview */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <BarChart3 className="w-8 h-8 text-emerald-600 mr-3" />
                Ms. Rodriguez's 4th Grade Class
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Learning Style Distribution</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Hands-On Learners</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">8 students (32%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Visual Learners</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">7 students (28%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Story-Context Learners</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">6 students (24%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Abstract Learners</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">4 students (16%)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Career Interest Trends</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded">Healthcare (6 students)</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded">Creative Arts (5 students)</span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded">Technology (4 students)</span>
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs rounded">Community Service (3 students)</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Context Performance Overview</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">Students showing 15%+ improvement in career contexts vs. traditional lessons:</p>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">18 out of 25 students (72%)</div>
                </div>
              </div>
            </div>

            {/* Analytics Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Lightbulb className="w-8 h-8 text-yellow-500 mr-3" />
                Actionable Classroom Insights
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Individual Learning Profiles</h4>
                    <p className="text-gray-600 dark:text-gray-300">Know exactly HOW each student learns best and which contexts drive their highest performance and engagement.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Differentiation Guidance</h4>
                    <p className="text-gray-600 dark:text-gray-300">Get specific recommendations for grouping students and adapting instruction based on learning style patterns in your classroom.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Career Interest Data</h4>
                    <p className="text-gray-600 dark:text-gray-300">Identify which students show genuine interest in STEM, arts, healthcare, or other fields to guide enrichment and motivation strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Conference Tools */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              💬 Transform Parent Conferences
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Move beyond "Your child is doing well" to specific, actionable insights that help parents support learning at home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Learning Style Evidence</h3>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                "Emma learns math best through hands-on activities like cooking scenarios. At home, try using manipulatives and real-world examples when helping with homework."
              </blockquote>
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">Concrete, actionable guidance for parents</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Career Interest Discovery</h3>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                "Marcus shows sustained interest in engineering careers and excels when math is presented in building and design contexts. Consider STEM enrichment activities."
              </blockquote>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Guide extracurricular and future planning decisions</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Growth Context Analysis</h3>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                "Aisha excels in narrative contexts and shows 23% higher performance when concepts are embedded in stories. Use storytelling to teach challenging concepts."
              </blockquote>
              <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">Specific strategies that work for each child</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Teacher Testimonial</h3>
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic mb-4">
                "For the first time, I have concrete data showing HOW each of my students learns best. Parent conferences became collaborative conversations about optimizing each child's learning path. Parents leave with specific strategies that actually work."
              </blockquote>
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">- Ms. Rodriguez, 4th Grade Teacher</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Phase Assessment System */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🎯 Rich Assessment Across Three Contexts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Instead of one data point per skill, understand HOW each child learns through multiple meaningful contexts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Traditional Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Standard lessons and practice problems to establish baseline understanding and identify students who excel with traditional instruction.</p>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Academic Readiness Indicator</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Career Context Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Same skills applied in realistic career scenarios to identify students who thrive with practical, hands-on applications.</p>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Practical Application Strength</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Narrative Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Skills embedded in engaging stories to identify students who excel when learning is contextualized within narratives.</p>
              <div className="text-sm text-green-600 dark:text-green-400 font-medium">Story-Context Learning Preference</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🔍 The Teaching Insight</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A student who struggles with traditional fractions (65%) but excels as a chef using the same skills (91%) shows you exactly how to differentiate instruction and boost their confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Classroom with Data-Driven Insights?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of teachers who are already using rich learning analytics to differentiate instruction and improve student outcomes
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Explore Teacher Analytics</span>
            </Link>
            
            <Link
              to="/waitlist"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors flex items-center justify-center space-x-2"
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

export default ForTeachers;