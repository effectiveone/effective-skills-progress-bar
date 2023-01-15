import {
  TextControl,
  RangeControl,
  Panel,
  Button,
  PanelBody,
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { more } from "@wordpress/icons";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";

function Edit(props) {
  const {
    attributes: { AccordationDate, clicked, columns },
    setAttributes,
  } = props;
  const blockProps = useBlockProps();

  function updateTitle(event, ind) {
    return setAttributes({
      ...(AccordationDate[ind].title = event),
    });
  }

  function updateSkills(event, ind) {
    return setAttributes({
      ...(AccordationDate[ind].skills = event),
    });
  }

  function toggleState(ind) {
    return setAttributes((previousState) => ({
      ...(AccordationDate[ind].stateOpen = !previousState[ind].stateOpen),
    }));
  }

  const addNewAttribute = () => {
    let newAccordationDate = [...AccordationDate];
    newAccordationDate.push({
      title: "New Row",
      skills: 0,
    });

    return setAttributes({ AccordationDate: newAccordationDate });
  };

  function deleteRow(indexToDelate) {
    const newAnswers = AccordationDate.filter(function (x, index) {
      return index != indexToDelate;
    });
    props.setAttributes({ AccordationDate: newAnswers });
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function determineSkillLevel(value) {
    if (value < 20) {
      return "Noob";
    } else if (value < 40) {
      return "Beginner";
    } else if (value < 60) {
      return "Intermediate";
    } else if (value < 80) {
      return "Advanced";
    } else {
      return "Expert";
    }
  }

  const SkillLevel = (props) => {
    const value = props * 10;
    const level = determineSkillLevel(value);
    return (
      <>
        {level}({value}%)
      </>
    );
  };

  const displayProgressBar = AccordationDate.map((skills) => {
    const randomBackgroundColor = getRandomColor();
    const containerStyles = {
      width: "100%",
      height: "20px",
      backgroundColor: "lightgray",
      borderRadius: "5px",
      border: "2px solid green",
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
  });

  return (
    <div {...blockProps}>
      <InspectorControls>
        <div id="gutenpride-controls">
          <Panel header="Accordation Date">
            <Button variant="primary" onClick={addNewAttribute}>
              Add new items
            </Button>

            {AccordationDate.map((param, ind) => {
              return (
                <Fragment key={ind}>
                  <PanelBody
                    title={param.title}
                    icon={more}
                    initialOpen={true}
                    onToggle={() => toggleState(ind)}
                    style={{ paddingBottom: "20px" }}
                  >
                    <div style={{ paddingBottom: "50px" }}></div>
                    <TextControl
                      label="Title"
                      type="string"
                      value={param.title}
                      onChange={(event) => updateTitle(event, ind)}
                    />
                    <RangeControl
                      label="Columns"
                      value={param.skills}
                      onChange={(event) => updateSkills(event, ind)}
                      min={0}
                      max={10}
                    />
                    <Button
                      isSmall
                      variant="secondary"
                      onClick={() => deleteRow(ind)}
                    >
                      Delete
                    </Button>
                  </PanelBody>
                  <div style={{ paddingBottom: "50px" }}></div>
                </Fragment>
              );
            })}
          </Panel>
        </div>
      </InspectorControls>

      {displayProgressBar}
    </div>
  );
}

export default Edit;
