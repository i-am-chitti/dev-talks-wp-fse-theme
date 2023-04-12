/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const answerTemplate = [
	[ 'core/paragraph', { placeholder: __( 'Answer', 'dev-talks' ) } ],
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const Edit = () => {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<div itemType="https://schema.org/Answer" itemScope="itemscope" itemProp="acceptedAnswer">
				<div itemProp="text">
					<InnerBlocks template={ answerTemplate } templateLock={ false } />
				</div>
			</div>
		</div>
	);
};

export default Edit;
