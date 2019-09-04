<?php
add_filter('show_admin_bar', '__return_false');

//no p tags on content
remove_filter('the_content', 'wpautop');

add_theme_support('menus');
register_nav_menu('main', 'Main-Menu');
add_theme_support( 'post-thumbnails' ); 
//set_post_thumbnail_size( 400, 400 );

?>
<?php
function the_category_unlinked($separator = ' ') {
    $categories = (array) get_the_category();
    
    $thelist = '';
    foreach($categories as $category) {    // concate
        $thelist .= $separator . $category->category_nicename;
    }
    
    echo $thelist;
}
?>
<?php
function alx_embed_html( $html ) {
    return '<div class="video-container">' . $html . '</div>';
}
 
add_filter( 'embed_oembed_html', 'alx_embed_html', 10, 3 );
add_filter( 'video_embed_html', 'alx_embed_html' );?>