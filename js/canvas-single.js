/**
 *THREE.JS MODEL FOR BACKGROUND
 */


let vStart = new THREE.Vector2(0, 0);
let mesh = null;
let warpVector = null;
let warpVector2 = null;


var occlusionComposer, lightSphere,
    angle = 0,
    DEFAULT_LAYER = 0,
    OCCLUSION_LAYER = 1;

//****** letIABLES *******
let threeDObj;
let cube;
let copy;
let ringMesh;
let movement;
var loader = new THREE.TextureLoader();
let ObjVertices;
let starField;
let updateOnce = true;
// let updateNow = universal;
let positions;

//variables for image
let WIDTH;
let HEIGHT;
let returnArray = [];

const HEIGHT_AMPLIFIER = 0.7;//0.7
let starsGroup = new THREE.Object3D();
let countRotation = 0;
let step = 0;
let shaderMaterial;
let sphere;
let previousMorphTarget;
let morphTarget;
let imageHasLoaded = false;
let ctx;
let timer = Date.now();
let backgroundPlane = 0;//-9000
let addSpeed = 0;
let firstLoad = true;
let cameraDistance =640.0;
let farplane = ((cameraDistance-230) / 2.0) ;//(cameraDistance / 2.0) -90.0
let universal = document.getElementsByClassName("hidden-thumbnail")[0].innerHTML;

let raycaster = new THREE.Raycaster(); // create once
let mouse = new THREE.Vector2(); // create once
let uvPosition = Math.abs(Math.sin(timer / 5.0));
/**
 *render and camera
 */
let renderer = new THREE.WebGLRenderer({ canvas: document.getElementsByClassName('threejs-single')[0], alpha: true });
// renderer.setClearColor(0xffffff, 0);//default color for bg
renderer.setPixelRatio(window.devicePixelRatio / 2);//for higher density displays
let addtocanvas = 0;
let porportions = document.getElementsByClassName("canvas-container")[0];
renderer.setSize(porportions.offsetWidth, porportions.offsetHeight + addtocanvas); //set to window size
let scene = new THREE.Scene();
// let color = document.getElementsByClassName("wheel-item__content")[0].attributes.alt.nodeValue;
// scene.background = new THREE.Color( color );

// let colorValue = document.getElementById("grab-color").innerHTML;
// var colorValue = parseInt ( color.replace("#","0x"), 16 );
// var colored = new THREE.Color( colorValue );
// scene.background = new THREE.Color( "#000000");
// renderer.setClearColor(0xD1C8B7, 0);
// console.log(colored)


originalAspect = porportions.offsetWidth / porportions.offsetHeight;
let camera = new THREE.PerspectiveCamera(32, porportions.offsetWidth / (porportions.offsetHeight), 0.1, 1000); //smaller when further away
camera.position.set(0, 0, 20);
//camera.lookAt(scene.position);
camera.target = new THREE.Vector3(0, 0, 0);




window.addEventListener('resize', onWindowResize, false);

////////////////////////////////////////////////////////
//////// COMPOSER

let composer = new THREE.EffectComposer(renderer);

//Passes
let renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);
renderPass.renderToScreen = true;


let pass1 = new THREE.ShaderPass(THREE.VolumetericLightShader);
pass1.uniforms.tDiffuse = { value: null };
pass1.uniforms.lightPosition = { value: new THREE.Vector2(0.5, 0.5) };
pass1.uniforms.exposure = { value: 0.98 };
pass1.uniforms.decay = { value: 0.91 };
pass1.uniforms.density = { value: 0.5 };
pass1.uniforms.weight = { value: 0.1 };
pass1.uniforms.samples = {value: 50};

  pass1.renderToScreen = true;


  const bloomPass = new THREE.BloomPass(
    1.4,    // strength
    20,   // kernel size
    0.1,    // sigma ?
    556,  // blur render target resolution
  );
  //composer.addPass(bloomPass);

  const filmPass = new THREE.FilmPass(
    0.1,   // noise intensity
    0.0025,  // scanline intensity
    448,    // scanline count
    false,  // grayscale
  );
  filmPass.renderToScreen = true;

  composer.addPass(pass1);
  composer.addPass(filmPass);



pass1.renderToScreen = true;




let hiddenthumbnails = document.getElementsByClassName("hidden-thumbnail");
let modelArray = [];

image();
// scene1();
animate();

function image() {
    var image = new Image();
    //image.src = universal;
    image.src = universal;
    image.onload = function () {
      WIDTH = image.width;
      HEIGHT = image.height;
  
      var canvas = document.createElement('canvas');
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      var context = canvas.getContext('2d');
  
  
      console.log('image loaded');
      context.drawImage(image, 0, 0);
      data = context.getImageData(0, 0, WIDTH, HEIGHT).data;
      scene1();
    }
  }
  

function scene1() {

    // lights(scene);
    let bufferGeometry = new THREE.IcosahedronBufferGeometry(WIDTH / 2, 3);//20
  
  
  
    let plane = new THREE.IcosahedronBufferGeometry(WIDTH / 2, 3);
    plane.castShadow = true;
    plane.receiveShadow = true;
    var vertices = plane.attributes.position.array;
  
    for (i = 0, j = 2; i < returnArray.length; i += 4, j += 3) {
      vertices[j] = returnArray[i] * Math.random() * (8 - -0.2) + -0.2;// * HEIGHT_AMPLIFIER;
      if (returnArray[i] === 0) {
        vertices[j] = backgroundPlane;
      }
    }
    plane.dynamic = true;
    plane.computeFaceNormals();
    plane.computeVertexNormals();
  
    /////// MORPH TARGET
    morphTarget = new THREE.IcosahedronBufferGeometry(WIDTH / 2, 3);
  
    positions = morphTarget.attributes.position.array;
  
    var x, y, z, index;
    x = y = z = index = 0;
  
  
    for (i = 0, j = 2; i < returnArray.length; i += 4, j += 3) {
      positions[j] = plane.attributes.position.array[j]; //+ 190 * (Math.random() - 0.5) - step; //0
      step -= 0.005;
      x = x;
      z = z;
      y = y;
    }
  
    morphTarget.computeFaceNormals();
    morphTarget.computeVertexNormals();
  
    /// MORPH TARGET END
  
    var numVerts = vertices.length;
    // var sphereGeometry = new THREE.SphereBufferGeometry(50, 32, 32);
    var sphereGeometry = new THREE.IcosahedronBufferGeometry( 60, 5 );
    var sphereVerts = THREE.GeometryUtils.randomPointsInBufferGeometry(sphereGeometry, numVerts);
    sphere = new Float32Array(sphereVerts.length * 3);
    for (var v = 0; v < sphereVerts.length; v += 1) {
      // vertices[v] = sphereVerts[v];
      // sphere[v * 3 + 0] = sphereVerts[v].x  * Math.random() * (0.1 - -0.2) + -0.2;
      sphere[v * 3 + 0] = sphereVerts[v].x * (Math.random() - 0.9) - 5;
      sphere[v * 3 + 1] = sphereVerts[v].y * (Math.random() - 0.9) + 10;
      sphere[v * 3 + 2] = sphereVerts[v].z * (Math.random() - 0.9) + 10;
    }
    // sphereGeometry.position.x -= 0.5;
    sphereGeometry.scale.z = 0.2;
    console.log(modelArray[0])
    console.log(vertices.length)
    bufferGeometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
    bufferGeometry.addAttribute('morph0', new THREE.BufferAttribute(positions, 3));
  
    let material = new THREE.MeshNormalMaterial({ color: 0x888888, wireframe: false });
    shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        torus: { value: 1.0 },
        size: { value: 2.33 },
        u_resolution: { type: "v2", value: new THREE.Vector2(1.0, 1.0) },
        texture1: { type: "t", value: THREE.ImageUtils.loadTexture(universal) },
        tExplosion: {
          type: "t",
          value: THREE.ImageUtils.loadTexture(universal)
        },
        explosionValue: { type: "f", value: 8.0 },
        u_mouse: { type: "v2", value: new THREE.Vector2(100.0, 100.0) },
        time: { // float initialized to 0
          type: "f",
          value: 0.0
        },
        uvPosition: { type: "f", value: uvPosition },
        FARPLANE: {type: "f", value: farplane},
        DEPTH: {type: "f", value: 1.0},
  
      },
      vertexShader: document.getElementById('vertexShader').textContent,
      fragmentShader: document.getElementById('fragmentShader').textContent
    });
  
    // cube = new THREE.Points(bufferGeometry, shaderMaterial);
  
    cube = new THREE.Mesh(bufferGeometry, shaderMaterial);
    cube.matrixAutoUpdate = true;
    cube.updateMatrix();
  
  
    // mesh = new THREE.Points( bufferGeometry, shaderMaterial );
    cube.position.z = 440;//420
  
  
    cube.position.z = 480;
  
    scene.add(cube);
    let changeX = 0;
    let cubeBox = new THREE.Box3().setFromObject(cube);
    console.log(cubeBox.max.x)
    console.log(cubeBox.min.x)
  
  
  
  
  
  
  
    document.onmousemove = function (e) {
  
  
      mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
      mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
  
  
  
      // shaderMaterial.uniforms.u_mouse.value.x = e.pageX;
      // shaderMaterial.uniforms.u_mouse.value.y = e.pageY;
      changeX = e.pageX;
      if (e.pageX > renderer.domElement.width / 4) {
        cube.rotation.x -= (5 * 0.0001);
  
      } else {
        cube.rotation.x += (5 * 0.00001);
      }
    }
    shaderMaterial.uniforms.u_resolution.value.x = renderer.domElement.width;
    shaderMaterial.uniforms.u_resolution.value.y = renderer.domElement.height;
  
  
    // TweenMax.to(cube.rotation, 20, { y: '+= 0.8 * Math.random()' });
    var changeVariables = function () {
      alert('animation complete!');
    };
  
    let changeVariable = "+= 0.04 * Math.random()";
    TweenMax.to(cube.rotation, 4, {
      ease: Linear.easeNone,
      y: changeVariable, //move each box 500px to right
      // x: "+=" +(changeX/100),
      // repeat: -1,
    });

  
  
  
  
  
  
  
  
  
    camera.position.z = cameraDistance * Math.cos(THREE.Math.degToRad(1));
  
    // camera.lookAt(camera.target);
  
    shaderMaterial.uniforms.torus.value = 1.0;
    warpVector = new THREE.Vector3(0, 50, 0); //50
    warpVector2 = new THREE.Vector3(20, 120, 0);
  
  
    composer.render();
  }

function animate() {

    // setTimeout(() => {
        requestAnimationFrame(animate);
    // }, 1 / 200);

    render();

}

function render() {



   
        if (shaderMaterial) {
            shaderMaterial.uniforms.time.value = .00025 * (Date.now() - timer);
        }  
        composer.render();
}

function onWindowResize() {
    let porportions = document.getElementsByClassName("canvas-container")[0];
    camera.aspect = porportions.offsetWidth / (porportions.offsetHeight + addtocanvas);
    camera.updateProjectionMatrix();
    renderer.setSize(porportions.offsetWidth, porportions.offsetHeight + addtocanvas);
    shaderMaterial.uniforms.u_resolution.value.x = renderer.domElement.width;
    shaderMaterial.uniforms.u_resolution.value.y = renderer.domElement.height;
}
