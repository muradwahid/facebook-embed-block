<?php
class FBEBHelloBlock{
	public function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}
	function onInit() {
		wp_register_style( 'fbeb-hello-style', FBEB_DIR_URL . 'dist/style.css', [ ], FBEB_VERSION ); // Style
		wp_register_style( 'fbeb-hello-editor-style', FBEB_DIR_URL . 'dist/editor.css', [ 'fbeb-hello-style' ], FBEB_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'fbeb-hello-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'fbeb-hello-editor-script', 'textdomain', FBEB_DIR_PATH . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

		wp_enqueue_style( 'fbeb-hello-style' );
		wp_enqueue_script( 'fbeb-hello-script', FBEB_DIR_URL . 'dist/script.js', [ 'react', 'react-dom' ], FBEB_VERSION, true );
		wp_set_script_translations( 'fbeb-hello-script', 'textdomain', FBEB_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-facebook-fbeb-embed $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='fbeb-embed-facebook-block-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	}
}
new FBEBHelloBlock();
