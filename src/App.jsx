import { useState } from "react";
import "./App.css";

function App() {
  const [eventMessage, setEventMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEventMessage("Form Submitted Successfully");
    alert("Form Submitted Successfully");
  };

  const handleClick = () => {
    setEventMessage("Button Clicked");
    alert("You Clicked Button");
    console.log("Button Clicked");
  };

  const handleMouseHover = () => {
    setEventMessage("Mouse Hovering!");
    setIsHovered(true);
    console.log("Mouse Hovering");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      <h1>React Event Demo</h1>
      <div className="section">
        <button
          className={`btn ${isHovered ? "hovered" : ""}`}
          onMouseOver={handleMouseHover}
          onMouseLeave={handleMouseLeave}
        >
          Hover Over Me
        </button>
      </div>

      <div className="section">
        <form onSubmit={handleSubmit}>
          <input
            className="input-box"
            type="text"
            placeholder="Enter text to submit"
          />
          <button type="submit" className="btn submit-btn">
            Submit
          </button>
        </form>
      </div>

      <div className="section">
        <button className="btn" onClick={handleClick}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
