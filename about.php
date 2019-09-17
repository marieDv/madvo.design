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
<img id="arrows" alt="cursor-image-view-ring" src="<?php bloginfo('stylesheet_directory'); ?>/assets/arrows.png">

<div class="cursor cursor--small"></div>
<canvas class="cursor cursor--canvas cursor--canvas-about" resize></canvas>
<section class="single about">
  <div class=" absolute pin-t mt-16 mr-6 w-full z-50">
    <ul class="pin-r absolute mr-12 nav">
      <li class="nav-items text--xs inline mt-16 cursor-pointer pinm-r">
      <a class="burger-menu " href="<?php echo get_home_url() ?>">
        <!-- <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/close.png"> -->
      </a>
        <!-- <ul class="inline toggleabout text--sm text--nav headline--sm texthover texthover-up pr-3" target="_blank" href="https://www.instagram.com/madvo.design/">
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
          <a href="<?php echo get_page_link(780); ?>">about</a>
          </li>
        </ul> -->
      </li>
    </ul>
    <div id="info-ring" class="info-ring">
  
      <!-- <img id="" alt="about me ring" class="" src="<?php bloginfo('stylesheet_directory'); ?>/assets/info-ring.png"> -->
      <!-- <a target="_blank" href="https://www.instagram.com/madvo.design/" class="left-link">instagram</a>
      <a class="left-link" href="mailto:dvorzak.marie@gmx.at?Subject=Hi!">e-mail</a> -->
    </div>
  </div>

  <div class="w-full flex wrap row mt-32 md:mt-2 xs:p-2 md:p-32 about ">
      <img alt="me" id="portrait" src="<?php bloginfo('stylesheet_directory'); ?>/assets/derpme.jpg">
    <div class="about-clients  inline text-left">
    <h2 class="ic-headline--xl-xl">Hey there, I am <a id="toggleFace">Marie</a> a Digital Designer with a passion for coding!</h2>
    <h2 id="trigger1" class=" ic-headline--xl mt-32 info-section">Right now I am searching for a job as <strong>UI-Designer</strong> in an innovative team that is open to new ideas and coffee breaks. Mainly because I need money to finance my passion in food and photography (and that one’s real pricy), but also because I sincerely love to create concepts for websites and applications. I like things that are well designed and talk about them at any chance. Asides from that I spend my free time looking at modern art, shopping for plants and defending human rights.
</h2>
      <p class="text--sm text-left">
        <!-- ... based in Vienna, currently specializing in Frontend Development and UI-Design with Vue, React and Three.js. If you have a project that gives me the opportunity to learn or wanna chit-chat write me an email! -->
        <!-- Welcome to my web page! Pretty cool huh? I am a Visual artist from Vienna. Right now I am searching for a job as <strong>UI-Designer</strong> in an innovative team that is open to new ideas and coffee breaks. Mainly because I need money to finance my passion in food and photography (and that one’s real pricy), but also because I sincerely love to create concepts for websites and applications. I like things that are well designed and talk about them A LOT. Asides from that I spend my free time looking at modern art, shopping for plants and defending human rights 🌈. -->
      </p>



      <!-- <div class="w-full flex mt-16 items-center about-text__section">
        <p class="inline text-small ">companies I worked for & resume</p>
        <div class="w-full h-1 bg-white inline about-hr ml-2"></div>
      </div> -->

      <ul class="text--sm  about-text__resume mt-4">
        <li class="about-text__resume-li about-text__resume--emphasized">WILD <span>2019 Development Intern</span></li>

        <li class="about-text__resume-li about-text__resume--emphasized"> Campaigning Bureau <span>2017/2018 Development/UI-Design Intern</span></li>
        <li class="about-text__resume-li about-text__resume--emphasized"> FIV Austria<span>2015/2019 Wordpress</span></li>
        <li class="about-text__resume-li"> BSc Mediatechnology and Design<span>2016/2019 @FH Hagenberg</span></li>
        <li class="about-text__resume-li"> Internet Design & Graphic Communication<span>2018/2019 @Plymouth University UK</span></li>
        <li class="about-text__resume-li"> Graphische Bundes Lehr- und Versuchsanstalt <span>2010/2015</span></li>



      </ul>
 
    </div>

  </div>
  <div id="trigger3">TRIGGER</div>
  <div id="" class="about-swiper about-wheel">
    <!-- <h3 class="ic-headline--xl-xl">What I've done so far</h3> -->
  <div id="animate3" class="swiper-container about-container">
    <div id="" class="aboutOverview swiper-wrapper">
      <div class="swiper-slide about-slide single-slide about-text__resume-li about-text__resume--emphasized">Wild<p>2019</p><span class="text--sm"> 4 month Development Intern</span></div>
      <div class="swiper-slide about-slide single-slide about-text__resume-li about-text__resume--emphasized">FH Hagenberg<p>2016 - 2019</p><span>BSc in Mediatechnology and Design</span></div>
      <div class="swiper-slide about-slide single-slide about-text__resume-li about-text__resume--emphasized"> Plymouth<br>University UK<p>2018/2019</p><span>Exchange semester <br> Internet Design & Graphic Communication</span></div>

      <div class="swiper-slide about-slide single-slide about-text__resume-li about-text__resume--emphasized"> Campaigning <br>Bureau <p>2017 / 2018</p><span>Development/UI-Design Intern</span></div>
      <div class="swiper-slide about-slide single-slide about-text__resume-li about-text__resume--emphasized"> FIV Austria <p>2015/2019</p><span>Freelance Content Manager in Wordpress</span></div>
      <div class="swiper-slide about-slide single-slide about-text__resume-li about-text__resume--emphasized"> Graphische<p>2010/2015</p><span>Higher school certificate in <strong>Graphicdesign</strong><br> @ Die Graphische in Vienna</span></div>

    </div>
  </div>
  </div>
  <div class="about-clients resume-section">
  <span class="ic-headline--xl">My former internships gave me the opportunity to learn how to program and design from some of the leading companies in Austria and now I am more than eager to use that to make your projects awesome! 💥</span>
        <a href="<?php bloginfo('stylesheet_directory'); ?>/assets/dvorzak_marie_resume.pdf" download>Download Resume</a>
        </div>

  <div class="text--sm text-left mt-16 contact-section">
    <p>Let’s create <strong>something amazing</strong> together!</p>
   <div> <a href="mailto:dvorzak.marie@gmx.at?Subject=Hi!"><strong>dvorzak.marie@gmail.com</strong></a><a target="_blank" href="https://www.instagram.com/madvo.design/" class="ml-3">instagram</a></div>
  </div>

  <?php require(dirname(__FILE__) . '/footer-single.php'); ?>
</section>