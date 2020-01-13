<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset='utf-8'>

    <title>Marie Dvorzak</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <meta name="description" content="I am a passionate programmer and visual artist based in Vienna, currently specializing in Frontend Development and UI-Design with Vue, React and Three.js">
    <meta name="author" content="Marie Dvorzak">

    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.js"></script> -->


    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"> -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" rel="stylesheet">
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
<body class="">
    <div class="cursor cursor--small"></div>
    <canvas class="cursor cursor--canvas" resize></canvas>
    <!-- <img alt="cursor-image" id="view-ring" src="<?php bloginfo('stylesheet_directory'); ?>/assets/view-ring.png"> -->
    <img id="view-ring" alt="cursor-image-view-ring" src="<?php bloginfo('stylesheet_directory'); ?>/assets/view-ring.png">
    <img id="arrows" alt="cursor-image-view-ring" src="<?php bloginfo('stylesheet_directory'); ?>/assets/arrows.png">
    <canvas class="threejs"></canvas>
    <div id="overlay"></div>
    <section id="main">
        <div class="absolute pin-t mt-16 mr-6 w-full z-50">
            <ul class="pin-r absolute mr-12 nav">
                <li class="nav-items text--xs inline cursor-pointer ml-4 pinm-r">
                    <ul class="name inline toggleabout text--sm text--nav headline--sm texthover texthover-up pr-3" target="_blank" href="https://www.instagram.com/madvo.design/">
                        <!-- Marie Dvorzak -->
                        <img id="" alt="about me ring" class="info-ring" src="<?php bloginfo('stylesheet_directory'); ?>/assets/info-ring.png">
                        <li class="header-nav">
                            <a class="bottomNav work active" href="<?php echo get_home_url() ?>">Work</a>
                            <a class="bottomNav" href="<?php echo get_page_link(780); ?>">About</a>
                            <a class="bottomNav" href="mailto:mariedvorzak@gmail.com?Subject=Hi!">contact</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- ///////////////////////////////CONTROLS -->


        <div class=" pin-b m-auto flex content-center pr-32 pb-32 w-full fixed z-20 ">
            <div class=" mb-10 mr-3 -mt-5 m-auto controls__position align-center">
                <div class="controls__position-bar self-center">
                    <div class=" pin-b pin-r relative mb-10 ml-12  -mt-5">
                    </div>
                </div>
            </div>
        </div>


        <!-- ///////////////////////////////WHEEL -->
        <?php
        global $i;
        global $post;
        $args = array('category' => 25, 'posts_per_page' => -1,); ///25 //2 for dev
        $work = get_posts($args);

        $args2 = array('category' => 30); ///
        $about = get_posts($args2);

        ?>
        <div id="wheel-container" class="wheel-container swiper-container">
            <div id="wheel" class="wheel w-full self-center flex z-10 absolute pin-t swiper-container swiper-wrapper">
                <?php global $i;
                $i = 0; ?>
                <?php foreach ($work as $post) : setup_postdata($post); ?>
                    <a class="wheel-item z-30 w-full wheel swiper-slide" href="<?php echo get_permalink($post->ID) ?>">
                        <p class="hidden-thumbnail">
                            <?php if (has_post_thumbnail($post->ID)) : ?>
                                <?php $image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail'); ?>
                                <?php echo $image[0]; ?>

                            <?php endif; ?>
                        </p>
                        <div class="inline self-center w-full z-20 swiper-text">
                            <div class="img-remove">
                            </div>


                            <div class="text-right">
                            </div>
                            <h3 class="headline--xl">
                                <?php the_title(); ?>
                            </h3>
                            <span class="text-subheadline">
                                <span class="text-indicator">
                                    <?php
                                        $i += 1;
                                        echo "0" . $i . " "; ?>
                                </span>
                                <?php $posttags = get_the_tags();
                                    if ($posttags) {
                                        foreach ($posttags as $tag) {
                                            echo $tag->name . ' ';
                                        }
                                    }
                                    ?>
                                <!-- <button class="button__view">view project</button> -->
                            </span>
                        </div>
                    </a>

                <?php endforeach;
                wp_reset_postdata(); ?>
            </div>
        </div>
        <?php foreach ($work as $post) : setup_postdata($post); ?>
            <div class="fixed z-60  mt-16 pin-b ml-32 mb-4 ">
            </div>


            <div class="wheel__background w-full fixed pin m-auto opacity-25 text-center inline-block">
                <div class=" opacity-25 w-screen bg-green inline block ">
                    <h2 class="headline--xxl background-title">
                        SOUND-SPOTTER TRANS-AUSTRIA NEX-ONLINE BOARDER-WORLD
                    </h2>
                </div>
            </div>
        <?php endforeach;
        ?>






        <div class="pixie absolute pin-t z-50">

        </div>

        <div class="container--fluid pos--absolute pos--buttons">



            <?php
            global $i;
            global $post;
            $args = array('category' => 25); //25 //2 for dev
            $work = get_posts($args);

            $argse2 = array('category' => 30);
            $about = get_posts($args2);

            ?>
            <div class="project__cont"></div>
        </div>








    </section>
    <!-- <div class="banner">
        <div class="banner-container">
            <p>
                Welcome to my web page! Pretty cool huh? My name is Marie I am a Visual artist from Vienna. Right now I am searching for a job as a UI-Designer in a cool team that is open to new ideas and coffee breaks (It’s a cliche I like to confirm to). Mainly because I need money to finance my passion in food and photography(and that one’s real pricy), but also because I sincerely love to create concepts for websites and applications. I like things that are well designed and talk about them A LOT. It’s always an amazing conversation starter with me if you need one. :) If you are still reading this you are either my mom (Hi Mom!), or really interested in employing me. In this case you can either go to the about page to find out more about my education and former work places or enjoy this summary: I graduated from „Die Graphische“ in Vienna as Graphicdesigner. Afterwards I chose to study „Mediatechnology and -design“ at „FH-Oberösterreich“. During that time I did internships as a Designer and Coder for companies like Campaigning Bureau and Wild. Asides from that I am very interested in Art and defending basic human rights. 🌈
                Welcome to my web page! Pretty cool huh? My name is Marie I am a Visual artist from Vienna. Right now I am searching for a job as a UI-Designer in a cool team that is open to new ideas and coffee breaks (It’s a cliche I like to confirm to). Mainly because I need money to finance my passion in food and photography(and that one’s real pricy), but also because I sincerely love to create concepts for websites and applications. I like things that are well designed and talk about them A LOT. It’s always an amazing conversation starter with me if you need one. :) If you are still reading this you are either my mom (Hi Mom!), or really interested in employing me. In this case you can either go to the about page to find out more about my education and former work places or enjoy this summary: I graduated from „Die Graphische“ in Vienna as Graphicdesigner. Afterwards I chose to study „Mediatechnology and -design“ at „FH-Oberösterreich“. During that time I did internships as a Designer and Coder for companies like Campaigning Bureau and Wild. Asides from that I am very interested in Art and defending basic human rights. 🌈
            </p>
        </div>
    </div> -->

    <?php require(dirname(__FILE__) . '/footer.php'); ?>

</body>
<footer>
    <?php
    wp_enqueue_script('/js/main.js');
    ?>
</footer>

</html>