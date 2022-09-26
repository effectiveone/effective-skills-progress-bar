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
      'render_callback' => array($this, 'theHTML')
    ));
  }

  function theHTML($attributes) {
    if(!is_admin()){
    wp_enqueue_script( 'attentionFrontend', plugin_dir_url(__FILE__) . 'build/frontend.js', array(
      'wp-element'
    ) );
    wp_enqueue_style('attentionFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
      }  ob_start(); ?>

<div class="paying-attention-update-me"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>

<?php return ob_get_clean();
  }
}



$EffectiveAccordation = new EffectiveAccordation();
