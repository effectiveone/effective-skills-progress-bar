import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {ReactHeight} from 'react-height';
import "./frontend.style.scss"

const divsToUpdate = document.querySelectorAll(".effective-attention-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
    ReactDOM.render(<Frontend {...data} />, div)
    div.classList.remove("effective-attention-update-me")
})

function Frontend(props) {
  // const {} = attributes;
  console.log("props", props)
const [value, setValue] = useState([])
  const [czlicked, setCzlicked] = useState(0)
const [childHeight, setChildHeight] = useState()
const [childHeightImage, setChildHeightImage] = useState()
const [parentDivHeight, setParentDivHeight] = useState()

useEffect(() => {
 var array4 = Object.values(props);
  setValue(array4)

}, [props])

useEffect(()=>{
  console.log("childHeight", childHeight)
  console.log("childHeightImage", childHeightImage)
  
  if(childHeight  > childHeightImage){  setParentDivHeight(childHeight )}
  else { setParentDivHeight(childHeightImage)}
  console.log("parentDivHeight", parentDivHeight)

},[childHeight, childHeightImage, parentDivHeight, czlicked])

  const toggle = index => {
    if (czlicked === index) {
      return  setCzlicked(null)
    }
    setCzlicked(index)
  };


  return (
<>  
       <div className="FeaturesGalleryWrapper" style={{height: parentDivHeight, paddingBottom: "100px"}}>
         <div >
      <div className="TabsContainer" ><div className="AccordionSection" >
  <div className="Containers">
  <ReactHeight onHeightReady={height => setChildHeight(height)}>
 {value.map((data, index)=> {
return (
  <React.Fragment key={index}>
    <div className="Wrap"
      onClick={() => toggle(index)}
      key={index}
      style={{ backgroundColor: `${data.baseColor}` }}
    >
      <h1 style={{ fontSize: "16px", color: `${data.titleColor}` }}>
        {data.title}
      </h1>
    </div>
    {czlicked === index ? (
      <div className="Dropdown"
      
      style={{ backgroundColor: `${data.secondColor}` }}>
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
      </div>
    ) : null}
  </React.Fragment>
);})}</ReactHeight>

 </div>
</div></div>
</div>
<div className="imageWraper">
<ReactHeight onHeightReady={height => setChildHeightImage(height)}>

{value.map((data, index)=> {
  return(
    <>
       {czlicked === index ? (
      
       <React.Fragment key={index}>
    {data?.imageUrl && (  <img src={data?.imageUrl} width="300px" height="600px"  />)}
</React.Fragment> 
) : null}
    </>)})}
    </ReactHeight>
    </div>
  </div> 

 </>
  )
}


