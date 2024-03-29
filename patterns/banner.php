<?php
/**
 * Banner Section
 *
 * slug: banner
 * title: Banner
 * categories: dev-talks
 */

return array(
	'title'      => __( 'Banner', 'dev-talks' ),
	'categories' => array( 'dev-talks' ),
	'content'    => '
<!-- wp:cover {"url":"' . esc_url( get_template_directory_uri() ) . '/assets/images/banner.png","id":7,"dimRatio":50,"overlayColor":"black","minHeight":600,"className":"main-banner"} --><main class="wp-block-group alignfull"><div class="wp-block-cover main-banner" style="min-height:600px"><span aria-hidden="true" class="wp-block-cover__background has-black-background-color has-background-dim"></span><img class="wp-block-cover__image-background wp-image-7" alt="" src="' . esc_url( get_template_directory_uri() ) . '/assets/images/banner.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","fontSize":"large"} -->
<p class="has-text-align-center has-large-font-size"></p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"25%"} -->
<div class="wp-block-column" style="flex-basis:25%"></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":"40px"}}} -->
<h2 class="has-text-align-center" style="font-size:40px"><strong>From Dev, To Dev</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","fontSize":"upper-heading"} -->
<p class="has-text-align-center has-upper-heading-font-size">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices<br>posuere cubilia Curae; Fusce porttitor metus eget<br>lectus consequat, sit amet feugiat magna vulputate.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"textColor":"background","align":"center","style":{"color":{"background":"#44c3c3"}},"fontSize":"medium"} -->
<div class="wp-block-button aligncenter has-custom-font-size has-medium-font-size"><a class="wp-block-button__link has-background-color has-text-color has-background wp-element-button" style="background-color:#44c3c3; border: 0;" href="/blog"><strong>Read Blog</strong></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"25%"} -->
<div class="wp-block-column" style="flex-basis:25%"></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div></div></main>
<!-- /wp:cover -->

<!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"padding":{"top":"var:preset|spacing|80","right":"0","bottom":"var:preset|spacing|80","left":"var:preset|spacing|80"}}},"backgroundColor":"secbackground"} -->
<div class="wp-block-columns are-vertically-aligned-center has-secbackground-background-color has-background" style="padding-top:var(--wp--preset--spacing--80);padding-right:0;padding-bottom:var(--wp--preset--spacing--80);padding-left:var(--wp--preset--spacing--80)"><!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading {"level":3,"placeholder":"Heading","fontSize":"extra-large"} -->
<h3 class="wp-block-heading has-extra-large-font-size">Discover the best developer blogs on any tech stack</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>The content Tech Twitter is talking about, minus the noise.</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Ranked by machines, curated by humans, updated hourly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="#">How it works</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"align":"center","id":1844,"width":512,"height":512,"sizeSlug":"large","linkDestination":"none","className":"is-style-default"} -->
<figure class="wp-block-image aligncenter size-large is-resized is-style-default"><img src="' . esc_url( get_template_directory_uri() ) . '/assets/images/linked-in.png' . '" alt="linked-in-proof" class="wp-image-1844" width="512" height="512"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->


',
);
