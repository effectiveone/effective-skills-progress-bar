// import "./index.scss"
import edit  from './edit';
import json from './block.json';



(function  (){
  let locked = false

wp.data.subscribe(function(){
const results = wp.data.select("core/block-editor").getBlocks().filter(function(block){
  return block.name == "effective-pluggin/effective-accordation" && block.attributes.correctAnswer == undefined
})

if (results.length && locked == false) {
  locked = true
  wp.data.dispatch("core/editor").lockPostSaving("noanswer")
}

if (!results.length && locked ) {
  locked = false
  wp.data.dispatch("core/editor").unlockPostSaving("noanswer")
}
})
})()

const { name, ...settings } = json;

wp.blocks.registerBlockType(name, {
	...settings,
  edit,
  save: () => null
})
