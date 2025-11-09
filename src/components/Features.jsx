import React from 'react';
import { Search, MessageSquare, Target, BarChart3, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Smart Mentor Matching',
    desc: 'Connect based on academic background, skills, and career interests for the best fit.'
  },
  {
    icon: MessageSquare,
    title: 'Built-in Messaging',
    desc: 'Secure, real-time messaging and discussion spaces to keep conversations flowing.'
  },
  {
    icon: Target,
    title: 'Goals & Milestones',
    desc: 'Define objectives, set milestones, and track progress together over time.'
  },
  {
    icon: BarChart3,
    title: 'Progress Insights',
    desc: 'Visualize outcomes, session cadence, and achievements to stay motivated.'
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Safety',
    desc: 'Verified profiles and respectful community guidelines for safe interactions.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need for impactful mentorship</h2>
          <p className="mt-4 text-gray-600">Tools that encourage consistent engagement and measurable growth.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
