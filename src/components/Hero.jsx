import React from 'react';
import { Rocket, Users, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium">
              <Sparkles size={14} />
              Empowering mentorships that last
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Connect Students and Alumni for Real Growth
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              MentorConnect helps students find the right alumni mentors, collaborate on goals, and track progress with thoughtful tools designed for meaningful outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#matching" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-indigo-700 transition">
                <Rocket size={18} /> Get Started
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-5 py-3 font-medium hover:bg-gray-50 transition">
                <Users size={18} /> Explore Features
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900">5k+</div>
                <div className="text-sm text-gray-500">Mentorships formed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">40+</div>
                <div className="text-sm text-gray-500">Universities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-500">Support</div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-3xl blur-2xl opacity-70 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1470&auto=format&fit=crop"
                alt="Mentorship collaboration"
                className="relative rounded-2xl shadow-lg ring-1 ring-black/5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
