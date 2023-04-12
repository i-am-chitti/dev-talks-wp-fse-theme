/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

/**
 * Register the block.
 */
registerBlockType( metadata, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save: Save,
} );
