<?php
/**
 * Template Name: about page
 */

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset='utf-8'>

    <title>Marie Dvorzaks Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name='viewport' content='width=device-width'/>
    <meta name="description" content="">
    <meta name="author" content="Marie Dvorzak">

    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="http://mrdoob.github.com/three.js/build/three.min.js"></script>
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

<body>
<div class=" fixed pin-t mt-16 mr-6 w-full z-50">
    <!--    <h3 class="headline--sm absolute pin-l pin-t z-80 ml-12">MADVO.DESIGN</h3>-->
    <ul class="pin-r absolute mr-6">
        <!--        <li class="headline--sm inline mt-16 z-80 ml-12">MADVO.DESIGN</li>-->
        <!--        <li class="text--sm inline mt-16 cursor-pointer ml-4">all projects</li>-->
        <li class="text--xs inline mt-16 cursor-pointer ml-4 pinm-r">
            <h3 class="headline--sm inline mr-6">MADVO.DESIGN</h3>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">work</a>
            <a href="<?php echo get_page_link(186); ?>">about</a></li>
    </ul>
</div>
<?php
$page = get_page_by_title( 'about' );
$content = apply_filters('the_content', $page->post_content);
echo $content;
?>
<div id="main">
<div class="w-full h-full">


    <div class="">



        <div class="w-full flex wrap row mt-32 md:mt-2 xs:p-2 md:p-32 about">
            <h2 class="about-headline">HI THERE!</h2>
        <div class="relative shadow  about-me hidden md:block">
            <img src="http://localhost/wordpress/wp-content/uploads/2018/08/pp.jpg" alt="" class="" />
        </div>

            <div class="about-clients  inline text-left">
                <span class="text--xs text--strong ic-text--lg">- clients: </span><br>
            <h3 class="text--md text--uppercase text-left inline text-left relative">campaigning bureau<br>fiv-Austria</h3>
                <p class="text--sm text-left">
                    I am a 22 yo designer based in Vienna. One of my biggest professional and personal passions is finding ways to use the power of beautifully written code in the purpose of creative and innovative designs. If you have a project that gives me the oppurtunity to learn or wanna chit-chat write me an email!
                </p>
        </div>
            <div class="realtive pin-r w-1/2 h-full text-center pin-t mt-32 ml-32 text-left">


            </div>

        </div>




    </div>
</div>

</div>

<?php require(dirname(__FILE__) . '/footer.php'); ?>

</body>
<footer>
    <?php
    wp_enqueue_script('/js/main.js');
    ?>
</footer>
</html>