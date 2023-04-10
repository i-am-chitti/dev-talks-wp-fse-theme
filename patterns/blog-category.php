<?php
/**
 * Blog Category Section
 *
 * slug: blog-category
 * title: Blog Category Section
 * categories: dev-talks
 */

return array(
    'title'      =>__( 'Blog Category Section', 'dev-talks' ),
    'categories' => array( 'dev-talks' ),
    'content'    => '<!-- wp:spacer {"height":"50px"} -->
<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontSize":"30px","fontStyle":"normal","fontWeight":"600"}}} -->
<h3 class="has-text-align-center" style="font-size:30px;font-style:normal;font-weight:600">Most Popular Categories</h3>
<!-- /wp:heading -->

<!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide"><!-- wp:column {"width":"33.33%"} -->
<div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:image {"id":6,"width":373,"height":274,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="'.esc_url(get_template_directory_uri()) .'/assets/images/cat3.png" alt="" class="wp-image-6" width="373" height="274"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"textAlign":"center","level":4,"style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600"}}} -->
<h4 class="has-text-align-center" style="font-size:20px;font-style:normal;font-weight:600">Photography</h4>
<!-- /wp:heading --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"33.33%"} -->
<div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:image {"id":7,"width":374,"height":274,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="'.esc_url(get_template_directory_uri()) .'/assets/images/cat1.png" alt="" class="wp-image-7" width="374" height="274"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600"}}} -->
<h2 class="has-text-align-center" style="font-size:20px;font-style:normal;font-weight:600">Food</h2>
<!-- /wp:heading --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"33.33%"} -->
<div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:image {"id":8,"width":375,"height":276,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="'.esc_url(get_template_directory_uri()) .'/assets/images/cat2.png" alt="" class="wp-image-8" width="375" height="276"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600"}}} -->
<h2 class="has-text-align-center" style="font-size:20px;font-style:normal;font-weight:600">Travel</h2>
<!-- /wp:heading --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->
<!-- wp:spacer {"height":"50px"} -->
<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->',
);
