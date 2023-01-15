import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Frontend = (props) => {
  const [accordationDate, setAccordationDate] = useState(props.myProp || []);
  useEffect(() => {
    const myArray = Object.entries(props).map(([key, value]) => value);

    setAccordationDate(myArray);
  }, [props.myProp]);

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const SkillLevel = (props) => {
    const value = props * 10;
    let level;
    if (value < 20) {
      level = "Noob";
    } else if (value < 40) {
      level = "Beginner";
    } else if (value < 60) {
      level = "Intermediate";
    } else if (value < 80) {
      level = "Advanced";
    } else {
      level = "Expert";
    }
    return (
      <>
        {level}({value}%)
      </>
    );
  };
  console.log("accordationDate", accordationDate);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={{ color: "red" }}>Moje skille</h2>
        {accordationDate?.map((skills) => {
          const randomBackgroundColor = getRandomColor();
          const containerStyles = {
            width: "100%",
            height: "20px",
            backgroundColor: "lightgray",
            borderRadius: "5px",
            border: "2px solid black",
            position: "relative",
            marginBottom: "20px",
          };

          const barStyles = {
            width: skills.skills * 10 + "%",
            height: "100%",
            backgroundColor: randomBackgroundColor,
            borderRadius: "5px",
            transition: "width 0.5s ease-in-out",
          };

          const restStyles = {
            width: 100 - skills.skills * 10 + "%",
            height: "100%",
            backgroundColor: "white",
            borderRadius: "5px",
            position: "absolute",
            top: "0",
            right: "0",
          };
          return (
            <div style={containerStyles} key={skills.title}>
              <em
                style={{
                  position: "absolute",
                  top: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  zIndex: 2,
                }}
              >
                {skills.title}
              </em>
              <div style={barStyles}> </div>
              <div style={restStyles}>
                {" "}
                <p style={{ position: "absolute", right: "10px", top: "0" }}>
                  {SkillLevel(skills.skills)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const divsToUpdate = document.querySelectorAll(
  ".effective-progress-bar-update-me"
);

divsToUpdate?.forEach((div) => {
  // const data = JSON.parse(div.getAttribute("data-attributes"));
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<Frontend {...data} />, div);
  div.classList.remove("effective-progress-bar-update-me");
});
