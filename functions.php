<?php
/**
 * Theme functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Dev-Talks
 */

if ( ! defined( 'DEV_TALKS_VERSION' ) ) :
	define( 'DEV_TALKS_VERSION', wp_get_theme()->get( 'Version' ) );
endif;

if ( ! defined( 'DEV_TALKS_TEMP_DIR' ) ) :
	define( 'DEV_TALKS_TEMP_DIR', untrailingslashit( get_template_directory() ) );
endif;

if ( ! defined( 'DEV_TALKS_BUILD_URI' ) ) :
	define( 'DEV_TALKS_BUILD_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build' );
endif;

if ( ! defined( 'DEV_TALKS_BUILD_DIR' ) ) :
	define( 'DEV_TALKS_BUILD_DIR', untrailingslashit( get_template_directory() ) . '/assets/build' );
endif;

require_once DEV_TALKS_TEMP_DIR . '/vendor/autoload.php';

/**
 * Theme bootstrap instance.
 *
 * @since 1.0.0
 *
 * @return object Theme bootstrap instance.
 */
function dev_talks_instance() {
	return Dev_Talks\Dev_Talks::get_instance();
}

// Instantiate theme.
dev_talks_instance();
