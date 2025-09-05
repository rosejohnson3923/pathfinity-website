// ================================================================
// ABOUT US PAGE
// Company story and team information
// ================================================================

import React from 'react';
import { MarketingLayout } from '../../components/marketing/MarketingLayout';
import { Users, Target, Lightbulb, Heart, Gamepad2, GraduationCap, Building2, BookOpen } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section id="about-pathfinity" className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Pathfinity.ai
          </h1>
          <p className="text-xl sm:text-2xl text-purple-600 dark:text-purple-400 font-semibold mb-8">
            Redefining Education for the AI Generation
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our journey started with a simple question: <strong>Why is school still broken?</strong> Not from a place of arrogance, but from curiosity. We didn't claim to have the answers—we just knew where to find them: with students, educators, and families who live the problem every day.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                A Studio Born From Purpose
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                In July 2020, at the height of the pandemic, we opened <strong>Esposure Studios</strong>—not just as a space, but as a signal. A dual-purpose hub for immersive learning and deep market research. We invited students to game, explore, and create while we listened, tested, iterated, and learned.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At the heart of Pathfinity is a belief that education should be vibrant, relevant, and future-facing. Our team—led by Danny Martin II, a trusted voice in esports and digital culture—set out to build more than another edtech product. We wanted to co-create a movement that reimagines what learning could look like in a world shaped by AI, gaming, and real-world skills.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl text-center">
                <Gamepad2 className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">100s</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Esports Competitions</div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl text-center">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Student Field Trips</div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl text-center">
                <Lightbulb className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">1000s</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Feedback Sessions</div>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl text-center">
                <GraduationCap className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">100s</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Educator Sessions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Learned Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What We Learned</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Through thousands of conversations, a few clear truths emerged:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Students live digital-first lives—yet schools remain analog
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    They're frustrated by outdated systems that don't match the pace of their world.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Parents want real career pathways, not test-prep factories
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    They're demanding modern, relevant coursework that prepares students for life—not just exams.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Students want credit for what they really know
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    They're mastering skills in coding, design, and content creation—but none of it shows up on report cards.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-lg">
                  <Building2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Teachers are stuck with tools that don't inspire
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    LMS platforms are clunky. Curriculum is rigid. Engagement is dropping—and everyone knows it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Response Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Response: Pathfinity.ai</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Pathfinity isn't a learning platform. It's a <strong>Learning Experience Ecosystem</strong>—designed for Gen Z and Gen Alpha, powered by AI, and built to adapt in real time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/10 dark:to-purple-800/10 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                📚
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">LEARN</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Master essential skills across core subjects with intelligent, personalized learning journeys.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/10 dark:to-blue-800/10 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                💼
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">EXPERIENCE</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore real-world careers through interactive simulations in industries from gaming to healthcare.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/10 dark:to-green-800/10 rounded-xl">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">DISCOVER</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Go on narrative-driven quests that reinforce academic concepts in immersive story-based worlds.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              All guided by <strong>Finn</strong>, our vibey, gamified AI assistant who helps students unlock their unique path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Grassroots Movement Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">A Grassroots Movement, Not Just a Company</h2>
          
          <div className="space-y-6 text-lg leading-relaxed opacity-90">
            <p>
              We didn't grow because of flashy marketing. We grew because communities believed in what we were building. Teachers brought us into classrooms. Parents invited us into homes. Students logged in and said, <em>"This feels different."</em>
            </p>
            
            <p>
              And that's because it is.
            </p>
            
            <p>
              Pathfinity was built <strong>with learners, not just for them</strong>. We're a grassroots, organic, hyper-growth company on a mission to restore trust in education by making it personal, powerful, and possible for every student to find their path.
            </p>
          </div>
          
          <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-xl font-semibold">
              We're not finished—but we're just getting started.
            </p>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default AboutUs;