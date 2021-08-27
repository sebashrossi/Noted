import React from "react";

const DisplayDate = () => {
    const day = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return (
        <div className="date-container">
            <div className="day">
                <h1>{day.getDate()}</h1>
            </div>
            <div>
                <p>{months[day.getMonth()]}</p>
                <p>{day.getFullYear()}</p>
            </div>
        </div>
    )
 
}

export default DisplayDate;