/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const questionTemplate = [
	['core/heading', { placeholder: 'Question', level: 2, hasItemProp: true }],
	[ 'dev-talks/structured-answer' ]
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
		<div {...blockProps}>
			<div itemtype="https://schema.org/Question" itemscope itemprop="mainEntity">
				<InnerBlocks template={ questionTemplate } />
			</div>
		</div>
	);
};

export default Edit;
