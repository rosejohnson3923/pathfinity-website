// ================================================================
// FOR ADMINISTRATORS PAGE
// Administrator-focused messaging about strategic innovation and district-wide analytics
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Building2,
  CheckCircle,
  AlertTriangle,
  Target,
  Brain,
  Lightbulb,
  Award,
  Globe,
  Sparkles,
  Shield,
  Star,
  Briefcase,
  PieChart
} from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';

export const ForAdministrators: React.FC = () => {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section id="strategic-innovation" className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Briefcase className="w-8 h-8 text-indigo-500" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                Strategic Educational Innovation
              </h1>
              <Briefcase className="w-8 h-8 text-indigo-500" />
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Lead the future of workforce development with district-wide analytics that connect student interests to regional workforce needs. 21st-century preparation requires more than test scores.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-10 text-lg text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-indigo-500" />
                <span>District Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-indigo-500" />
                <span>Workforce Pipeline</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-indigo-500" />
                <span>Future-Ready Students</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/demo"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>See District Dashboard</span>
              </Link>
              
              <Link
                to="/waitlist"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-300 dark:border-indigo-500 rounded-xl font-semibold text-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200 flex items-center justify-center space-x-2"
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
            {/* The District Challenge */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Strategic Challenge</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Beyond Test Scores</h3>
                  <p className="text-gray-700 dark:text-gray-300">21st-century workforce preparation requires students who can transfer skills across contexts, understand career pathways, and develop authentic interests that guide educational choices.</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📊 Limited Career Pathway Data</h3>
                  <p className="text-gray-700 dark:text-gray-300">You need comprehensive data on student career interests and skills transfer to align curriculum with regional workforce needs and guide long-term strategic planning.</p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🏢 Workforce Development Pressure</h3>
                  <p className="text-gray-700 dark:text-gray-300">Regional employers and parents expect schools to prepare students for modern careers, but you lack tools to identify and develop authentic career interests from elementary through high school.</p>
                </div>
              </div>
            </div>

            {/* The Strategic Solution */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-indigo-500" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Pathfinity.ai Advantage</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📈 District-Wide Analytics</h3>
                  <p className="text-gray-700 dark:text-gray-300">Comprehensive learning analytics across all subjects and grade levels, with career interest trending by demographic groups and geographic regions.</p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Workforce Pipeline Development</h3>
                  <p className="text-gray-700 dark:text-gray-300">Early career awareness starting in elementary grades with skills-to-careers mapping that shows students exactly why education matters for their future goals.</p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📊 Strategic Long-Term Value</h3>
                  <p className="text-gray-700 dark:text-gray-300">K-12 career interest tracking helps you align curriculum with regional workforce needs and demonstrate ROI to stakeholders through authentic student engagement data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* District Analytics Dashboard */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📊 District-Wide Analytics Dashboard
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Strategic insights for workforce development and curriculum alignment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Dashboard Preview */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <PieChart className="w-8 h-8 text-indigo-600 mr-3" />
                District Career Interest Trends
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">K-12 Career Pipeline Distribution</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Healthcare & Life Sciences</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">28% (1,240 students)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Technology & Engineering</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">22% (975 students)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Creative Arts & Design</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">18% (798 students)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Business & Entrepreneurship</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">16% (710 students)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Public Service & Education</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">16% (710 students)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Skills Transfer Effectiveness</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">Students showing 15%+ improvement across learning contexts:</p>
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">73% district-wide</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">23% improvement from last year</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Regional Workforce Alignment</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded">Tech Sector: 95% aligned</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded">Healthcare: 89% aligned</span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded">Creative Economy: 82% aligned</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Lightbulb className="w-8 h-8 text-yellow-500 mr-3" />
                Strategic Administrative Insights
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Workforce Development Pipeline</h4>
                    <p className="text-gray-600 dark:text-gray-300">Track career interest development from elementary through high school to align curriculum with regional economic development goals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Data-Driven Curriculum Decisions</h4>
                    <p className="text-gray-600 dark:text-gray-300">Use authentic student engagement data to guide resource allocation, program development, and partnership opportunities with local employers.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Community & Business Partnerships</h4>
                    <p className="text-gray-600 dark:text-gray-300">Demonstrate ROI to stakeholders with concrete data on student career preparation and skills development across multiple contexts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Strategic Value */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🎯 K-12 Strategic Implementation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Comprehensive workforce development from elementary through graduation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Elementary (K-5)</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2 text-left">
                <li>• Career awareness through community helper scenarios</li>
                <li>• Learning style identification for early intervention</li>
                <li>• Foundation skills in multiple contexts</li>
                <li>• Interest pattern development tracking</li>
              </ul>
              <div className="mt-4 text-xs text-green-600 dark:text-green-400 font-medium">Early Foundation Development</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Middle School (6-8)</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2 text-left">
                <li>• Expanded career exploration opportunities</li>
                <li>• Skill specialization through preferred contexts</li>
                <li>• Interest clustering for pathway guidance</li>
                <li>• Partnership program alignment</li>
              </ul>
              <div className="mt-4 text-xs text-blue-600 dark:text-blue-400 font-medium">Exploration & Specialization</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">High School (9-12)</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2 text-left">
                <li>• Professional-level career preparation</li>
                <li>• College pathway alignment with interests</li>
                <li>• Industry partnership integration</li>
                <li>• Workforce readiness certification</li>
              </ul>
              <div className="mt-4 text-xs text-purple-600 dark:text-purple-400 font-medium">Preparation & Certification</div>
            </div>
          </div>
        </div>
      </section>

      {/* Administrator Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🏆 Administrator Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Strategic leaders driving educational innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Dr. Johnson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">District Superintendent</p>
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                "District-wide, we've seen 23% improvement in cross-curricular skill transfer and 31% increase in sustained engagement with career exploration. The long-term career interest tracking helps us align our curriculum with regional workforce needs and demonstrate real ROI to our school board."
              </blockquote>
              <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">K-12: System-wide Impact & Workforce Alignment</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Dr. Martinez</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Elementary Principal</p>
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                "Our elementary data showed that 78% of students who explored healthcare careers through veterinarian scenarios maintained that interest into middle school. We're now partnering with local animal hospitals for real-world learning experiences and our community engagement has never been stronger."
              </blockquote>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">K-5: Community Partnership Development</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Strategic Implementation Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">23%</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Improvement in skill transfer</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">31%</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Increase in career engagement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">95%</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Workforce alignment success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Lead Educational Innovation in Your District?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join forward-thinking administrators who are already using comprehensive analytics to drive workforce development and strategic curriculum decisions
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Explore District Analytics</span>
            </Link>
            
            <Link
              to="/waitlist"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors flex items-center justify-center space-x-2"
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

export default ForAdministrators;