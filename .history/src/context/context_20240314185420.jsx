// WorkoutContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { workoutData } from '../data/data';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [workouts, setWorkouts] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState(null);
  
    const [weekSelected, setWeekSelected] = useState(false);
    const [dateSelected, setDateSelected] = useState(false);

    const [progressData, setProgressData] = useState([]);

    const [loggedIn, setLoggedIn ] = useState(false)

  const [viewData, setViewData] = useState(false)

  const [insertData, setInsertData] = useState(false)


    const [weeklyProgressSelected, setWeeklyProgressSelected] =
    useState(false)

    const handleReturnClick = () => {
        setSelectedDate(null); // Reset selected date
        // setWorkouts([]); 
        setSelectedWeek(null); // Reset selected week
        setWeekSelected(false); // Reset week selection
        setDateSelected(false); // Reset date selection
        setProgressData(prevProgressData => {
            // Access previous state of progressData if needed
            console.log('Previous progressData:', prevProgressData);
            // Return the new state value (an empty array)
            return [];
        });

      
        setWeeklyProgressSelected(false); // Reset weekly progress selection

      };

    const handleProgressSelection = () => {
     
        handleWeekSelection(); // Ensure weekSelected is set
        setWeeklyProgressSelected(true); // Set weeklyProgressSelected to true
      };
      
      useEffect(() => {
        if (weeklyProgressSelected && weekSelected) {
          const calculatedProgressData = calculateProgress();
          setProgressData(calculatedProgressData);
        }
      }, [weeklyProgressSelected, weekSelected]);
      
  
    const exerciseMap = new Map();
  
    useEffect(() => {
      // Fetch your workout data here
      // For now, using the provided workoutData as an example
      setWorkouts(workoutData);
    }, []);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
      if(weekSelected){
        handleWeekSelection()
        console.log('it worked')
      }

      else if(dateSelected){
        handleDateSelection()
        console.log('it worked')
      }

      else if(weeklyProgressSelected){
        handleProgressSelection()
      }
     
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
  
    const getWeekNumber = (date) => {

       

        
      // Calculate the ISO week number
      const currentDate = new Date(date);
      currentDate.setHours(0, 0, 0, 0);
      currentDate.setDate(currentDate.getDate() + 4 - (currentDate.getDay() || 7));
      const yearStart = new Date(currentDate.getFullYear(), 0, 1);
      const weekNumber = Math.ceil(((currentDate - yearStart) / 86400000 + 1) / 7);
        
  
      return weekNumber;
    };
  
    // Filter workouts based on the selected date or week
    const filteredWorkouts = workouts.filter((workout) => {
      if (dateSelected) {
        return workout.date && workout.date.toDateString() === selectedDate?.toDateString();
      } else if (weekSelected) {
        return getWeekNumber(workout.date) === selectedWeek;
      }
      return false;
    });


    const calculateProgress = () => {
        if ( weeklyProgressSelected && weekSelected) {
          // Iterate through workouts in the selected week
          const sortedWorkouts = filteredWorkouts.sort((a, b) => a.date - b.date);
      
          // Calculate progress for each exercise
          const progressData = [];
      
          sortedWorkouts.forEach((workout) => {
            workout.exercises.forEach((exercise) => {
              const { name } = exercise;
      
              // Check if the exercise already exists in progressData
              const existingExercise = progressData.find((item) => item.name === name);
      
              if (existingExercise) {
                // If the exercise exists, add the current workout data to it
                const totalWeight = calculateTotalWeight(exercise.sets);
                existingExercise.workouts.push({
                  date: workout.date,
                  sets: exercise.sets,
                  totalWeight,
                });
              } else {
                // If the exercise doesn't exist, create a new entry in progressData
                const totalWeight = calculateTotalWeight(exercise.sets);
                progressData.push({
                  name,
                  workouts: [
                    {
                      date: workout.date,
                      sets: exercise.sets,
                      totalWeight,
                    },
                  ],
                });
              }
            });
          });
      
          // Log the workout data for each exercise
          progressData.forEach((exercise) => {
            console.log(`Exercise Name: ${exercise.name}`);
      
            exercise.workouts.forEach((workout) => {
              console.log(`Workout Date: ${workout.date.toLocaleDateString()}`);
              console.log(`Total Weight: ${workout.totalWeight}`);
      
              // ... other logging logic for sets
            });
          });
      
          console.log('Progress Data:', progressData);
      
          return progressData;
        }
      
        return [];
      };
      
      
      const calculateTotalWeight = (sets) => {
        let totalWeight = 0;
      
        sets.forEach((set) => {
          const repsAsInt = parseInt(set.reps, 10);
          const weightAsInt = parseInt(set.weight, 10);
          totalWeight += repsAsInt * weightAsInt;
        });
      
        return totalWeight;
      };
      
      
      
      
      
      



    const value = {
        filteredWorkouts,
        handleWeekSelection,
        handleDateSelection,
        handleDateChange,
        selectedDate,
        handleProgressSelection,
        weeklyProgressSelected,
        calculateProgress,
        progressData,
        dateSelected,
        weekSelected,
        handleReturnClick,
        loggedIn,
        setLoggedIn,
        viewData,
        setViewData,
        insertData,
        setInsertData
        
    }
  

  // Additional functions or calculations related to workout data can be added here

  return (
    <WorkoutContext.Provider
      value={value}
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
