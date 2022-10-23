import edit  from './edit';
import json from './block.json';

const { name, ...settings } = json;

wp.blocks.registerBlockType(name, {
	...settings,
  edit,
  save: (props) => {return null} 
  }
)
