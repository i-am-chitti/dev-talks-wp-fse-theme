/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const faqTemplate = [
	[ 'dev-talks/structured-question-group' ],
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
			<div itemType="https://schema.org/FAQPage" itemScope>
				<InnerBlocks allowedBlocks={ faqTemplate[ 0 ] } template={ faqTemplate }
					renderAppender={ InnerBlocks.ButtonBlockAppender }
				/>
			</div>
		</div>
	);
};

export default Edit;
