/**
 * Block variation
 */
wp.domReady( function() {
	/**
	 * A Group block variation with box shadow, border, and padding.
	 */
	wp.blocks.registerBlockVariation( 'core/group', {
		name: 'group-shadow-solid',
		title: 'Group - Shadow Solid',
		description: 'A group with a solid shadow',
		isDefault: false,
		attributes: {
			className: 'is-style-shadow-solid',
			style: {
				border: {
					width: '1px',
				},
				spacing: {
					padding: {
						top: 'var:preset|spacing|40',
						right: 'var:preset|spacing|40',
						bottom: 'var:preset|spacing|40',
						left: 'var:preset|spacing|40',
					},
				},
			},
			borderColor: 'contrast',
		},
	} );

	/**
	 * Customize the default Media & Text block.
	 */
	wp.blocks.registerBlockVariation(
		'core/media-text',
		{
			name: 'custom-media-text',
			title: 'Media & Text',
			isDefault: false,
			attributes: {
				mediaPosition: 'right',
				backgroundColor: 'secondary',
			},
			innerBlocks: [
				[
					'core/heading',
					{
						level: 3,
						placeholder: 'Heading',
					},
				],
				[
					'core/paragraph',
					{
						placeholder: 'Start writing your story...',
					},
				],
			],
		},
	);
} );
