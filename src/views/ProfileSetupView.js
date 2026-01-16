import React, { useState } from 'react';
import { User, TrendingUp, Calendar, Award } from 'lucide-react';

/**
 * ProfileSetupView - User onboarding component for collecting fitness profile data
 * @param {Object} props - Component props
 * @param {Object} props.userProfile - Current user profile data
 * @param {Function} props.onProfileComplete - Callback when profile setup is complete
 */
const ProfileSetupView = ({ userProfile, onProfileComplete }) => {
  const [localProfile, setLocalProfile] = useState(userProfile);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localProfile.name || !localProfile.goal || !localProfile.experience) {
      alert('Please fill in all required fields');
      return;
    }
    onProfileComplete(localProfile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-2 text-center">Welcome to AI Workout Tracker</h1>
        <p className="text-gray-300 text-center mb-8">Let's personalize your fitness journey</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="flex items-center text-white font-semibold mb-2">
              <User className="w-5 h-5 mr-2" />
              Name <span className="text-red-400 ml-1">*</span>
            </label>
            <input
              type="text"
              value={localProfile.name || ''}
              onChange={(e) => setLocalProfile({ ...localProfile, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="flex items-center text-white font-semibold mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              Age
            </label>
            <input
              type="number"
              value={localProfile.age || ''}
              onChange={(e) => setLocalProfile({ ...localProfile, age: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Optional"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="flex items-center text-white font-semibold mb-2">
              <User className="w-5 h-5 mr-2" />
              Gender
            </label>
            <select
              value={localProfile.gender || ''}
              onChange={(e) => setLocalProfile({ ...localProfile, gender: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Prefer not to say</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Weight */}
          <div>
            <label className="flex items-center text-white font-semibold mb-2">
              <TrendingUp className="w-5 h-5 mr-2" />
              Weight (lbs)
            </label>
            <input
              type="number"
              value={localProfile.weight || ''}
              onChange={(e) => setLocalProfile({ ...localProfile, weight: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Optional"
            />
          </div>

          {/* Goal */}
          <div>
            <label className="flex items-center text-white font-semibold mb-2">
              <Award className="w-5 h-5 mr-2" />
              Primary Goal <span className="text-red-400 ml-1">*</span>
            </label>
            <select
              value={localProfile.goal || ''}
              onChange={(e) => setLocalProfile({ ...localProfile, goal: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select your goal</option>
              <option value="Bodybuilding">Bodybuilding (Muscle Growth)</option>
              <option value="Powerlifting">Powerlifting (Strength)</option>
              <option value="General Fitness">General Fitness</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Athletic Performance">Athletic Performance</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label className="flex items-center text-white font-semibold mb-2">
              <Award className="w-5 h-5 mr-2" />
              Experience Level <span className="text-red-400 ml-1">*</span>
            </label>
            <select
              value={localProfile.experience || ''}
              onChange={(e) => setLocalProfile({ ...localProfile, experience: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select your experience</option>
              <option value="Beginner">Beginner (0-1 years)</option>
              <option value="Intermediate">Intermediate (1-3 years)</option>
              <option value="Advanced">Advanced (3+ years)</option>
            </select>
          </div>

          {/* Days per Week */}
          <div>
            <label className="flex items-center text-white font-semibold mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              Training Days per Week
            </label>
            <input
              type="number"
              min="1"
              max="7"
              value={localProfile.daysPerWeek || ''}
              onChange={(e) => setLocalProfile({ ...localProfile, daysPerWeek: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., 4"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            Complete Setup
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetupView;
