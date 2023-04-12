/**
 * Core block extend.
 *
 * @package
 */

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Callback function for block save.
 * This will add 'itemProp' to HTML rendered in heading block if its used as inner block under dev-talks/structured-faq.
 *
 * @param {Object} saveElementProps Block component props.
 * @param {Object} blockType        Type of block.
 * @param {Object} attributes       Block attributes object.
 *
 * @return {Object} Filtered props.
 */
function addNamePropToHeading( saveElementProps, blockType, attributes ) {
	if ( blockType.name === 'core/heading' ) {
		if ( attributes.hasItemProp ) {
			return {
				...saveElementProps,
				itemProp: 'name',
			};
		}
	}

	return saveElementProps;
}

addFilter( 'blocks.getSaveContent.extraProps', 'dev-talks/extra-props', addNamePropToHeading );

/**
 * Add 'hasItemProp' attribute in core blocks.
 *
 * @param {Object} settings Settings for the block.
 *
 * @param {string} name     Block name
 * @return {string} name Block name.
 */
function addHasItemPropAttribute( settings, name ) {
	if ( typeof settings.attributes !== 'undefined' ) {
		if ( name === 'core/heading' ) {
			settings.attributes = Object.assign( settings.attributes, {
				hasItemProp: {
					type: 'boolean',
				},
			} );
		}
	}
	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'dev-talks/add-has-item-prop-attribute',
	addHasItemPropAttribute,
);
