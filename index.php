<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset='utf-8'>

    <title>Marie Dvorzak</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <meta name="description" content="I am a passionate programmer and visual artist based in Vienna, currently specializing in Frontend Development and UI-Design with Vue, React and Three.js">
    <meta name="author" content="Marie Dvorzak">

    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.js"></script>


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
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

<body class="">
    <div id="overlay"></div>
    <section id="main">

        <div class="absolute pin-t mt-16 mr-6 w-full z-50">
            <ul class="pin-r absolute mr-12 nav">
                <li class="nav-items text--xs inline mt-16 cursor-pointer ml-4 pinm-r">
                    <div class="burger-menu">
                        <span></span>
                        <span></span>
                    </div>
                    <ul class="inline toggleabout text--sm text--nav headline--sm texthover texthover-up pr-3" target="_blank" href="https://www.instagram.com/madvo.design/">
                        Marie Dvorzak
                        <li class="text-small">
                            Designer / Coder
                        </li>
                    </ul>
                    <ul class="nav-fast">
                        <li id="" class="inline toggleabout text--sm text--nav headline--sm texthover texthover-up" href="">
                            work
                        </li>
                        <li id="toggleabout" class="inline toggleabout text--sm text--nav headline--sm texthover texthover-up" href="">
                            <a href="<?php echo get_page_link(186); ?>">about</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>


        <!-- <div class="w-full flex wrap row mt-32 md:mt-2 xs:p-2 md:p-32 about z-50">

            <h2 class=" ic-headline--xl mt-32">hello stranger!</h2>
            <div class="about-clients  inline text-left">
                <div class="wheel-item__content__button absolute z-50 headline--sm">
                    <div class="more-button--sound w-16 h-4 inline-block mr-3"></div>
                    back

                </div>
                <p class="text--sm text-left">
                    Thank you for stopping by! My name is Marie, I am a passionate programmer and visual artist based in Vienna, currently specializing in Frontend Development and UI-Design with Vue, React and Three.js. If you have a project that gives me the opportunity to learn or wanna chit-chat write me an email!
                </p>
                <div class="w-full flex mt-16 items-center about-text__section">
                    <p class="inline">contact</p>
                    <div class="w-full h-1 bg-white inline about-hr ml-2"></div>
                </div>
                <p class="text--sm text-left mt-16">
                    <a href="mailto:dvorzak.marie@gmx.at?Subject=Hi!">email</a><a target="_blank" href="https://www.instagram.com/madvo.design/" class="ml-3">instagram</a>
                </p>

                <div class="w-full flex mt-16 items-center about-text__section">
                    <p class="inline">resume</p>
                    <div class="w-full h-1 bg-white inline about-hr ml-2"></div>
                </div>



                <ul class="text--sm  about-text__resume mt-4">
                    <li class="about-text__resume--emphasized">Development Intern at Wild in Vienna</li>

                    <li class="about-text__resume--emphasized"> Campaigning Bureau (Frontenddevelopment | UI/UX Design)</li>
                    <li class="about-text__resume--emphasized"> FIV Austria</li>
                    <li> Mediatechnology and Design (FH Upper Austria)</li>
                    <li> Courses from Internet Design & Graphic Communication (Plymouth University UK)</li>
                    <li> Graphische Bundes Lehr- und Versuchsanstalt Wien</li>
                </ul>


            </div>
            <div class="realtive pin-r w-1/2 h-full text-center pin-t mt-32 ml-32 text-left">


            </div>

        </div> -->


        <!-- ///////////////////////////////CONTROLS -->


        <div class=" pin-b m-auto flex content-center pr-32 pb-32 w-full fixed z-20 ">


            <div class=" mb-10 mr-3 -mt-5 m-auto controls__position align-center">
                <div class="controls__position-bar self-center">
                    <!--      <span id="nmbrLeft" class="navigation-number inline-block">00</span>-->


                    <div class=" pin-b pin-r relative mb-10 ml-12  -mt-5">
                        <!--            <span id="nmbrRight" class="navigation-number relative  inline-block">02</span>-->
                    </div>
                </div>
            </div>
        </div>



        <!-- ///////////////////////////////WHEEL -->
        <!--<div id="wheel-container" class="w-full h-screen flex z-10 absolute pin-t">-->
        <?php
        global $i;
        global $post;
        $args = array('category' => 2); //25 //2 for dev
        $work = get_posts($args);

        $args2 = array('category' => 30); //
        $about = get_posts($args2);

        ?>
        <div id="wheel-container" class="wheel-container">
            <div id="wheel" class="w-full self-center flex wheel z-10 absolute pin-t">
                <?php global $i;
                $i = 0; ?>
                <?php foreach ($work as $post) : setup_postdata($post); ?>
                    <a class="wheel-item z-30 w-full" href="<?php echo get_permalink($post->ID) ?>">
                        <!-- <div class="z-30 w-full"></div> -->
                            <div class="inline self-center w-full z-20">
                                <div class="img-remove">
                                </div>


                                <div class="text-right">
                                </div>
                                <h3 class="headline--xl">
                                    <?php the_title(); ?>
                                </h3>
                                <span>
                                    <span>
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
                                </span>
                            <!-- </div> -->
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
    wp_reset_postdata(); ?>






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
    <?php require(dirname(__FILE__) . '/footer.php'); ?>

</body>
<footer>
    <?php
    wp_enqueue_script('/js/main.js');
    ?>
</footer>

</html>