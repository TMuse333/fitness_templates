const ExerciseDisplay = ({ workoutData }) => {
  const { weekSelected } = useWorkout();

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const style = (index) => {
    const selected = index === hoveredIndex;

    return {
      transform: selected ? "scale(1.2)" : "scale(1)",
      backgroundColor: selected ? "#0080ff" : "transparent",
      transition: "all 0.3s ease",
    };
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleItemClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  return (
    <div className="exercise-display-container">
      {workoutData.map((workout, workoutIndex) => (
        <div key={workoutIndex} className="exercise-display-workout">
          {weekSelected && (
            <h2 className="exercise-display-date">
              Date: {formatDate(workout.date)}
            </h2>
          )}
          <ul className="exercise-display-list">
            <li>
              <strong>Exercise</strong>
            </li>
            {workout.exercises.map((exercise, exerciseIndex) => (
              <React.Fragment key={exerciseIndex}>
                <li
                  className="exercise-data"
                  style={style(exerciseIndex)}
                  onMouseEnter={() => handleMouseEnter(exerciseIndex)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleItemClick(exerciseIndex)}
                >
                  {exercise.name}
                </li>
                {expandedIndex === exerciseIndex && (
                  <div className="exercise-set-details">
                    <strong>Sets:</strong>
                    <ul>
                      {exercise.sets.map((set, setIndex) => (
                        <li key={setIndex}>
                          Weight: {set.weight}, Reps: {set.reps}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
