<footer class="footer">
        <!-- <div>
                <p>@ Marie Dvorzak</p>
                <span class="text-small">Designer & Coder</span>
        </div> -->
        <a class="bottomNav work active" href="<?php echo get_home_url() ?>">Work</a>
        <a class="bottomNav" href="<?php echo get_page_link(780); ?>">About</a>
        <a class="bottomNav" href="mailto:dvorzak.marie@gmx.at?Subject=Hi!">contact</a>
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/107/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/utils/Draggable.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.2/paper-full.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js"></script>


<script id="vertexShader" type="x-shader/x-vertex">

 
////// START vertexShader

  attribute vec3 morph0;

  uniform float torus;
  uniform float size;

  varying vec2 vUv;
  varying vec4 vColor;


  void main() {
        vUv = uv;



gl_Position =   projectionMatrix * 
                modelViewMatrix * 
                vec4(position,1.0);

    gl_PointSize = size;

    vec3 morphed = vec3( 0.0 , 0.0 , 0.0 );
    morphed += ( morph0 - position ) * torus;
    morphed += position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );

  }
</script>

<script id="fragmentShader" type="x-shader/x-fragment">
        uniform sampler2D texture1;

varying vec2 vUv;

void main() {
    gl_FragColor = texture2D(texture1, vUv); // Displays Nothing
    //gl_FragColor = vec4(0.5, 0.2, 1.0, 1.0); // Works; Displays Flat Color
}
</script>






<script>
        var universal = "http://www.mariedvorzak.at/wp-content/uploads/2019/09/cactus-low-low.png";
        var universalIndex = 0;
</script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/EffectComposer.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/RenderPass.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/ShaderPass.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/CopyShader.js"></script>
<!-- <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/SepiaShader.js"></script> -->
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/VolumetericLightShader.js"></script>

<!-- <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/AdditiveBlendingShader.js"></script> -->
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/GeometryUtils.js"></script>

<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/canvas.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/skew.js"></script>