<?php

/*
  Plugin Name: Effective-Percent-Bar
  Description: This pluggin was created to display programming skills in graphic bar. 
  Version: 1.0
  Author: Konrad Gruca
*/



if (!defined('ABSPATH')) exit; // Exit if accessed directly

class EffectivePercentBar
{
  function __construct()
  {
    add_action('init', array($this, 'adminAssets'));
  }

  function adminAssets()
  {
    wp_register_style('effective-percentbar-style', plugin_dir_url(__FILE__) . 'build/index.css');
    wp_register_script('effective-percentbar-script', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    register_block_type('effective-pluggin/effective-percentbar', array(
      'editor_script' => 'effective-percentbar-script',
      'editor_style' => 'effective-percentbar-style',
      'render_callback' => array($this, 'effectivepercentbarfunction')
    ));
  }

  function effectivepercentbarfunction($blockattributes, $content)
  {
    if (!is_admin()) {
      wp_enqueue_script('FrontEndBarScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'), '1.0.0', true);
      wp_enqueue_style('FrontEndBarStyle', plugin_dir_url(__FILE__) . 'build/frontend.css');

      if (isset($blockattributes['AccordationDate'])) {
        $attribute = $blockattributes['AccordationDate'];
      } else {
        $attribute =  [
          [
            'title' =>  'React',
            'skills' => 10,
          ],
          [
            'title' =>  'PHP',
            'skills' => 3,
          ],
        ];
      }
    }




    ob_start(); ?>
    <div class="effective-progress-bar-update-me">
      <pre style="display: block;"><?php echo wp_json_encode($attribute) ?></pre>
    </div>
<?php return ob_get_clean();
  }
}



$EffectivePercentBar = new EffectivePercentBar();
