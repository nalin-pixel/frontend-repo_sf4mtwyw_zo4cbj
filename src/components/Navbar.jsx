import React from 'react';
import { GraduationCap, UserRound, LogIn, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <GraduationCap size={20} />
            </div>
            <span className="text-xl font-semibold tracking-tight">MentorConnect</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#matching" className="hover:text-gray-900 transition">Matching</a>
            <a href="#goals" className="hover:text-gray-900 transition">Goals</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50 transition">
              <UserRound size={16} />
              Sign up
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition">
              <LogIn size={16} />
              Log in
            </button>
            <button className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 p-2 hover:bg-gray-50">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
