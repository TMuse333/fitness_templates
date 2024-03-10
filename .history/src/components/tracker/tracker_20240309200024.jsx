import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './tracker.css';

const Tracker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Add logic to fetch and display workout plans for the selected date
  };

  return (
    <div className="tracker-container">
      <form>
        <DatePicker
          placeholderText="Search for a date"
          selected={selectedDate}
          onChange={handleDateChange}
        />
      </form>

      <button>
        Add new workout plan
      </button>

      <div className="workout-boxes">
        {/* Display workout plans for the selected date */}
      </div>
    </div>
  );
};

export default Tracker;
