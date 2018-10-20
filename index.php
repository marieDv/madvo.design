<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset='utf-8'>

    <title>Marie Dvorzak</title>
<!--    <meta name="viewport" content="width=device-width, initial-scale=1.0">-->
<!--    <meta name='viewport' content='width=device-width'/>-->
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <meta name="description" content="I am a passionate programmer and visual artist based in Vienna, currently specializing in Frontend Development and UI-Design with Vue, React and Three.js">
    <meta name="author" content="Marie Dvorzak">

    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<!--    <script src="http://mrdoob.github.com/three.js/build/three.min.js"></script>-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>



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

<div class=" fixed pin-t mt-16 mr-6 w-full z-50">
    <ul class="pin-r absolute mr-12 nav">
        <li class="text--xs inline mt-16 cursor-pointer ml-4 pinm-r">
            <a class="text--sm pr-3 text--nav headline--sm texthover-up" target="_blank" href="https://www.instagram.com/madvo.design/">madvo<span class="emphasized">.</span>design&#160&#160|</a>
            <ul id="toggleabout" class="inline toggleabout text--sm text--nav headline--sm texthover texthover-up" href=""><li>a</li><li>b</li><li>o</li><li>u</li><li>t</li></ul>
        </li>
    </ul>
</div>
<!-- /////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////// STARTSCREEN -->


<div class="startscreen w-full h-screen relative z-50">
    <div class="w-full h-2 z-40 absolute pin-t pin-l">
        <div class="bg-white w-3 h-2 loading-screen absolute"></div>
    </div>

    <div class="absolute pin m-auto w-full h-32 text-center z-30 ">
    <h2 class="startscreen__title headline--md text--uppercase ic-headline--xl ic-headline-startscreen">madvo.design</h2>
    <h3 class="startscreen__title text--sm mt-2 ic-text--sm">Visual Design & Webdevelopment</h3>
        <h2 class="headline--md startscreen__title headline--md--low mt-6 ic-text--sm scan-count--percent">
<!--            <div class="w-12 h-6 z-40 pin-r pin-l  m-auto pr-32 absolute">-->
<!--<!--                <div class="w-12 border-white border-solid border-t-2 w-full opacity-25 h-2 mt-1 absolute"></div>-->
<!--                <div class="bg-white w-3 h-6 mt-3 loading-screen absolute mr-32"></div>-->
<!---->
<!--            </div>-->
            <span class="scan-count ml-9 text--md">0</span>
            %</h2>

    </div>
<!--        <canvas class="fixed w-full h-screen pin-t pointer-events-none threejs" id="threejs"></canvas>-->
</div>




    <div class="w-full flex wrap row mt-32 md:mt-2 xs:p-2 md:p-32 about z-50">

        <div class="wheel-item__content__button absolute z-50 headline--sm">
            <div class="more-button--sound w-16 h-4 inline-block mr-3"></div>
            close

        </div>
<!-- md:ml-32-->
        <h2 class=" ic-headline--xl mt-32">hi there!</h2>
<!--        <div class="relative shadow  about-me hidden md:block">-->
<!--            <img src="http://localhost/wordpress/wp-content/uploads/2018/08/pp.jpg" alt="" class="" />-->
<!--        </div>-->

        <div class="about-clients  inline text-left">
<!--            <span class="text--xs text--strong ic-text--lg">- clients: </span><br>-->
            <p class="text--sm text-left">
                Thank you for stopping by! My name is Marie, I am a passionate programmer and visual artist based in Vienna, currently specializing in Frontend Development and UI-Design with Vue, React and Three.js.  If you have a project that gives me the opportunity to learn or wanna chit-chat write me an email!
            </p>
            <div class="w-full flex mt-16 items-center about-text__section">
                <p class="inline">contact</p><div class="w-full h-1 bg-white inline about-hr ml-2"></div>
            </div>
            <p class="text--sm text-left mt-16">
                <a href="mailto:dvorzak.marie@gmx.at?Subject=Hiiii!">email</a><a target="_blank" href="https://www.instagram.com/madvo.design/" class="ml-3">instagram</a>
            </p>

            <div class="w-full flex mt-16 items-center about-text__section">
                <p class="inline">resume</p><div class="w-full h-1 bg-white inline about-hr ml-2"></div>
            </div>



            <ul class="text--sm  about-text__resume mt-4">
                <li class="about-text__resume--emphasized">> Campaigning Bureau (Frontenddevelopment | UI/UX Design)</li>
                <li class="about-text__resume--emphasized">> FIV Austria</li>
                <li>> Mediatechnology and Design (FH Upper Austria)</li>
                <li>> Courses from Internet Design & Graphic Communication (Plymouth University UK)</li>
                <li>> Graphische Bundes Lehr- und Versuchsanstalt Wien</li>
            </ul>


        </div>
        <div class="realtive pin-r w-1/2 h-full text-center pin-t mt-32 ml-32 text-left">


        </div>

    </div>

<!-- /////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////// STRIPES -->
<!--<div class="fixed pin-l pin-t flex align-left  h-16 mb-6 stripe__cont z-50">-->
<!--<div class="m-auto pin-b z-40 flex flex-column p-2 flex-row stripe__nav">-->
<!---->
<!--    <div class="stripe w-5 h-3 block mb-10 mr-10 stripe--active"></div>-->
<!--    <div class="stripe w-5 h-3 bg-grey block mb-10 mr-10"></div>-->
<!--    <div class="stripe w-5 h-3 bg-grey block mb-10 mr-10"></div>-->
<!--    <div class="stripe w-5 h-3 bg-grey block mb-10 mr-10"></div>-->
<!--    <div class="stripe w-5 h-3 bg-grey block mb-10 mr-10"></div>-->

<!--</div>-->
<!--</div>-->

<div class="fixed pin-r pin-b pin-l m-auto flex  h-16 mb-6 stripe__cont z-30">
    <div class="m-auto pin-b z-40 flex stripe__nav flex-wrap stripe__cont-p">
        <div class="navigation-number__box -mt-8 absolute flex wrap">
      <p><span id="nmbrLeft" class="navigation-number inline"><strong>01</strong></span>
          <span id="nmbrRight" class="navigation-number relative  inline"><strong>/04</strong></span></p>

        </div>
<!--        <span class="progress-line absolute h-1 w-1"></span>-->
        <div class="stripe w-3 h-5 inline mb-10 mr-10  z-10 stripe--active"></div>
        <div class="stripe w-3 h-5 bg-grey inline mb-10 mr-10 z-10 "></div>
        <div class="stripe w-3 h-5 bg-grey inline mb-10 mr-10 z-10 "></div>
        <div class="stripe w-3 h-5 bg-grey inline mb-10 mr-10 z-10 " style="margin-right: inherit !important;"></div>
        <div class="w-full h-1 absolute stripe__line"></div>
<!--<div class="w-full flex h-1 flex-row relative -mt-10">-->
<!--        <div class="w-3 h-3 bg-white absolute"></div>-->
<!--        <div class="w-3 h-3 bg-red absolute self-end"></div>-->
<!--</div>-->
<!--        <div class="stripe w-3 h-5 bg-grey inline mb-10 mr-10"></div>-->
<!--        <div class="w-32 h-3 loading-slides absolute"></div>-->
<!--        <div class="bg-white w-3 h-3  bg-white absolute mr-32 loading-slides-inner"></div>-->
        <!--    <p class="text--md absolute">dvorzak.marie@gmail.com</p>-->
    </div>
</div>

<!--<canvas class="fixed w-full pin-t h-screen pointer-events-none threejs" id="threejs"></canvas>-->




<!-- ///////////////////////////////CONTROLS -->
<div class="w-full controls fixed z-30 cursor-pointer">
    <button id="previous" class="h-10 m-auto text--xs  text-left absolute  pin-l pin-t pin-b texthover texthover-side">
        <li>p</li>
        <li>r</li>
        <li>e</li>
        <li>v</li>
        <li>i</li>
        <li>o</li>
        <li>u</li>
        <li>s</li>
    </button>
    <button id="next" class=" h-10 m-auto text--xs text-right absolute  pin-r pin-t pin-b texthover texthover-side">

            <li>n</li>
            <li>e</li>
            <li>x</li>
            <li>t</li>

<!--        <span class="more-button--sound more-button--sound-next absolute h-1 w-12"></span>-->
    </button>
</div>

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
    $args = array('category' => 25);//25 //2 for dev
    $work = get_posts( $args );

    $args2 = array('category' => 30);//
    $about = get_posts( $args2 );

    ?>


    <div id="wheel" class="w-full self-center flex wheel z-10 absolute pin-t">

            <?php foreach ( $work as $post ) : setup_postdata( $post ); ?>

        <div class="wheel-item z-30 w-full">
                    <div class="inline self-center w-full z-20">
                        <div class="img-remove">
                        </div>


                            <div class="text-right">
                            </div>
                            <?php the_content(); ?>
                        </div>

        </div>
            <?php endforeach;
            wp_reset_postdata();?>
    </div>
    <?php foreach ( $work as $post ) : setup_postdata( $post ); ?>
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
wp_reset_postdata();?>






<div class="pixie absolute pin-t z-50">

</div>

<div class="container--fluid pos--absolute pos--buttons">


        <?php
        global $i;
        global $post;
        $args = array('category' => 25);//25 //2 for dev
        $work = get_posts( $args );

        $argse2 = array('category' => 30);
        $about = get_posts( $args2 );

        ?>
        <div class="project__cont"></div>
</div>








<?php require(dirname(__FILE__) . '/footer.php'); ?>
</section>
</body>
<footer>
    <?php
    wp_enqueue_script('/js/main.js');
    ?>
</footer>
</html>