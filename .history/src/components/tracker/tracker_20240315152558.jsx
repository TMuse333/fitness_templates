import React, {useState,useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useWorkout } from "../../context/context";
import "./tracker.css";
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa";
import ExerciseDisplay from "../exerciseDisplay/ExerciseDisplay";

const Tracker = () => {
  const {
    selectedDate,
    handleDateChange,
    handleWeekSelection,
    handleDateSelection,
    filteredWorkouts,
    calculateProgress,
    handleProgressSelection,
    weeklyProgressSelected,
    progressData,
    dateSelected,
    weekSelected,
    handleReturnClick,
    setViewData,
    setInsertData
  } = useWorkout();

  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(0);

const handleViewData = () => {
setInsertData(true)
    setViewData(false)
}

  const progressDataLength = progressData.length;

  const nextExercise = () => {
    // Increment the index, and loop back to 0 if at the end
    setSelectedExerciseIndex((prevIndex) => (prevIndex + 1) % progressDataLength);
  };

  const prevExercise = () => {
    // Decrement the index, and loop to the end if at the beginning
    setSelectedExerciseIndex((prevIndex) => (prevIndex - 1 + progressDataLength) % progressDataLength);
  };

  const trackerText = 
  dateSelected ? 'Select which day you want to view' : 
  weekSelected ? 'Select the week you want to view' :
  weeklyProgressSelected ? 'Select the week of progress you want to view' : 
  'Select a date, week or progress of a week'

  useEffect(()=> {
    console.log('filtered data:',filteredWorkouts)
  },[filteredWorkouts])
  

  return (
    <div className="tracker-container">
        <button onClick={handleViewData}
        className="tracker-button tracker-insert-button">
            Insert data
        </button>
      <p>{trackerText}</p>
      <div >
        <button className="tracker-button"
         onClick={handleDateSelection}>Single Day</button>
        <button className="tracker-button"
         onClick={handleWeekSelection}>Week</button>
        <button className="tracker-button"
        onClick={handleProgressSelection}>Progress</button>
      </div>

    
    <form className="tracker-form">
    <DatePicker
      placeholderText="Search for a date"
      selected={selectedDate}
      onChange={handleDateChange}
      className="date-picker"
    />
  </form>
    

  

      {filteredWorkouts.length > 0 &&   !weeklyProgressSelected  ?(
       <div>

        {dateSelected ? (
          <h2>Training on {selectedDate.toString()}</h2>
        ) :(
          <h2>Training during the week of {selectedDate.toString}</h2>
        )}
       
       <button onClick={handleReturnClick}
       className='tracker-button'
       >Back</button>



       <ExerciseDisplay
       workoutData={filteredWorkouts}
       />
        
        {/* <div className="workout-boxes">
         
          {filteredWorkouts.map((workout, index) => (
            <div key={index} className="exercise-date">
                <h2>
                {workout.date.toDateString()}
                </h2>
              
              <div className="exercise-boxes">
                
              {workout.exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex} className="exercise-box">
                  <strong>Exercise:</strong> {exercise.name}
                  {exercise.sets.map((set, setIndex) => (
                    <div key={setIndex}>
                      <strong>Set {setIndex + 1}:</strong> Weight: {set.weight}, Reps: {set.reps}
                    </div>
                  ))}
                </div>
              ))}
              </div>
              
            </div>
            
          ))}
        </div> */}
        </div>
      ) : dateSelected ? (
        <p>No workout done on this day</p>
      ) : null}

      {/* Render progress data */}

      {weeklyProgressSelected && (
      <div className="weekly-progress-container">

        <button onClick={handleReturnClick}
        className="tracker-button">Return</button>

        <div className="progress-nav">
            
        <button className="progress-button"
        onClick={prevExercise} disabled={progressDataLength <= 1 || selectedExerciseIndex === 0}>
          <FaArrowLeft/>
        </button>

        <h2>Weekly Progress</h2>

        <button className="progress-button"
        onClick={nextExercise} disabled={progressDataLength <= 1 || selectedExerciseIndex === progressDataLength - 1}>
          <FaArrowRight/>
        </button>
            </div>

      
       
<div className="tracker-progress-boxes">
    
{progressData.map((exercise, index) => (
      // Only display the selected exercise
      (index === selectedExerciseIndex && (
        <div key={exercise.name} className="exercise-progress">
          <h3>{exercise.name}</h3>

<div className="workout-progress-boxes">

          {exercise.workouts.map((workout) => (
            <div key={workout.date} className="workout-progress">
              <p>Date: {workout.date.toLocaleDateString()}</p>

              {workout.sets.map((set, setIndex) => (
                <div key={setIndex} style={{ marginBottom: '0.52rem' }}>
                  Set {setIndex + 1}: {set.weight}lbs for {set.reps}
                </div>
              ))}

              <p>Total weight: {workout.totalWeight}lbs</p>
              
            </div>
          ))}
              </div>
        </div>
      ))
    ))}
        </div>


  
      </div>
    )}

      
    </div>
  );
};

export default Tracker;
