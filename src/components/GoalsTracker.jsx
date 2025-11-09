import React, { useState } from 'react';
import { Target, Plus, CheckCircle2 } from 'lucide-react';

const GoalsTracker = () => {
  const [goals, setGoals] = useState([
    { id: 1, text: 'Complete resume review', done: true },
    { id: 2, text: 'Schedule mock interview', done: false },
  ]);
  const [input, setInput] = useState('');

  const addGoal = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setGoals((prev) => [...prev, { id: Date.now(), text: trimmed, done: false }]);
    setInput('');
  };

  const toggleGoal = (id) => {
    setGoals((prev) => prev.map(g => g.id === id ? { ...g, done: !g.done } : g));
  };

  return (
    <section id="goals" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium">
              <Target size={14} /> Stay accountable
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">Set goals and track progress together</h2>
            <p className="mt-3 text-gray-600">Create clear objectives, define milestones, and celebrate achievements as you advance through your mentorship journey.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-emerald-600" size={18} /><span>Lightweight tracker to capture goals and mark progress.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-emerald-600" size={18} /><span>Structured check-ins to keep momentum.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-emerald-600" size={18} /><span>Share progress summaries to reflect on growth.</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm w-full">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new goal..."
                className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button onClick={addGoal} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                <Plus size={16} /> Add
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {goals.map((g) => (
                <button
                  key={g.id}
                  onClick={() => toggleGoal(g.id)}
                  className={`w-full flex items-center justify-between rounded-md border px-4 py-3 text-left ${g.done ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-200'} hover:bg-emerald-50/50`}
                >
                  <span className={g.done ? 'line-through text-gray-500' : 'text-gray-800'}>{g.text}</span>
                  {g.done && <CheckCircle2 className="text-emerald-600" size={18} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsTracker;
