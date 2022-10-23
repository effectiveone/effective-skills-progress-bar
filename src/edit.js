import {TextControl, TextareaControl, Flex, FlexBlock, FlexItem, Panel,  Button, Icon, PanelBody, PanelRow, ColorPalette} from "@wordpress/components"
import {InspectorControls, BlockControls, AlignmentToolbar} from "@wordpress/block-editor"
import { more } from '@wordpress/icons';
import {ChromePicker, TwitterPicker} from "react-color"
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import styled from 'styled-components';
import { Fragment } from '@wordpress/element';


const FeaturesGalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;

`;

const GalleryWrapper = styled.div`

background-color: "red";
`;


const TabsContainer = styled.div`
flex: 1;
margin-right: 4rem;

& > *:not(:first-child) {
  margin-top: 2rem;
}
`;


const AccordionSection = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  background: #fff;
`;





const Containers = styled.div`
  position: absolute;
  top: 100%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 16px;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 14px;
  }
`;

function Edit(props) {
  const {
		attributes: {
      AccordationDate,
      clicked
		},
		setAttributes,
	} = props;
	const blockProps = useBlockProps();
	const onChangeContent = (event) => {
		setAttributes({ content: event.target.value });
	};
	const onChangeTitle = (event) => {
		setAttributes({ title: event.target.value });
	};


  const toggle = index => {
    if (clicked === index) {
      return  setAttributes({ clicked: null})
    }
    setAttributes({ clicked: index})
  };

  function updateTitle(event, ind) {
return (
  setAttributes({
 ...AccordationDate[ind].title = event }))
}


function updateDescription(event, ind) {
  return (
    setAttributes({
   ...AccordationDate[ind].description = event }))
  }


  function updateImage(event, ind) {
    return (
      setAttributes({
     ...AccordationDate[ind].imageUrl = event }))
    }


  function updateBaseColor(event, ind) {
    return (
      setAttributes({
     ...AccordationDate[ind].baseColor = event.hex }))
    }

    function updateTitleColor(event, ind) {
      return (
        setAttributes({
       ...AccordationDate[ind].titleColor = event.hex }))
      }

      function updateDescColor(event, ind) {
        return (
          setAttributes({
         ...AccordationDate[ind].descColor = event.hex }))
        }

    function updateSecondColor(event, ind) {
      return (
        setAttributes({
       ...AccordationDate[ind].secondColor = event.hex }))
      }


      function toggleState(ind) {
        return (
          setAttributes(( previousState ) => ( {
         ...AccordationDate[ind].stateOpen = ! previousState[ind].stateOpen })))
        }

const addNewAttribute = () => {
let newAccordationDate = [...AccordationDate]
newAccordationDate.push({
    title: "New Row",
    description: "New Description",
    imageUrl: "",
    baseColor: "",
    secondColor: ""
  })

  return(
  setAttributes({AccordationDate: newAccordationDate
})
  )
}

function deleteRow (indexToDelate){
  const newAnswers = AccordationDate.filter(function(x, index){
return index != indexToDelate
  })
  props.setAttributes({AccordationDate: newAnswers})
 }


  return (
    <div {...blockProps}>
    
    <InspectorControls>

      <div id="gutenpride-controls">

    

      <Panel header="Accordation Date">
      <Button variant="primary" onClick={ addNewAttribute}>Add new items</Button>


{AccordationDate.map((param, ind)=>{
  return(
    <Fragment key={ind}>
      <PanelBody title={param.title} icon={ more } initialOpen={ true }
              onToggle={ () => toggleState(ind) } style={{paddingBottom: "20px"}}
      >
       <div style={{paddingBottom: "50px"}}></div>
    <TextControl label="Title" type="string" value={param.title} onChange={(event) => updateTitle(event, ind)}
  />
  <TextareaControl label="Description:" value={param.description} onChange={(event) => updateDescription(event, ind)}
  />
  <TextControl label="Image Url:" type="url" value={param.imageUrl} onChange={(event) => updateImage(event, ind)}
  /><br/>
Title's background color 
<TwitterPicker
              color={param.baseColor}
              onChangeComplete={(event) => updateBaseColor(event, ind)
              }
              disableAlpha={false}
            />

 Color of title's font 
<TwitterPicker
              color={param.titleColor}
              onChangeComplete={(event) => updateTitleColor(event, ind)
              }
              disableAlpha={false}
            />
  <br/>
  Description's background color
  <TwitterPicker
              color={param.secondColor}
              onChangeComplete={(event) => updateSecondColor(event, ind)
              }
              disableAlpha={false}
            />
  <br/>
 Color of description font
  <TwitterPicker
              color={param.descColor}
              onChangeComplete={(event) => updateDescColor(event, ind)
              }
              disableAlpha={false}
            />
  <br/>
  <Button isSmall variant="secondary" onClick={()=> deleteRow(ind)}>Delete</Button>
  </PanelBody> 
<div style={{paddingBottom: "50px"}}></div>
    </Fragment>
  )
})}
</Panel>


      </div>
    </InspectorControls>
    

    <FeaturesGalleryWrapper >
        <div >
      <TabsContainer><AccordionSection>
  <Containers>
{AccordationDate.map((data, index)=> {
return (
  <>
    <Wrap
      onClick={() => toggle(index)}
      key={index}
      style={{ backgroundColor: `${data.baseColor}` }}
    >
      <h1 style={{ fontSize: "16px", color: `${data.titleColor}` }}>
        {data.title}
      </h1>
    </Wrap>
    {clicked === index ? (
      <Dropdown style={{ backgroundColor: `${data.secondColor}` }}>
        <p
          style={{
            fontSize: "14px",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "15px",
            paddingBottom: "15px",
            color: `${data.descColor}`,
          }}
        >
          {data.description}
        </p>
      </Dropdown>
    ) : null}
  </>
);})}
 </Containers>
</AccordionSection></TabsContainer></div>
<div >
{AccordationDate.map((data, index)=> {
  return(
    <>
       {clicked === index ? (
    <img src={data.imageUrl} width="300px" height="600px"  />  ) : null}
    </>)})}</div>
  </FeaturesGalleryWrapper>

   
 </div>
)}


export default Edit

