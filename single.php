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

  <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
  <link src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js" />
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

  <img id="arrows" alt="cursor-image-view-ring" src="<?php bloginfo('stylesheet_directory'); ?>/assets/arrows.png">
</head>
<header id="" class="header-mobile ">
        <!-- <a class="bottomNav work active" href="<?php echo get_home_url() ?>">Work</a> -->
        <p>Marie Dvorzak</p>
        <a class="bottomNav" href="<?php echo get_home_url(); ?>">Work</a>
        <a class="bottomNav" href="mailto:dvorzak.marie@gmx.at?Subject=Hi!">contact</a>
</header>
<div class="cursor cursor--small"></div>
<canvas class="cursor cursor--canvas" resize></canvas>
<section class="single">

  <div class=" absolute pin-t mt-16 mr-6 w-full z-50">
    <ul class="pin-r absolute mr-12 nav  single-top-nav">
      <!-- <li class="info-ring-nav">
        <img id="" alt="about me ring" class="info-ring" src="<?php bloginfo('stylesheet_directory'); ?>/assets/info-ring.png">
      </li> -->

      <a class="burger-menu" href="<?php echo get_home_url() ?>">
      </a>
      <a class="current-index"><strong>

          <?php
          while (have_posts()) : the_post();

            $id = $post->ID;
            $currentPostId = $id;
          endwhile;
          global $i;
          global $post;
          $currentIndex = 0;
          $args = array('category' => 25); //25 //2 for dev
          $work = get_posts($args);
          ?>
          <?php foreach ($work as $post) : setup_postdata($post); ?>
            <?php $currentIndex += 1;     
              if ($currentPostId === $id) {
                echo ("0" . $currentIndex);
              } ?>
          <?php endforeach; ?>

        </strong> / <?php echo "0" . count_cat_post(25) ?> <!--   2 25 -->


      </a>
      <li class="header-nav">
        <a class="bottomNav work" href="<?php echo get_home_url() ?>">Work</a>
        <a class="bottomNav" href="<?php echo get_page_link(780); ?>">About</a>
        <a class="bottomNav" href="mailto:mariedvorzak@gmail.com?Subject=Hi!">contact</a>
      </li>
      <li class="nav-items text--xs inline mt-16 cursor-pointer pinm-r">
        <ul class="inline toggleabout text--sm text--nav headline--sm texthover texthover-up pr-3" target="_blank" href="https://www.instagram.com/madvo.design/">
        </ul>
      </li>
    </ul>
  </div>
  <div id="scroll-popup" class="scroll-popup">
    <p id="scroll-popup-text">Scroll</p><span id="scroll-popup-line"></span>
  </div>
  <?php
  global $currentPostId;
  while (have_posts()) : the_post();

    $id = $post->ID;
    $post = get_post($id);
    $content = apply_filters('the_content', $post->post_content);
    $currentPostId = $id;
    echo $content;
  endwhile;
  ?>

  <?php if (has_post_thumbnail($post->ID)) : ?>
    <?php $image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail'); ?>
  <?php endif; ?>
  <p class="hidden-thumbnail">
    <?php echo $image[0] ?>
  </p>
  <div id="overview-swiper-single" class="swiper-container overview-container">
    <div id="overview" class="quickOverview swiper-wrapper">
      <?php
      global $i;
      global $post;
      $currentIndex = 0;
      $args = array('category' => 25); //25 //2 for dev
      $work = get_posts($args);
      ?>
      <?php foreach ($work as $post) : setup_postdata($post); ?> 
        <?php $currentIndex += 1;
          if ($currentPostId !== $id) { ?>


          <a class="swiper-slide single-slide" href="<?php echo get_permalink($post->ID) ?>">
            <?php
                $title = get_the_title();
                // echo str_replace('<br>', ' ', $title);
                echo $title;
                ?>
          </a>
        <?php }  ?>
      <?php endforeach; ?>
    </div>
  </div>
  </div>
  <?php require(dirname(__FILE__) . '/footer-single.php'); ?>
</section>