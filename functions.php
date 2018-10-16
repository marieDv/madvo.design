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