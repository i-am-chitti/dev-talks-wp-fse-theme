/**
 * Core block extend.
 *
 * @package
 */

/**
 * WordPress dependencies
 */
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	BaseControl,
	SelectControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const TYPOGRAPHY_SIZE_STEP = 2;
const TYPOGRAPHY_SIZE_MAX = 50;

/**
 * Array of block names where this attribute would be added.
 *
 * @type {string[]}
 */
const permittedTextBlocks = [
	'core/heading',
	'core/paragraph',
	'core/column',
	'core/group',
	'core/button',
];
const permittedBlocks = [ ...permittedTextBlocks, 'core/columns', 'core/buttons' ];

/**
 * Get new class names.
 *
 * @param {string} className Existing class name.
 * @param {string} value     New class Name.
 *
 * @param {string} prefix    Prefix name
 *
 * @return {string} New class names.
 */
const getNewClassNames = ( className, value, prefix ) => {
	const existingClassNames = className ? className.split( ' ' ) : [];

	// Remove existing class names with given prefix and extra class.
	const classNames = existingClassNames.filter( ( existingClassName ) => {
		return 0 !== existingClassName.indexOf( prefix );
	} );

	if ( ! value ) {
		return classNames.join( ' ' );
	}

	classNames.push( `${ prefix }` );

	return classNames.join( ' ' );
};

/**
 * Join new class names.
 *
 * @param {string} className Existing class name.
 * @param {string} value     New class Name.
 *
 * @param {string} prefix    Prefix name
 * @return {string} Joined class names
 */
const joinNewClassNames = ( className, value, prefix ) => {
	const existingClassNames = className ? className.split( ' ' ) : [];

	// Remove existing class names with given prefix and extra class.
	const classNames = existingClassNames.filter( ( existingClassName ) => {
		return 0 !== existingClassName.indexOf( prefix + '-' );
	} );

	if ( ! value ) {
		return classNames.join( ' ' );
	}

	classNames.push( `${ prefix }-${ value }` );

	return classNames.join( ' ' );
};

/**
 * Join new class names with extra class.
 *
 * @param {string} className  Existing class name.
 * @param {string} value      New class Name.
 *
 * @param {string} prefix     Prefix name.
 * @param {string} extraClass Extra class.
 * @return {string} Updated classnames
 */
const joinNewClassNamesWithExtraClass = ( className, value, prefix, extraClass ) => {
	const existingClassNames = className ? className.split( ' ' ) : [];

	// Remove existing class names with given prefix and extra class.
	const classNames = existingClassNames.filter( ( existingClassName ) => {
		return (
			0 !== existingClassName.indexOf( prefix + '-' ) &&
			( extraClass !== existingClassName )
		);
	} );

	if ( ! value ) {
		return classNames.join( ' ' );
	}

	classNames.push( `${ prefix }-${ value } ${ extraClass }` );

	return classNames.join( ' ' );
};

/**
 * Add additional attribute in core blocks.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
const addAdditionalAttributes = ( settings ) => {
	if (
		'undefined' !== settings.name &&
		permittedBlocks.includes( settings.name )
	) {
		settings.attributes = Object.assign( settings.attributes, {
			...( 'core/columns' === settings.name && {
				reverseColumnsMobile: {
					type: 'boolean',
					default: false,
				},
				reverseColumnsTablet: {
					type: 'boolean',
					default: false,
				},
				stackOnTablet: {
					type: 'boolean',
					default: false,
				},
			} ),
			...( 'core/buttons' === settings.name && {
				centerAlignMobile: {
					type: 'boolean',
					default: false,
				},
				centerAlignTablet: {
					type: 'boolean',
					default: false,
				},
			} ),
			mobileTextAlignment: {
				type: 'string',
				default: '',
			},
			tabletTextAlignment: {
				type: 'string',
				default: '',
			},
			fontSizeMobile: {
				type: 'number',
				default: 0,
			},
			fontSizeTablet: {
				type: 'number',
				default: 0,
			},
			lineHeightMobile: {
				type: 'number',
				default: 0,
			},
			lineHeightTablet: {
				type: 'number',
				default: 0,
			},
		} );
	}

	return settings;
};

/**
 * Higher order component with inspector controls for extending core block.
 */
const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		if ( ! permittedBlocks.includes( props.name ) ) {
			return <BlockEdit { ...props } />;
		}

		const { attributes, setAttributes } = props;
		const { className } = attributes;

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						id="dev-talks-responsive"
						title={ __( 'Responsive', 'dev-talks' ) }
						initialOpen={ false }
						className="has-toggle-control"
					>
						<BaseControl>
							{ ( 'core/columns' === props.name ) && (
								<>
									<ToggleControl
										label={ __(
											'Reverse Columns (Mobile)',
											'dev-talks',
										) }
										checked={ !! attributes.reverseColumnsMobile }
										onChange={ ( value ) => {
											setAttributes( {
												reverseColumnsMobile: value,
												className: getNewClassNames(
													className,
													value,
													'dev-talks-reverse-columns-mobile',
												),
											} );
										} }
									/>
									<ToggleControl
										label={ __(
											'Reverse Columns (Tablet)',
											'dev-talks',
										) }
										checked={ !! attributes.reverseColumnsTablet }
										onChange={ ( value ) => {
											setAttributes( {
												reverseColumnsTablet: value,
												className: getNewClassNames(
													className,
													value,
													'dev-talks-reverse-columns-tablet',
												),
											} );
										} }
									/>
									<ToggleControl
										label={ __(
											'Stack Columns (Tablet)',
											'dev-talks',
										) }
										checked={ !! attributes.stackOnTablet }
										onChange={ ( value ) => {
											setAttributes( {
												stackOnTablet: value,
												className: getNewClassNames(
													className,
													value,
													'dev-talks-scom',
												),
											} );
										} }
									/>
								</>
							) }

							{ ( 'core/buttons' === props.name ) && (
								<>
									<ToggleControl
										label={ __(
											'Center Align Button - Mobile',
											'dev-talks',
										) }
										checked={ !! attributes.centerAlignMobile }
										onChange={ ( value ) => {
											setAttributes( {
												centerAlignMobile: value,
												className: getNewClassNames(
													className,
													value,
													'dev-talks-center-align-button-mobile',
												),
											} );
										} }
									/>
									<ToggleControl
										label={ __(
											'Center Align Button - Tablet',
											'dev-talks',
										) }
										checked={ !! attributes.centerAlignTablet }
										onChange={ ( value ) => {
											setAttributes( {
												centerAlignTablet: value,
												className: getNewClassNames(
													className,
													value,
													'dev-talks-center-align-button-tablet',
												),
											} );
										} }
									/>
								</>
							) }
							<>
								<RangeControl
									label={ __( 'Font Size - Mobile', 'dev-talks' ) }
									value={ attributes.fontSizeMobile }
									onChange={ ( value ) => {
										setAttributes( {
											fontSizeMobile: value,
											className: joinNewClassNamesWithExtraClass(
												className,
												value,
												'fss',
												'has-custom-font',
											),
										} );
									} }
									min={ 0 }
									max={ TYPOGRAPHY_SIZE_MAX }
									step={ TYPOGRAPHY_SIZE_STEP }
								/>
								<RangeControl
									label={ __( 'Line Height - Mobile', 'dev-talks' ) }
									value={ attributes.lineHeightMobile }
									onChange={ ( value ) => {
										setAttributes( {
											lineHeightMobile: value,
											className: joinNewClassNamesWithExtraClass(
												className,
												value,
												'lhs',
												'has-custom-font',
											),
										} );
									} }
									min={ 0 }
									max={ TYPOGRAPHY_SIZE_MAX }
									step={ TYPOGRAPHY_SIZE_STEP }
								/>
								<RangeControl
									label={ __( 'Font Size - Tablet', 'dev-talks' ) }
									value={ attributes.fontSizeTablet }
									onChange={ ( value ) => {
										setAttributes( {
											fontSizeTablet: value,
											className: joinNewClassNamesWithExtraClass(
												className,
												value,
												'fsm',
												'has-custom-font',
											),
										} );
									} }
									min={ 0 }
									max={ TYPOGRAPHY_SIZE_MAX }
									step={ TYPOGRAPHY_SIZE_STEP }
								/>
								<RangeControl
									label={ __( 'Line Height - Tablet', 'dev-talks' ) }
									value={ attributes.lineHeightTablet }
									onChange={ ( value ) => {
										setAttributes( {
											lineHeightTablet: value,
											className: joinNewClassNamesWithExtraClass(
												className,
												value,
												'lhm',
												'has-custom-font',
											),
										} );
									} }
									min={ 0 }
									max={ TYPOGRAPHY_SIZE_MAX }
									step={ TYPOGRAPHY_SIZE_STEP }
								/>
								<SelectControl
									label={ __( 'Text Alignment - Mobile', 'dev-talks' ) }
									value={ attributes.mobileTextAlignment }
									options={ [
										{ value: '', label: __( 'None', 'dev-talks' ) },
										{
											value: 'left',
											label: __( 'Left' ),
										},
										{ value: 'center', label: __( 'Center' ) },
										{ value: 'right', label: __( 'Right' ) },
									] }
									onChange={ ( value ) => {
										setAttributes( {
											mobileTextAlignment: value,
											className: joinNewClassNames(
												className,
												value,
												'dev-talks-mobile-text-align',
											),
										} );
									} }
								/>
								<SelectControl
									label={ __( 'Text Alignment - Tablet', 'dev-talks' ) }
									value={ attributes.tabletTextAlignment }
									options={ [
										{ value: '', label: __( 'None', 'dev-talks' ) },
										{
											value: 'left',
											label: __( 'Left', 'dev-talks' ),
										},
										{ value: 'center', label: __( 'Center', 'dev-talks' ) },
										{ value: 'right', label: __( 'Right', 'dev-talks' ) },
									] }
									onChange={ ( value ) => {
										setAttributes( {
											tabletTextAlignment: value,
											className: joinNewClassNames(
												className,
												value,
												'dev-talks-tablet-text-align',
											),
										} );
									} }
								/>
							</>

						</BaseControl>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withInspectorControl' );

addFilter(
	'blocks.registerBlockType',
	'dev-talks/block-responsive',
	addAdditionalAttributes,
);
addFilter(
	'editor.BlockEdit',
	'dev-talks/block-responsive',
	withInspectorControls,
);
