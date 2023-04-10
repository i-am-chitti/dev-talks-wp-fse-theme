<?php
/**
 * Theme bootstrap file.
 *
 * @package Dev-Talks
 */

namespace Dev_Talks;

use Dev_Talks\Traits\Singleton;
use Dev_Talks\Assets;
use \WP_Block_Pattern_Categories_Registry;

/**
 * Class Dev_Talks
 *
 * @since 1.0.0
 */
class Dev_Talks {

	use Singleton;

	/**
	 * Constructor.
	 */
	protected function __construct() {
		// Instantiate classes.
		Assets::get_instance();

		// Setup hooks.
		$this->setup_hooks();
	}

	/**
	 * Setup hooks.
	 *
	 * @since 1.0.0
	 */
	public function setup_hooks() {
		add_action( 'after_setup_theme', [ $this, 'dev_talks_support' ] );
		add_action( 'init', array( $this, 'register_block_pattern_categories' ) );
		add_action( 'init', array( $this, 'register_block_patterns' ) );
	}

	/**
	 * Add required theme support.
	 *
	 * @since 1.0.0
	 */
	public function dev_talks_support() {
		// Add support for core block styles.
		add_theme_support( 'wp-block-styles' );

		add_theme_support( 'responsive-embeds' );

		// Add support for experimental link color control.
		add_theme_support( 'experimental-link-color' );
	}

	/**
	 * Register block patterns categories.
	 *
	 * @return void
	 */
	public function register_block_pattern_categories() {

		$categories = array(
			'dev-talks' => array( 'label' => __( 'Dev Talks Patterns', 'dev-talks' ) ),
		);

		foreach ( $categories as $slug => $args ) {
			if ( WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $slug ) ) {
				continue;
			}

			register_block_pattern_category( $slug, $args );
		}

	}

	/**
	 * Register Block Patterns.
	 *
	 * @return void
	 */
	public function register_block_patterns() {

		$patterns = array(
			'banner',
			'blog-category',
			'primary-sidebar',
			'footer-default'
		);

		foreach ( $patterns as $pattern ) {

			$file = get_theme_file_path( '/patterns/' . $pattern . '.php' );

			if ( ! is_file( $file ) ) {

				continue;

			}

			register_block_pattern( 'dev-talks/' . $pattern, require $file );
		}
	}
}
