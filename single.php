<?php
/*
 * Template Name: Marie Dvorzak'S Portfolio
 * Template Post Type: post
 */

get_header();  ?>

<h1>POST TITLE</h1>
<?php
while (have_posts()) : the_post();

  $id = $post->ID;
  $post = get_post($id);
  $content = apply_filters('the_content', $post->post_content);
  echo $content;
  endwhile;
  ?>