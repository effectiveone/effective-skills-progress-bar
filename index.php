<?php

/*
  Plugin Name: Effective-Accordation
  Description: This pluggin was created to display power of dynamic plugin and beauty of accordation connected to gallery image. 
  Version: 1.0
  Author: Konrad Gruca
*/



if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class EffectiveAccordation {
  function __construct() {
    add_action('init', array($this, 'adminAssets'));
  }

  function adminAssets() {
    wp_register_style('effective-accordation-style', plugin_dir_url(__FILE__) . 'build/index.css');
    wp_register_script('effective-accordation-script', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    register_block_type('effective-pluggin/effective-accordation', array(
      'editor_script' => 'effective-accordation-script',
      'editor_style' => 'effective-accordation-style',
      'render_callback' => array($this, 'effectiveaccordationfunction')
    ));
  }

  function effectiveaccordationfunction($blockattributes, $content) {
if (!is_admin()) {
      wp_enqueue_script('boilerplateFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'), '1.0.0', true );
      wp_enqueue_style('boilerplateFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
    
if(isset($blockattributes['AccordationDate'])){
  $attribute = $blockattributes['AccordationDate'];
} else {
  $attribute =  [
      [
        'title' =>  'Find relevant media contacts - multiline title',
        'description' =>
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.',
        'imageUrl' => 'https://gruca.j.pl/wp-content/uploads/2022/09/laptop-gfebac6206_640.webp',
        'baseColor' => '#947979',
        'titleColor' => '#FFFFFF',
        'secondColor' => '#645252',
        'descColor' => '#000',
        'stateOpen' => true
      ],
        [
        'title' =>  'Another amazing feature',
        
        'description' =>
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.',
        'imageUrl' => 'https://gruca.j.pl/wp-content/uploads/2022/09/wordpress-g9cfa89648_640.webp',
        'baseColor' => '#947979',
        'titleColor' => '#FFFFFF',
        'secondColor' => '#645252',
        'descColor' => '#000',
        'stateOpen' => false

        ],
        [
        'title' => 'yet... another truly fascinating feature',
        'description' =>
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.',
        'imageUrl' => 'https://gruca.j.pl/wp-content/uploads/2022/09/blogging-gaaa8db9db_640.webp',
        'baseColor' => '#947979',
        'titleColor' => '#FFFFFF',
        'secondColor' => '#645252',
        'descColor' => '#000',
        'stateOpen' => false
        ]];
}   
    }



    
    ob_start(); ?>
<div  class="effective-attention-update-me">
<pre style="display: block;"><?php echo wp_json_encode($attribute) ?></pre>
 </div> 
     <?php return ob_get_clean();
    
  }

}



$EffectiveAccordation = new EffectiveAccordation();

