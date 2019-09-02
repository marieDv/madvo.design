<?php
/*
 * Template Name: Marie Dvorzak'S Portfolio
 * Template Post Type: post
 */


?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset='utf-8'>

  <title>Marie Dvorzak</title>
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  <meta name="description" content="I am a passionate programmer and visual artist based in Vienna, currently specializing in Frontend Development and UI-Design with Vue, React and Three.js">
  <meta name="author" content="Marie Dvorzak">

  <!-- <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script> -->



  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"> -->
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
  <link src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js" />
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/utils/Draggable.min.js"></script> -->
  <link rel="stylesheet" href="<? bloginfo('stylesheet_url') ?>">
  <?php
  function theme_enqueue_styles()
  {
    wp_enqueue_style('font-awesome', get_template_directory_uri() . '/css/font-awesome.min.css');
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/scss/scss.css');
  }
  add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

  ?>
  <? wp_head(); ?>


</head>
<div class="cursor cursor--small"></div>
    <canvas class="cursor cursor--canvas" resize></canvas>
<section class="single">

  <div class=" absolute pin-t mt-16 mr-6 w-full z-50">
    <ul class="pin-r absolute mr-12 nav">
      <li class="nav-items text--xs inline mt-16 cursor-pointer pinm-r">
        <a class="burger-menu" href="<?php echo get_home_url() ?>">
          <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/close.png">
          <!-- <span>back</span> -->
        </a> 
        <ul class="inline toggleabout text--sm text--nav headline--sm texthover texthover-up pr-3" target="_blank" href="https://www.instagram.com/madvo.design/">
          <!-- Marie Dvorzak
          <li class="text-small">
            Designer / Coder
          </li>
        </ul>
        <ul class="nav-fast">
          <li id="" class="inline toggleabout text--sm text--nav headline--sm texthover texthover-up" href="">
            <a href="<?php echo get_home_url() ?>">work</a>
          </li>
          <li id="toggleabout" class="inline toggleabout text--sm text--nav headline--sm texthover texthover-up" href="">
            <a href="<?php echo get_page_link(780); ?>">about</a>
          </li> -->
        </ul>
      </li>
    </ul>
  </div>


  <!-- <a><?php get_home_url() ?>Back</a>
  <div class="more-button--sound w-16 h-4 inline-block mr-3"></div>
  <a href="<?php echo get_home_url() ?>">back</a>
  </div> -->
  <?php
  while (have_posts()) : the_post();

    $id = $post->ID;
    $post = get_post($id);
    $content = apply_filters('the_content', $post->post_content);
    echo $content;
  endwhile;
  ?>
  <div id="overview-holder" class="quickOverview-container"></div>
  <div id="overview" class="quickOverview">
    <?php
    global $i;
    global $post;
    $args = array('category' => 25); //25 //2 for dev
    $work = get_posts($args);
    ?>
    <?php foreach ($work as $post) : setup_postdata($post); ?>

      <a href="<?php echo get_permalink($post->ID) ?>">
        <?php the_title(); ?>
      </a>
    <?php endforeach; ?>
  </div>
  </div>
  <?php require(dirname(__FILE__) . '/footer-single.php'); ?>
</section>