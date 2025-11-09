import React from 'react';
import { Sparkles, CheckCircle2, BookOpen, Briefcase } from 'lucide-react';

const MatchingShowcase = () => {
  return (
    <section id="matching" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium">
              <Sparkles size={14} /> Smart matching in seconds
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">Find the right mentor, not just any mentor</h2>
            <p className="mt-3 text-gray-600">Our algorithm aligns students and alumni based on education, skills, interests, and career aspirations so conversations start with context.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-indigo-600" size={18} /><span>Filter by domain expertise, alma mater, and location preference.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-indigo-600" size={18} /><span>Share learning goals to improve match quality.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-indigo-600" size={18} /><span>See availability windows and communication preferences upfront.</span></li>
            </ul>
          </div>
          <div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                {[{title:'UI/UX Mentors',icon:BookOpen,color:'bg-pink-50 text-pink-600'},{title:'Data Science Mentors',icon:Briefcase,color:'bg-indigo-50 text-indigo-600'},{title:'Product Management',icon:Briefcase,color:'bg-emerald-50 text-emerald-600'},{title:'Software Engineering',icon:BookOpen,color:'bg-amber-50 text-amber-600'}].map((item)=>{
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-xl border border-gray-100 p-4 hover:shadow-md transition">
                      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${item.color}`}>
                        <Icon size={18} />
                      </div>
                      <div className="mt-3 font-medium text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600">124+ available mentors</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchingShowcase;
