<?php
/**
 * Test if class Dev_Talks exists.
 *
 * @package Dev-Talks
 */

use Dev_Talks\Tests\TestCase;
use Dev_Talks\Dev_Talks;

/**
 * Class Test_Dev_Talks
 */
class Test_Dev_Talks extends TestCase {

	/**
	 * Test if class Dev_Talks exists.
	 *
	 * @since 1.0.0
	 */
	public function test_class_exists() {
		$this->assertTrue( class_exists( 'Dev_Talks\Dev_Talks' ) );
	}

	/**
	 * Test if class Dev_Talks is a singleton.
	 *
	 * @since 1.0.0
	 */
	public function test_class_is_singleton() {
		$this->assertTrue( Dev_Talks::get_instance() instanceof Dev_Talks );
	}

	/**
	 * Test if class Dev_Talks has a method 'setup_hooks'.
	 *
	 * @since 1.0.0
	 */
	public function test_class_has_method_setup_hooks() {
		$this->assertTrue( method_exists( 'Dev_Talks\Dev_Talks', 'setup_hooks' ) );
	}

	/**
	 * Test if class Dev_Talks has a method 'dev_talks_support'.
	 *
	 * @since 1.0.0
	 */
	public function test_class_has_method_dev_talks_support() {
		$this->assertTrue( method_exists( 'Dev_Talks\Dev_Talks', 'dev_talks_support' ) );
	}
}
