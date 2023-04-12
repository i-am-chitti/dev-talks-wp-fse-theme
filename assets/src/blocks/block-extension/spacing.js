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
	RangeControl,
} from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const STEP = 4;
const MAX = 100;

/**
 * Array of block names where `gap` attribute would be added.
 *
 * @type {string[]}
 */
const permittedBlocksWithGap = [ 'core/columns' ];

/**
 * Array of block names where this extension should be avoided.
 *
 * Add any custom dyanmic blocks here else conflicts in editor.
 *
 * @type {string[]}
 */
const restrictedBlocks = [
	'dev-talks/dropdown-block',
	'dev-talks/steps-block',
];

/**
 * Get new class names.
 *
 * @param {string} className Existing class name.
 * @param {string} value     New class Name.
 * @param {string} prefix    Prefix name.
 *
 * @return {string}
 */
const getNewClassNames = ( className, value, prefix ) => {
	const existingClassNames = className ? className.split( ' ' ) : [];
	const extraClass = 'has-custom-spacing';
	const prefixes = [
		'mtm-',
		'mbm-',
		'ptm-',
		'pbm-',
		'plm',
		'prm',
		'mlm',
		'mrm',
		'mts-',
		'mbs-',
		'pts-',
		'pbs-',
		'pls',
		'prs',
		'mls',
		'mrs',
	];

	// Remove existing spacing class names with given prefix and extra class.
	const classNames = existingClassNames.filter( ( existingClassName ) => {
		return (
			0 !== existingClassName.indexOf( prefix + '-' ) &&
			extraClass !== existingClassName
		);
	} );

	// If other spacing classes are present we would want to keep the extra class.
	const hasOtherSpacingClasses = existingClassNames.find(
		( existingClassName ) => {
			let hasClass = false;

			prefixes.forEach( ( _prefix ) => {
				if ( 0 === existingClassNames.indexOf( _prefix ) ) {
					hasClass = true;
				}
			} );

			return hasClass;
		},
	);

	if ( ! value ) {
		if ( hasOtherSpacingClasses ) {
			classNames.push( extraClass );
		}

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
	if ( 'undefined' !== typeof settings.attributes && ! restrictedBlocks.includes( settings.name ) ) {
		let additionalAttributesDefaults = {
			marginTopMedium: 0,
			marginBottomMedium: 0,
			paddingTopMedium: 0,
			paddingBottomMedium: 0,
			marginLeftMedium: 0,
			marginRightMedium: 0,
			paddingLeftMedium: 0,
			paddingRightMedium: 0,

			marginTopSmall: 0,
			marginBottomSmall: 0,
			paddingTopSmall: 0,
			paddingBottomSmall: 0,
			marginLeftSmall: 0,
			marginRightSmall: 0,
			paddingLeftSmall: 0,
			paddingRightSmall: 0,
		};

		if ( permittedBlocksWithGap.includes( settings.name ) ) {
			const gapAttributes = {
				rowGapSmall: 0,
				columnGapSmall: 0,
				rowGapMedium: 0,
				columnGapMedium: 0,
			};
			additionalAttributesDefaults = { ...additionalAttributesDefaults, ...gapAttributes };
		}

		settings.attributes = { ...settings.attributes, additionalAttributes: {
			type: 'object',
			default: additionalAttributesDefaults,
		} };
	}

	return settings;
};

/**
 * Higher order component with inspector controls for extending core block.
 */
const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		if ( restrictedBlocks.includes( props.name ) ) {
			return ( <BlockEdit { ...props } /> );
		}

		const { attributes, setAttributes } = props;

		const {
			additionalAttributes: {

				marginTopMedium,
				marginBottomMedium,
				paddingTopMedium,
				paddingBottomMedium,
				marginLeftMedium,
				marginRightMedium,
				paddingLeftMedium,
				paddingRightMedium,

				marginTopSmall,
				marginBottomSmall,
				paddingTopSmall,
				paddingBottomSmall,
				marginLeftSmall,
				marginRightSmall,
				paddingLeftSmall,
				paddingRightSmall,

				columnGapSmall,
				rowGapSmall,
				rowGapMedium,
				columnGapMedium,
			},
			className,
		} = attributes;

		const handleAdditionalAttributeChange = ( propertyName, value, prefix ) => {
			const updatedAdditionalProperties = {
				...attributes.additionalAttributes,
				[ propertyName ]: value,
			};

			setAttributes( {
				additionalAttributes: updatedAdditionalProperties,
				className: getNewClassNames(
					className,
					value,
					prefix,
				),
			} );
		};

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>

					{ ( permittedBlocksWithGap.includes( props.name ) ) && (
						<>
							<PanelBody
								id="dev-talks-mobile-column-gap"
								title={ __( 'Columns Gap - Tablet', 'dev-talks' ) }
								initialOpen={ false }
								className="has-range-control"
							>
								<BaseControl>
									<RangeControl
										label={ __( 'Row Gap (px)', 'dev-talks' ) }
										value={ rowGapMedium }
										onChange={ ( value ) => handleAdditionalAttributeChange( 'rowGapMedium', value, 'rgm' ) }
										min={ 0 }
										max={ MAX }
										step={ STEP }
									/>
									<RangeControl
										label={ __( 'Column Gap (px)', 'dev-talks' ) }
										value={ columnGapMedium }
										onChange={ ( value ) => handleAdditionalAttributeChange( 'columnGapMedium', value, 'cgm' ) }
										min={ 0 }
										max={ MAX }
										step={ STEP }
									/>
								</BaseControl>
							</PanelBody>
							<PanelBody
								id="dev-talks-mobile-column-gap"
								title={ __( 'Column Gap - Mobile', 'dev-talks' ) }
								initialOpen={ false }
								className="has-range-control"
							>
								<BaseControl>
									<RangeControl
										label={ __( 'Row Gap (px)', 'dev-talks' ) }
										value={ rowGapSmall }
										onChange={ ( value ) => handleAdditionalAttributeChange( 'rowGapSmall', value, 'rgs' ) }
										min={ 0 }
										max={ MAX }
										step={ STEP }
									/>
									<RangeControl
										label={ __( 'Column Gap (px)', 'dev-talks' ) }
										value={ columnGapSmall }
										onChange={ ( value ) => handleAdditionalAttributeChange( 'columnGapSmall', value, 'cgs' ) }
										min={ 0 }
										max={ MAX }
										step={ STEP }
									/>
								</BaseControl>
							</PanelBody>
						</>
					) }

					<PanelBody
						id="dev-talks-mobile-spacings"
						title={ __( 'Spacing - Tablet', 'dev-talks' ) }
						initialOpen={ false }
						className="has-range-control"
					>
						<BaseControl>
							<RangeControl
								label={ __( 'Margin Top (px)', 'dev-talks' ) }
								value={ marginTopMedium }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'marginTopMedium', value, 'mtm' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __(
									'Margin Bottom (px)',
									'dev-talks',
								) }
								value={ marginBottomMedium }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'marginBottomMedium', value, 'mbm' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Margin Left (px)', 'dev-talks' ) }
								value={ marginLeftMedium }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'marginLeftMedium', value, 'mlm' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Margin Right (px)', 'dev-talks' ) }
								value={ marginRightMedium }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'marginRightMedium', value, 'mrm' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Padding Top (px)', 'dev-talks' ) }
								value={ paddingTopMedium }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'paddingTopMedium', value, 'ptm' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __(
									'Padding Bottom (px)',
									'dev-talks',
								) }
								value={ paddingBottomMedium }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'paddingBottomMedium', value, 'pbm' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Padding Left (px)', 'dev-talks' ) }
								value={ paddingLeftMedium }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'paddingLeftMedium', value, 'plm' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Padding Right (px)', 'dev-talks' ) }
								value={ paddingRightMedium }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'paddingRightMedium', value, 'prm' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
						</BaseControl>
					</PanelBody>

					<PanelBody
						id="dev-talks-mobile-spacings"
						title={ __( 'Spacing - Mobile', 'dev-talks' ) }
						initialOpen={ false }
						className="has-range-control"
					>
						<BaseControl>
							<RangeControl
								label={ __( 'Margin Top (px)', 'dev-talks' ) }
								value={ marginTopSmall }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'marginTopSmall', value, 'mts' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __(
									'Margin Bottom (px)',
									'dev-talks',
								) }
								value={ marginBottomSmall }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'marginBottomSmall', value, 'mbs' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Margin Left (px)', 'dev-talks' ) }
								value={ marginLeftSmall }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'marginLeftSmall', value, 'mls' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Margin Right (px)', 'dev-talks' ) }
								value={ marginRightSmall }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'marginRightSmall', value, 'mrs' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Padding Top (px)', 'dev-talks' ) }
								value={ paddingTopSmall }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'paddingTopSmall', value, 'pts' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __(
									'Padding Bottom (px)',
									'dev-talks',
								) }
								value={ paddingBottomSmall }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'paddingBottomSmall', value, 'pbs' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Padding Left (px)', 'dev-talks' ) }
								value={ paddingLeftSmall }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'paddingLeftSmall', value, 'pls' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
							<RangeControl
								label={ __( 'Padding Right (px)', 'dev-talks' ) }
								value={ paddingRightSmall }
								onChange={ ( value ) => handleAdditionalAttributeChange( 'paddingRightSmall', value, 'prs' ) }
								min={ 0 }
								max={ MAX }
								step={ STEP }
							/>
						</BaseControl>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withInspectorControl' );

addFilter(
	'blocks.registerBlockType',
	'dev-talks/block-spacing',
	addAdditionalAttributes,
);
addFilter(
	'editor.BlockEdit',
	'dev-talks/block-spacing',
	withInspectorControls,
);
