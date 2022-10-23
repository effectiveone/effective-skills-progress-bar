<div class="effective-attention-update-me"><pre style="display: none;" <?php echo get_block_wrapper_attributes(); ?>><?php echo wp_json_encode($blockattributes) ?></pre></div>
<div class="effective-attention-update-me"><pre style="display: none;" <?php echo get_block_wrapper_attributes(); ?>><?php echo wp_json_encode($blockattributes) ?></pre></div>
//     if(!is_admin()){
//     wp_enqueue_script( 'attentionFrontend', plugin_dir_url(__FILE__) . 'build/frontend.js', array(
//       'wp-blocks', 'wp-element', 'wp-editor'    ) );
//     wp_enqueue_style('attentionFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
//       } 
      
      
//  ob_start(); ?>
<!-- // <div class="effective-attention-update-me" <?php echo get_block_wrapper_attributes(); ?>>
// <pre style="display: block;"><?php echo wp_json_encode($blockattributes) ?></pre>
// </div> -->


'attributes' => [
    'clicked' => [
      'type' => 'boolean',
      'default' => false
    ],
    'AccordationDate' => [
      'type' => 'array',
      'default' => [
        [
          'title' =>  'Find relevant media contacts - multiline title',
          'description' =>
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.',
          'imageUrl' => 'http://effectivewebsite.local/wp-content/uploads/2022/09/P1015596-scaled.jpeg',
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
          'imageUrl' => 'http://effectivewebsite.local/wp-content/uploads/2022/09/sports-tools-scaled.jpg',
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
          'imageUrl' => 'http://effectivewebsite.local/wp-content/uploads/2022/09/tlotlot.jpg',
          'baseColor' => '#947979',
          'titleColor' => '#FFFFFF',
          'secondColor' => '#645252',
          'descColor' => '#000',
          'stateOpen' => false
          ]]
      
    ]
  ]