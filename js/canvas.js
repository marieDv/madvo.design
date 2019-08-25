/**
 *THREE.JS MODEL FOR BACKGROUND
 */

let time = 0;
let vStart = new THREE.Vector2(0, 0);
let mesh = null;
let warpVector = null;
let warpVector2 = null;
let cRot = 0.3;
let next = false;
let play = true;
let config = {
    frequenz: 3.8, //1.4 for wobble waves 0.2 for sublte rings 0.1 for extreme rings
    speed: 200, // + slower
    radius: 28,
    widthSeg: 30, //resolution x
    heightSeg: 30, // resolution y
    magnitude: 23,
    waveDepth: 0.2
};


/**
 *render and camera
 */
let renderer = new THREE.WebGLRenderer({ canvas: document.getElementsByClassName('threejs')[0] });
renderer.setClearColor(0xffffff, 0);//default color for bg
renderer.setPixelRatio(window.devicePixelRatio);//for higher density displays
let addtocanvas = 0;
renderer.setSize(window.innerWidth, window.innerHeight + addtocanvas); //set to window size


let scene = new THREE.Scene();
// scene.background = new THREE.Color( 'skyblue' );


originalAspect = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(32, window.innerWidth / (window.innerHeight + addtocanvas), 0.1, 1000); //smaller when further away
// camera.position.z = -10;
camera.position.set(0, 0, 200);

// camera.lookAt(scene.position);
window.addEventListener('resize', onWindowResize, false);


//****** letIABLES *******
let threeDObj;
let cube;
let copy;
let ringMesh;
let movement;
var loader = new THREE.TextureLoader();
let ObjVertices;
let updateNow = universal;
scene1();

animation();


function scene1() {

    lights(scene);
    let geometry = new THREE.SphereGeometry(100, 5, 5);




    // load a resource
    loader.load(
        // resource URL
        universal,

        // onLoad callback
        function (texture) {
            // in this example we create the material when the texture is loaded
            var material = new THREE.MeshStandardMaterial({
                map: texture,
                roughness: 1.0,
                flatShading: true,
            });
            cube = new THREE.Mesh(geometry, material);
            cube.material.map.needsUpdate = true;
            warpVector = new THREE.Vector3(0, 50, 0); //50
            warpVector2 = new THREE.Vector3(20, 120, 0);
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.offset.set( 0, 0 );
                texture.repeat.set( 5, 5 );

            cube.geometry.dynamic = true;
            cube.material.needsUpdate = true;
            scene.add(cube);
        },

        // onProgress callback currently not supported
        undefined,

        // onError callback
        function (err) {
            console.error('An error happened.');
            let material = new THREE.MeshNormalMaterial({ color: 0xffff00 });
            cube = new THREE.Mesh(geometry, material);
            warpVector = new THREE.Vector3(0, 50, 0); //50
            warpVector2 = new THREE.Vector3(20, 120, 0);
            scene.add(cube);
        }
    );









    // addSphere(scene);

    // const composer = new THREE.EffectComposer(renderer);
    // composer.addPass(new THREE.RenderPass(scene, camera));
  
    // const bloomPass = new THREE.BloomPass(
    //     1,    // strength
    //     25,   // kernel size
    //     4,    // sigma ?
    //     256,  // blur render target resolution
    // );
    // composer.addPass(bloomPass);
  
    // const filmPass = new THREE.FilmPass(
    //     0.35,   // noise intensity
    //     0.025,  // scanline intensity
    //     648,    // scanline count
    //     false,  // grayscale
    // );
    // filmPass.renderToScreen = true;
    // composer.addPass(filmPass);




    renderer.render(scene, camera);
}

function addSphere(scene) {
    console.log("sphere")
    let geometry = new THREE.SphereGeometry(
        30,
        870,
        870);
    // "#151628"
    // let mat = new THREE.MeshPhongMaterial({
    //     color: new THREE.Color(0x0F0F13),
    //     transparent: true,
    //     shininess: 2,
    //     alphaTest: 0.5,
    //     opacity: 0.6,
    // });
    let mat = new THREE.MeshNormalMaterial();
    mesh = new THREE.Mesh(geometry, mat);
    mesh.castShadow = true;
    mesh.receiveLights = true;
    mesh.geometry.dynamic = true;
    mesh.material.needsUpdate = true;
    // mesh.scale.set(0.4, 0.4, 0.4);
    mesh.rotation.x = 30;
    scene.add(mesh);
    console.log(mesh)
    warpVector = new THREE.Vector3(0, 50, 0); //50
    warpVector2 = new THREE.Vector3(20, 120, 0);
}

function render() {
}

function lights(scene) {
    // const lightIn = new THREE.PointLight("#b7bcc9", 2, 0.0, 0.01);
    // lightIn.position.set(-110, -100, -190);
    // const lightFront = new THREE.DirectionalLight(0xffffff, 0.2);
    // lightFront.position.set(3, 13, 50);
    const lightOut = new THREE.AmbientLight("#4c4971", 0.05);//grey
    lightOut.position.set(40, 20, 40);
    // const rimLightLu = new THREE.DirectionalLight(0xB7BCE2, 1);
    // rimLightLu.position.set(-3, -2, -5);
    // rimLightLu.rotation.x = 89.5;
    // rimLightLu.rotation.z -= 3;
    // const rimLightMo = new THREE.DirectionalLight(0xF7F7F7, 3);
    // rimLightMo.position.set(4, 10, 2);
    // rimLightMo.rotation.x = 89.5;
    const extraFromAbove = new THREE.DirectionalLight("#ff9900", 1.1);
    extraFromAbove.position.set(5, 12, -26);
    extraFromAbove.rotation.x -= 20;
    // extraFromAbove.rotation.z -= 20;
    const infront = new THREE.DirectionalLight(0xB7BCC9,1.8);
    infront.position.set(5, 12, 26);
    infront.rotation.x -= 20;

    let helper = new THREE.DirectionalLightHelper(extraFromAbove, 15);
    // scene.add(helper);


    scene.add(lightOut); //ambient light
    // scene.add(lightFront); //hard light from right top
    // scene.add(rimLightLu);
    // scene.add(rimLightMo);
    scene.add(infront);
    scene.add(extraFromAbove);
}


function animation() {

    setTimeout(() => {

        if (updateNow !== universal) {
            console.log("change")
            // console.log(universal)
            loader.load(universal, function (tex) {
                // Once the texture has loaded
                // Asign it to the material
                tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
                tex.offset.set( 0, 0 );
                tex.repeat.set( 5, 5 );

                cube.material.map = tex;
                cube.material.map.needsUpdate = true;
                scene.add(cube);
                updateNow = universal;
            });


        }
        wave();
        cube.rotation.y += 0.0009 + 0.01 *Math.random();
        cube.rotation.z += 0.0007 + 0.01 *Math.random();
        // cube.position.x += 0.03;
        requestAnimationFrame(animation);
        renderer.render(scene, camera);
        // wave();

    }, 80);

    // setTimeout(function () {
    //     play = false;
    // }, 5300);

    // let next = document.getElementById("next");
    // next.addEventListener("click", function () {
    //     mesh.position.x = -9;
    // });

    // if (play) {
    //     setTimeout(function () {


    //         wave();


    //         renderer.render(scene, camera);
    //         requestAnimationFrame(animation);
    //     }, 1000 / 30);
    // }
}
/**
 * wave animation
 */
function wave() {
    const { vertices } = cube.geometry;
    const { frequenz, speed, radius, magnitude, waveDepth } = config;

    for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i];
        const dist = v.distanceTo(warpVector);
        let waveToUse = (0.8 + (waveDepth * cRot) * Math.sin(dist / -frequenz + (time / speed * magnitude))) * radius;

        v.normalize().multiplyScalar(waveToUse);

    }

    cube.geometry.verticesNeedUpdate = true;
    cube.geometry.computeVertexNormals();
    time++;
}


function onWindowResize() {

    camera.aspect = window.innerWidth / (window.innerHeight + addtocanvas);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight + addtocanvas);

}
