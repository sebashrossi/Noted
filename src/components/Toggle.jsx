import React, { useEffect, useState } from "react";
import { setTheme } from "../themes";

function Toggle() {
  const [togClass, setTogClass] = useState("dark");
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("light");
    }
  }, [theme]);

  return (
    <div className="themes">
      <div className="toggle-btn" id="_1st-toggle-btn">
        {togClass === "light" ? (
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            onClick={handleOnClick}
            checked
          />
        ) : (
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            onClick={handleOnClick}
          />
        )}
        <span></span>
      </div>
    </div>
  );
}

export default Toggle;