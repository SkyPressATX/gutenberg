/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Button, Icon, Tooltip } from '@wordpress/components';
import { forwardRef } from '@wordpress/element';
import { _x, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Inserter from '../inserter';

const ButtonBlockAppender = forwardRef( ( { rootClientId, className, __experimentalSelectBlockOnInsert: selectBlockOnInsert, ...props }, ref ) => {
	return (
		<Inserter
			rootClientId={ rootClientId }
			__experimentalSelectBlockOnInsert={ selectBlockOnInsert }
			renderToggle={ ( { onToggle, disabled, isOpen, blockTitle, hasSingleBlockType } ) => {
				let label;
				if ( hasSingleBlockType ) {
					// translators: %s: the name of the block when there is only one
					label = sprintf( _x( 'Add %s', 'directly add the only allowed block' ), blockTitle );
				} else {
					label = _x( 'Add block', 'Generic label for block inserter button' );
				}
				const isToggleButton = ! hasSingleBlockType;
				return (
					<Tooltip text={ label }>
						<Button
							ref={ ref }
							className={ classnames( className, 'block-editor-button-block-appender' ) }
							onClick={ onToggle }
							aria-haspopup={ isToggleButton ? 'true' : undefined }
							aria-expanded={ isToggleButton ? isOpen : undefined }
							disabled={ disabled }
							label={ label }
							{ ...props }
						>
							<span className="screen-reader-text">{ label }</span>
							<Icon icon="insert" />
						</Button>
					</Tooltip>
				);
			} }
			isAppender
		/>
	);
} );

/**
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/button-block-appender/README.md
 */
export default ButtonBlockAppender;
