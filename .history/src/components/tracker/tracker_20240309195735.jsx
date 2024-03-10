import React from "react";
import './tracker.css'


const Tracker = () => {


    return (
        <div className="tracker-container">

            <form>
                <input placeholder="search for a date"
                />
            </form>

            <button>
                Add new
            </button>

                    <div className="workout-boxes">

                    </div>
        </div>
    )
}


export default Tracker