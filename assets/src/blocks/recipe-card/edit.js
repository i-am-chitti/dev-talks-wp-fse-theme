/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const Edit = ( props ) => {
	const {
		attributes: { title, mediaID, mediaURL, ingredients, instructions },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};

	const onSelectImage = ( media ) => {
		setAttributes( {
			mediaURL: media.url,
			mediaID: media.id,
		} );
	};
	const onChangeIngredients = ( value ) => {
		setAttributes( { ingredients: value } );
	};

	const onChangeInstructions = ( value ) => {
		setAttributes( { instructions: value } );
	};

	return (
		<div { ...blockProps }>
			<RichText
				tagName="h2"
				placeholder={ __(
					'Write Recipe title…',
					'dev-talks'
				) }
				value={ title }
				onChange={ onChangeTitle }
			/>
			<div className="recipe-image">
				<MediaUpload
					onSelect={ onSelectImage }
					allowedTypes="image"
					value={ mediaID }
					render={ ( { open } ) => (
						<Button
							className={
								mediaID ? 'image-button' : 'button button-large'
							}
							onClick={ open }
						>
							{ ! mediaID ? (
								__( 'Upload Image', 'dev-talks' )
							) : (
								<img
									src={ mediaURL }
									alt={ __(
										'Upload Recipe Image',
										'dev-talks'
									) }
								/>
							) }
						</Button>
					) }
				/>
			</div>
			<h3>{ __( 'Ingredients', 'dev-talks' ) }</h3>
			<RichText
				tagName="ul"
				multiline="li"
				placeholder={ __(
					'Write a list of ingredients…',
					'dev-talks'
				) }
				value={ ingredients }
				onChange={ onChangeIngredients }
				className="ingredients"
			/>
			<h3>{ __( 'Instructions', 'dev-talks' ) }</h3>
			<RichText
				tagName="div"
				multiline="p"
				className="steps"
				placeholder={ __(
					'Write the instructions…',
					'dev-talks'
				) }
				value={ instructions }
				onChange={ onChangeInstructions }
			/>
		</div>
	);
};

export default Edit;