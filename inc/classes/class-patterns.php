<?php
/**
 * Patterns registration and handle.
 *
 * @package Dev-Talks
 */

namespace Dev_Talks;

use Dev_Talks\Traits\Singleton;
use \WP_Block_Pattern_Categories_Registry;

/**
 * Class Patterns
 *
 * @since 1.0.0
 */
class Patterns {

	use Singleton;

	/**
	 * Categories
	 *
	 * @var array
	 */
	public $categories = array(
		'dev-talks' => array( 'label' => 'Dev Talks Patterns' ),
	);

	/**
	 * Patterns
	 *
	 * @var array
	 */
	public $patterns = array(
		'banner',
		'blog-category',
		'primary-sidebar',
		'footer-default'
	);

	/**
	 * Constructor.
	 */
	protected function __construct() {
		// Setup hooks.
		// $this->setup_hooks();

	}

	/**
	 * Setup hooks.
	 *
	 * @since 1.0.0
	 */
	public function setup_hooks() {
		add_action( 'init', array( $this, 'register_categories' ) );
		add_action( 'init', array( $this, 'register_patterns' ) );
	}

	/**
	 * Register block patterns categories.
	 *
	 * @return void
	 */
	private function register_categories() {

		foreach ( $this->categories as $slug => $args ) {
			if ( WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $slug ) ) {
				continue;
			}

			register_block_pattern_category( $slug, $args );
		}

	}

	/**
	 * Register Patterns.
	 *
	 * @return void
	 */
	private function register_patterns() {

		foreach ( $this->patterns as $pattern ) {

			$file = get_theme_file_path( '/patterns/' . $pattern . '.php' );

			if ( ! is_file( $file ) ) {

				continue;

			}

			register_block_pattern( 'dev-talks/' . $pattern, require $file );
		}
	}

}
