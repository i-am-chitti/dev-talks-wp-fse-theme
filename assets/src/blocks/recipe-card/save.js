/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { title, mediaURL, ingredients, instructions },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps }>
			<div className="recipe-content">
				<RichText.Content tagName="h3" value={ title } />

				<h4>{ __( 'Ingredients', 'dev-talks' ) }</h4>
				<RichText.Content
					tagName="ul"
					className="ingredients"
					value={ ingredients }
				/>

				<h4>{ __( 'Instructions', 'dev-talks' ) }</h4>
				<RichText.Content
					tagName="div"
					className="steps"
					value={ instructions }
				/>
			</div>
			<div className="recipe-image">
				{ mediaURL && (
					<img
						className="recipe-image"
						src={ mediaURL }
						alt={ __( 'Recipe Image', 'dev-talks' ) }
					/>
				) }
			</div>
		</div>
	);
};

export default Save;
