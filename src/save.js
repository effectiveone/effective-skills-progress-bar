import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components';


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

export default function Save(props) {
  const {
		attributes: {
      AccordationDate		}
	} = props;
console.log("props", props)
  console.log("AccordationDate", AccordationDate)

  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      return  setClicked(null)
    }
    setClicked(index)
  };

  return (
 <div className="paying-attention-frontend">

ooo
      <FeaturesGalleryWrapper>
         <div >
      <TabsContainer><AccordionSection>
  <Containers>
 {AccordationDate.map((data, index)=> {
return (
  <React.Fragment key={index}>
    <Wrap
      onClick={() => toggle(index)}
      key={index}
      style={{ backgroundColor: `${data.baseColor}` }}
    >
      <h1 style={{ fontSize: "16px", color: `${data.titleColor}` }}>
        {data.title}
      </h1>
    </Wrap>
    {`${clicked}` === index ? (
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
  </React.Fragment>
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
  )
}



