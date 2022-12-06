import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const navigate = useNavigate();
  const userInputRef = useRef();

  const handleClick = () => {
    let checkInput = +userInputRef.current.value;
    console.log(checkInput);

    if (Number.isFinite(checkInput)) {
      console.log("number");
      navigate(`/details/${checkInput}`);
    } else {
      console.log("Not a number");
    }
  };

  return (
    <div className="col-container">
      <h1>Home</h1>
      <input type="text" ref={userInputRef} />
      <button onClick={handleClick}>Leave</button>
    </div>
  );
}

export default HomeScreen