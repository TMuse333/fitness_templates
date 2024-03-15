import React,{useState} from "react";
import { useWorkout } from "../../context/context";
import './exerciseDisplay.css'

const ExerciseDisplay = ({ workoutData }) => {


const {weekSelected} = useWorkout()

const [isHovered, setIsHovered] = useState(null)

const [isClicked, setIsClicked] = useState([])

const handleItemClick = (index) => {

  const isAlreadyClicked = isClicked.includes(index);


  if (isAlreadyClicked) {
    setIsClicked(isClicked.filter((item) => item !== index));
  } else {
    // If the item is not clicked, add it to the array
    setIsClicked([...isClicked, index]);
  }
};


const style = (index) => {
  const selected = index === isHovered;

  return {
    transform: selected ? 'scale(1.2)' : 'scale(1)',
    backgroundColor: selected ? '#0080ff' : 'transparent', // Slightly darker shade of blue
    transition: 'all 0.3s ease', // Adding transition to all properties
  }
  
}

const handleMouseEnter = (index) => {
  setIsHovered(index)
}

const handleMouseLeave = (index) => {
  setIsHovered(null)
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}

  return (
    <div className="exercise-display-container">
  
  {workoutData.map((workout, index) => (
  <div key={index} className="exercise-display-workout">
    {weekSelected && <h2 className="exercise-display-date">Date: {formatDate(workout.date)}</h2>}
    
      <ul className="exercise-display-list">
        <li><strong>Exercise</strong></li>
        {workout.exercises.map((exercise,index) => (
          <li style={style(index)}
          onMouseEnter={()=>handleMouseEnter(index)}
          onMouseLeave={()=>handleMouseLeave()}
          key={index}>{exercise.name}</li>
        ))}
        </ul>
   
  </div>
))}


    </div>
  );
};

export default ExerciseDisplay;
