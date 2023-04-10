<?php
/**
 * Footer Default
 *
 * slug: footer-default
 * title: Footer Default
 * categories: dev-talks
 */

return array(
    'title'      =>__( 'Footer Default', 'dev-talks' ),
    'categories' => array( 'dev-talks' ),
    'content'    => '<!-- wp:group {"style":{"elements":{"link":{"color":{"text":"var:preset|color|fourground"}}}},"backgroundColor":"black","textColor":"background","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-background-color has-black-background-color has-text-color has-background has-link-color"><!-- wp:columns {"style":{"spacing":{"padding":{"top":"50px","bottom":"50px","right":"20px","left":"20px"}}},"className":"alignwide"} -->
<div class="wp-block-columns alignwide" style="padding-top:50px;padding-right:20px;padding-bottom:50px;padding-left:20px"><!-- wp:column {"style":{"spacing":{"blockGap":"20px"}}} -->
<div class="wp-block-column"><!-- wp:heading {"style":{"typography":{"fontSize":"22px"}},"textColor":"accent"} -->
<h2 class="has-accent-color has-text-color" style="font-size:22px"><strong>About Me</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"blockGap":"20px"}}} -->
<div class="wp-block-column"><!-- wp:heading {"style":{"typography":{"fontSize":"22px"}},"textColor":"accent"} -->
<h2 class="has-accent-color has-text-color" style="font-size:22px"><strong>Contact Me</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left"} -->
<p class="has-text-align-left"><span class="dashicons dashicons-email-alt"></span>  chitti@dev.com</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><span class="dashicons dashicons-phone"></span>  +987 654 3210</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><span class="dashicons dashicons-admin-home"></span>  123, Red Hills, Chicago,IL, USA</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"blockGap":"20px"}}} -->
<div class="wp-block-column"><!-- wp:heading {"style":{"typography":{"fontSize":"22px"}},"textColor":"accent"} -->
<h2 class="has-accent-color has-text-color" style="font-size:22px"><strong>Recent Posts</strong></h2>
<!-- /wp:heading -->

<!-- wp:latest-posts {"displayPostContent":true,"excerptLength":10,"featuredImageAlign":"left","featuredImageSizeWidth":38,"featuredImageSizeHeight":38} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"backgroundColor":"accent","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-accent-background-color has-background"><!-- wp:paragraph {"align":"center","textColor":"background","fontSize":"medium"} -->
<p class="has-text-align-center has-background-color has-text-color has-medium-font-size">Proudly powered by WordPress</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->',
);
