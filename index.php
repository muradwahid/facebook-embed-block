<?php
/**
 * Plugin Name: Social Media Embed Block
 * Description:The Social Media Embed Block allows you to Social Media Embed posts, videos on your website or blog.
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: social-media-embed
 */

// ABS PATH
if (!defined('ABSPATH')) {
  exit;
}

// Constant
define('FBEB_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('FBEB_DIR_URL', plugin_dir_url(__FILE__));
define('FBEB_DIR_PATH', plugin_dir_path(__FILE__));



require_once FBEB_DIR_PATH . 'inc/block.php';