!function(){"use strict";var e={830:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(307),o=window.wp.primitives,i=(0,r.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(o.Path,{d:"M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z"}))},518:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(307),o=window.wp.components,i=window.wp.blockEditor,a=n(830);window.wp.i18n;var l=function(e){const{attributes:{AccordationDate:t,clicked:n,columns:l},setAttributes:s}=e,c=(0,i.useBlockProps)(),d=t.map((e=>{const t=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}(),n={width:10*e.skills+"%",height:"100%",backgroundColor:t,borderRadius:"5px",transition:"width 0.5s ease-in-out"},o={width:100-10*e.skills+"%",height:"100%",backgroundColor:"white",borderRadius:"5px",position:"absolute",top:"0",right:"0"};return(0,r.createElement)("div",{style:{width:"100%",height:"20px",backgroundColor:"lightgray",borderRadius:"5px",border:"2px solid green",position:"relative",marginBottom:"20px"},key:e.title},(0,r.createElement)("em",{style:{position:"absolute",top:"0",left:"50%",transform:"translate(-50%, 0)",zIndex:2}},e.title),(0,r.createElement)("div",{style:n}," "),(0,r.createElement)("div",{style:o}," ",(0,r.createElement)("p",{style:{position:"absolute",right:"10px",top:"0"}},(e=>{const t=10*e;let n;return n=t<20?"noob":t<40?"beginner":t<60?"Intermediate":t<80?"Advanced":"Expert",(0,r.createElement)(r.Fragment,null,n,"(",t,"%)")})(e.skills))))}));return(0,r.createElement)("div",c,(0,r.createElement)(i.InspectorControls,null,(0,r.createElement)("div",{id:"gutenpride-controls"},(0,r.createElement)(o.Panel,{header:"Accordation Date"},(0,r.createElement)(o.Button,{variant:"primary",onClick:()=>{let e=[...t];return e.push({title:"New Row",skills:0}),s({AccordationDate:e})}},"Add new items"),t.map(((n,i)=>(0,r.createElement)(r.Fragment,{key:i},(0,r.createElement)(o.PanelBody,{title:n.title,icon:a.Z,initialOpen:!0,onToggle:()=>function(e){return s((n=>({...t[e].stateOpen=!n[e].stateOpen})))}(i),style:{paddingBottom:"20px"}},(0,r.createElement)("div",{style:{paddingBottom:"50px"}}),(0,r.createElement)(o.TextControl,{label:"Title",type:"string",value:n.title,onChange:e=>function(e,n){return s({...t[n].title=e})}(e,i)}),(0,r.createElement)(o.RangeControl,{label:"Columns",value:n.skills,onChange:e=>function(e,n){return s({...t[n].skills=e})}(e,i),min:0,max:10}),(0,r.createElement)(o.Button,{isSmall:!0,variant:"secondary",onClick:()=>function(n){const r=t.filter((function(e,t){return t!=n}));e.setAttributes({AccordationDate:r})}(i)},"Delete")),(0,r.createElement)("div",{style:{paddingBottom:"50px"}}))))))),d)}},307:function(e){e.exports=window.wp.element}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=n(518),t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"effective-pluggin/effective-percentbar","version":"0.1.0","title":"Effective-Percent-Bar","category":"Effective Cards","icon":"testimonial","description":"mój pierwszy plugin w react","attributes":{"clicked":{"type":"boolean","default":"false"},"AccordationDate":{"type":"array","default":[{"title":"React","skills":10}]}}}');const{name:r,...o}=t;wp.blocks.registerBlockType(r,{...o,edit:e.Z,save:e=>null})}()}();