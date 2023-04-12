<?php
/**
 * Registers all custom gutenberg blocks.
 *
 * @package Dev_Talks
 */

namespace Dev_Talks\Inc;

use Dev_Talks\Inc\Traits\Singleton;

/**
 * Class Blocks
 */
class Blocks {

	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {

		$this->setup_hooks();

	}

	/**
	 * Setup hooks.
	 *
	 * @return void
	 */
	public function setup_hooks() {
		add_action( 'init', [ $this, 'register_blocks' ] );
	}

	/**
	 * Register all custom gutenberg blocks.
	 *
	 * @return void
	 */
	public function register_blocks() {

		// Register example-block Block.
		register_block_type(
			DEV_TALKS_BUILD_DIR . '/blocks/example-block/'
		);

		register_block_type(
			DEV_TALKS_BUILD_DIR . '/blocks/recipe-card/'
		);

		register_block_type(
			DEV_TALKS_BUILD_DIR . '/blocks/block-extension/'
		);

		register_block_type(
			DEV_TALKS_BUILD_DIR . '/blocks/structured-answer'
		);

		register_block_type(
			DEV_TALKS_BUILD_DIR . '/blocks/structured-question-group'
		);

		register_block_type(
			DEV_TALKS_BUILD_DIR . '/blocks/structured-faq'
		);

	}
}
