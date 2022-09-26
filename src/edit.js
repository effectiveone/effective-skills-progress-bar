import {TextControl, Flex, FlexBlock, FlexItem, Button, Icon, PanelBody, PanelRow, ColorPicker} from "@wordpress/components"
import {InspectorControls, BlockControls, AlignmentToolbar} from "@wordpress/block-editor"
import {ChromePicker} from "react-color"
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import styled from 'styled-components';



const FeaturesGalleryWrapper = styled.div`
display: flex;
/* align-items: center; */
flex-direction: column;
/* justify-content: center; */
position: relative;
  /* max-width: 130em;
  width: 100%; */
  margin: 0 auto;
  padding: 0 2rem;
`;

const GalleryWrapper = styled.div`
display: flex;
align-items: flex-start;
margin-top: 4rem;
flex-direction: column;
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
  /* align-items: center;
  justify-content: center; */
  /* position: relative;
  height: 100vh; */
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
			background,
			titleColor,
			content,
			title,
			bgColor,
      currentTab,
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

  function handleTabClick(idx) {
    setAttributes({ currentTab: idx});
  }

  const toggle = index => {
    if (clicked === index) {
      return  setAttributes({ clicked: null})
    }
    setAttributes({ clicked: index})
  };

  function updateTitle(event, ind) {
    // var func = JSON.parse(JSON.stringify(attributes.AccordationDate));
    // AccordationDate[ind].title = event.target.value;
return (
prev => (
  setAttributes({AccordationDate: [...prev, {
  ...prev,
 AccordationDate[ind].title: event.target.value }] } )))
}



  return (
    <div {...blockProps}>
    <InspectorControls>
      <div id="gutenpride-controls">
{AccordationDate.map((param, ind)=>{
  return(
    <>
    <input value={param.title} onChange={(event) => updateTitle(event, ind)}
  />
    </>
  )
})}





      <fieldset>
          <legend className="blocks-base-control__label">
            {__("Background color", "gutenpride")}
          </legend>
          <PanelBody
            tittle="Front: background, color, title"
            initialOpen={true}
          >

            Kolor tła{" "}
            <ChromePicker
              color={background}
              onChangeComplete={(x) =>
                props.setAttributes({ background: x.hex })
              }
              disableAlpha={false}
            />
                        </PanelBody>

    </fieldset>
        <fieldset>
          <legend className="blocks-base-control__label">
            {__("Background color", "gutenpride")}
          </legend>
          <PanelBody
            tittle="Front: background, color, title"
            initialOpen={true}
          >

            Kolor tytułu{" "}
            <ChromePicker
              color={titleColor}
              onChangeComplete={(x) =>
                props.setAttributes({ titleColor: x.hex })
              }
              disableAlpha={false}
            />
            tytuł <input onChange={onChangeTitle} value={title} />
          </PanelBody>
        </fieldset>
        <fieldset>
          <legend className="blocks-base-control__label">
            {__("Card Content: Color i content", "gutenpride")}
          </legend>
          <PanelBody tittle="Background Color" initialOpen={true}>

            Kolor opisu{" "}
            <ChromePicker
              color={bgColor}
              onChangeComplete={(x) =>
                props.setAttributes({ bgColor: x.hex })
              }
              disableAlpha={true}
            />
            Opis <input onChange={onChangeContent} value={content} />
          </PanelBody>
        </fieldset>
      </div>
    </InspectorControls>
    

    <FeaturesGalleryWrapper>
    <GalleryWrapper>
      <TabsContainer><AccordionSection>
  <Containers>
{AccordationDate.map((data, index)=> {
return(
  <>
  <Wrap onClick={() => toggle(index)} key={index}>
    <h1 style={{fontSize: "16px"}}>{data.title}</h1>
  </Wrap>
  {clicked === index ? (
    <Dropdown >
      <p style={{fontSize: "14px"}}>{data.description}</p>
    </Dropdown>
  ) : null}
</>)})}
 </Containers>
</AccordionSection></TabsContainer>
{AccordationDate.map((data, index)=> {
  return(
    <>
       {clicked === index ? (
    <img src={data.imageUrl} width="100px" height="200px" />  ) : null}
    </>)})}
    </GalleryWrapper>
  </FeaturesGalleryWrapper>

   
 </div>
)}


export default Edit

