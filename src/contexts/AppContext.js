import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // User and Auth State
  const [user, setUser] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  // Routine State
  const [routines, setRoutines] = useState({});
  const [activeRoutineId, setActiveRoutineId] = useState('');
  const [currentDay, setCurrentDay] = useState(1);

  // Workout State
  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [workoutStartTime, setWorkoutStartTime] = useState(null);
  const [workoutPaused, setWorkoutPaused] = useState(false);

  // Exercise Database
  const [exerciseDatabase, setExerciseDatabase] = useState({});

  // UI State
  const [currentView, setCurrentView] = useState('loading');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Analysis Modal State
  const [analysisModalOpen, setAnalysisModalOpen] = useState(false);
  const [analysisContent, setAnalysisContent] = useState('');
  const [analysisLoading, setAnalysisLoading] = useState(false);

  const value = {
    // User and Auth
    user, setUser,
    isAuthReady, setIsAuthReady,
    userProfile, setUserProfile,

    // Routines
    routines, setRoutines,
    activeRoutineId, setActiveRoutineId,
    currentDay, setCurrentDay,

    // Workouts
    workoutHistory, setWorkoutHistory,
    currentWorkout, setCurrentWorkout,
    isWorkoutActive, setIsWorkoutActive,
    workoutStartTime, setWorkoutStartTime,
    workoutPaused, setWorkoutPaused,

    // Exercise Database
    exerciseDatabase, setExerciseDatabase,

    // UI State
    currentView, setCurrentView,
    isLoading, setIsLoading,
    error, setError,

    // Analysis Modal
    analysisModalOpen, setAnalysisModalOpen,
    analysisContent, setAnalysisContent,
    analysisLoading, setAnalysisLoading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
