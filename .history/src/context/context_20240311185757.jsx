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


    const [weeklyProgressSelected, setWeeklyProgressSelected] =
    useState(false)

    const handleProgressSelection = () => {
        setWeeklyProgressSelected(true);
        const calculatedProgressData = calculateProgress();
        setProgressData(calculatedProgressData);
      };
      
  
    const exerciseMap = new Map();
  
    useEffect(() => {
      // Fetch your workout data here
      // For now, using the provided workoutData as an example
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
        if (weekSelected && weeklyProgressSelected) {
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
                existingExercise.workouts.push({
                  date: workout.date,
                  sets: exercise.sets,
                  totalWeight:0
                });
              } else {
                // If the exercise doesn't exist, create a new entry in progressData
                progressData.push({
                  name,
                  workouts: [
                    {
                      date: workout.date,
                      sets: exercise.sets,
                    },
                  ],
                });
              }
            });
          });


      
          // Log the workout data for each exercise
          progressData.forEach((exercise) => {
            console.log(`Exercise Name: ${exercise.name}`);
      
            for (let i = 0; i < exercise.workouts.length ; i++) {

                //runs 3 times

                const date = exercise.workouts[i].date.toLocaleDateString()
                
                let totalReps = 0

                let totalWeight = 0

                for(let j = 0; j < exercise.workouts[i].sets.length; j++){

                    
                   

                    const repsAsInt = parseInt(exercise.workouts[i].sets[j].reps, 10);

                    const weightAsInt = parseInt(exercise.workouts[i].sets[j].weight, 10);

                    const weightMoved = repsAsInt * weightAsInt

                    totalWeight += weightMoved

                }

                progressData.push({
                    totalWeight:tota
                })

                console.log(`Total weight moved on 
                ${date}: ${totalWeight}`)

               
            }

            
            const lastWeight = exercise.workouts[exercise.workouts.length - 1].sets.slice(-1)[0].weight;


            console.log('the last weight is',lastWeight)
            

          });


        //   console.log('first progress',progressData[0].workouts[0].sets[0].weight)
       
          
          console.log('Progress Data:', progressData);
      
          return progressData;
        }
      
        return [];
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
        progressData
        
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
