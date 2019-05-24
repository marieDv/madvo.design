<?php /* Template Name: about */ ?>

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

<section class="single about">
  <div class=" absolute pin-t mt-16 mr-6 w-full z-50">
    <ul class="pin-r absolute mr-12 nav">
      <li class="nav-items text--xs inline mt-16 cursor-pointer ml-4 pinm-r">
        <a class="burger-menu" href="<?php echo get_home_url() ?>">
          <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/close.png">
        </a>
        <ul class="inline toggleabout text--sm text--nav headline--sm texthover texthover-up pr-3" target="_blank" href="https://www.instagram.com/madvo.design/">
          Marie Dvorzak
          <li class="text-small">
            Designer / Coder
          </li>
        </ul>
        <ul class="nav-fast">
          <li id="" class="inline toggleabout text--sm text--nav headline--sm texthover texthover-up" href="">
          <a href="<?php echo get_home_url() ?>">work</a>
          </li>
          <li id="toggleabout" class="inline active toggleabout text--sm text--nav headline--sm texthover texthover-up" href="">
          <a href="<?php echo get_page_link(about); ?>">about</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="w-full flex wrap row mt-32 md:mt-2 xs:p-2 md:p-32 about ">

    <div class="about-clients  inline text-left">
      <h2 class=" ic-headline--xl mt-32">Hi, I am Marie a Designer that happens to have a passion for programming</h2>

      <p class="text--sm text-left">
        Thank you for stopping by! My name is Marie, I am a passionate programmer and visual artist based in Vienna, currently specializing in Frontend Development and UI-Design with Vue, React and Three.js. If you have a project that gives me the opportunity to learn or wanna chit-chat write me an email!
      </p>
      <div class="w-full flex mt-16 items-center about-text__section">
        <p class="inline text-small ">contact</p>
        <div class="w-full h-1 bg-white inline about-hr ml-2"></div>
      </div>
      <p class="text--sm text-left mt-16">
        <a href="mailto:dvorzak.marie@gmx.at?Subject=Hi!">email</a><a target="_blank" href="https://www.instagram.com/madvo.design/" class="ml-3">instagram</a>
      </p>

      <div class="w-full flex mt-16 items-center about-text__section">
        <p class="inline text-small ">clients I worked for & resume</p>
        <div class="w-full h-1 bg-white inline about-hr ml-2"></div>
      </div>



      <ul class="text--sm  about-text__resume mt-4">
        <li class="about-text__resume--emphasized">WILD <span>_2019 Development Intern</span></li>

        <li class="about-text__resume--emphasized"> CAMPAIGNING BUREAU <span>_2017/2018 Development/UI-Design Intern</span></li>
        <li class="about-text__resume--emphasized"> FIV AUSTRIA<span>_2015/2019 Wordpress</span></li>
        <li> Mediatechnology and Design<span>_2016/2019 @FH Hagenberg</span></li>
        <li> Internet Design & Graphic Communication<span>_2018/2019 @Plymouth University UK</span></li>
        <li> Graphische Bundes Lehr- und Versuchsanstalt <span>_2010/2015</span></li>
        <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/portrait.png">
      </ul>


    </div>
    <div class="realtive pin-r w-1/2 h-full text-center pin-t mt-32 ml-32 text-left">


    </div>

  </div>
  <?php require(dirname(__FILE__) . '/footer.php'); ?>
</section>