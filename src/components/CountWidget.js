import React from "react";

let CountWidget = ({count, handleClick}) => (
    <div>
        <p>Redux Count: {count}</p>
        <button onClick={handleClick}>Increment Count</button>
    </div>
);

export default CountWidget;