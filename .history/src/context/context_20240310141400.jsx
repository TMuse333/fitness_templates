// WorkoutContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { workoutData } from '../data/data';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);

  useEffect(() => {
    // Fetch or set your workout data
    setWorkouts(workoutData);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Perform any additional logic based on the selected date
  };



  const handleWeekSelection = () => {
    setWeekSelected(true);
    setDateSelected(false);
    setSelectedWeek(getWeekNumber(selectedDate));
  };

  const handleDateSelection = () => {
    setDateSelected(true);
    setWeekSelected(false);
  };

  // Additional functions or calculations related to workout data can be added here

  return (
    <WorkoutContext.Provider
      value={{
        workouts,
        setWorkouts,
        selectedDate,
        selectedWeek,
        handleDateChange,
        handleWeekSelection,
        handleDateSelection
        // Add other functions or values as needed
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }

  return context;
};
