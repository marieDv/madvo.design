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
    frequenz: 2.8, //1.4 for wobble waves 0.2 for sublte rings 0.1 for extreme rings
    speed: 200, // + slower
    radius: 28,
    widthSeg: 30, //resolution x
    heightSeg: 30, // resolution y
    magnitude: 23,
    waveDepth: 0.2
};
var occlusionComposer, lightSphere,
    angle = 0,
    DEFAULT_LAYER = 0,
    OCCLUSION_LAYER = 1;

/**
 *render and camera
 */
let renderer = new THREE.WebGLRenderer({ canvas: document.getElementsByClassName('threejs')[0] });
renderer.setClearColor(0xffffff, 0);//default color for bg
renderer.setPixelRatio(window.devicePixelRatio);//for higher density displays
let addtocanvas = 0;
renderer.setSize(window.innerWidth, window.innerHeight + addtocanvas); //set to window size
let scene = new THREE.Scene();
originalAspect = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(32, window.innerWidth / (window.innerHeight + addtocanvas), 0.1, 1000); //smaller when further away
camera.position.set(0, 0, 200);

camera.lookAt(scene.position);
window.addEventListener('resize', onWindowResize, false);


//****** letIABLES *******
let threeDObj;
let cube;
let copy;
let ringMesh;
let movement;
var loader = new THREE.TextureLoader();
let ObjVertices;
let starField;
let updateNow = universal;


//variables for image
let WIDTH;
let HEIGHT;
let returnArray = [];
const SIZE_AMPLIFIER = 5;
const HEIGHT_AMPLIFIER = 0.01;
let starsGroup = new THREE.Group();


animation();

image();
scene1();
// init();

function image() {
    var image = new Image();
    image.src = "http://localhost/wordpress/wp-content/themes/wp-bootstrap_2/assets/cactus.png";
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

        // console.log(data);
        let alpha = [];
        // iterate over all pixels
        for (var i = 0, n = data.length; i < n; i += 4) {
            var red = data[i];
            var green = data[i + 1];
            var blue = data[i + 2];
            alpha[i] = data[i];
        }

        let j = 0;
        for (var i = 0; i < data.length; i += 1) {
            returnArray[j] = alpha[i];
            j++;
        }
        console.log(alpha)
        console.log(returnArray)

        scene1();
    }
}
function updateGeomData(vertices) {

    var radius = 280;

    for (var i = 0; i < vertices; i++) {

        var lat = Math.random() * 180 - 90;
        var lng = Math.random() * 360 - 180;

        var phi = (90.0 - lat) * Math.PI / 180.0;
        var theta = (360.0 - lng) * Math.PI / 180.0;
        var x = radius * Math.sin(phi) * Math.cos(theta);
        var y = radius * Math.cos(phi);
        var z = radius * Math.sin(phi) * Math.sin(theta);

        positions[i * 6 + 0] = 0;
        positions[i * 6 + 1] = 0;
        positions[i * 6 + 2] = 0;
        positions[i * 6 + 3] = x;
        positions[i * 6 + 4] = y;
        positions[i * 6 + 5] = z;

        colors[i * 6 + 0] = 1;
        colors[i * 6 + 1] = 1;
        colors[i * 6 + 2] = 1;
        colors[i * 6 + 3] = (x / radius) + 0.5;
        colors[i * 6 + 4] = (y / radius) + 0.5;
        colors[i * 6 + 5] = (z / radius) + 0.5;
    }
}
function scene1() {


    lights(scene);
    let geometry = new THREE.SphereGeometry(100, 40, 40);
    //     console.log(WIDTH + "height:" +HEIGHT)
    // let plane = new THREE.PlaneBufferGeometry(WIDTH * SIZE_AMPLIFIER, HEIGHT * SIZE_AMPLIFIER, WIDTH - 1, HEIGHT - 1);
    // let plane = new THREE.PlaneBufferGeometry(10, 10, 10 - 1, 10 - 1);
    let plane = new THREE.PlaneBufferGeometry(WIDTH, HEIGHT, WIDTH - 1, HEIGHT - 1);
    plane.castShadow = true;
    plane.receiveShadow = true;
    // console.log(plane.attributes.position.array)
    var vertices = plane.attributes.position.array;

    console.log(returnArray)
    // for (i = 0; i < returnArray.length; i++) {
    //     vertices[i] = returnArray[i] * 80;
    // }

    for (i = 0, j = 2; i < data.length; i += 4, j += 3) {
        vertices[j] = returnArray[i] * HEIGHT_AMPLIFIER;
        if (returnArray[i] === 0) {
            console.log("entering?")
            vertices[j] = -90000;
        }

    }

    plane.computeFaceNormals();
    plane.computeVertexNormals();





    // let material = new THREE.MeshNormalMaterial({ color: 0x888888 });
    let material = new THREE.PointsMaterial({
        depthWrite: true,
        color: 0xeb4034,
        // blending: THREE.AdditiveBlending
    })
    cube = new THREE.Mesh(plane, material);
    cube.matrixAutoUpdate = false;
    cube.updateMatrix();
    // cube.position.z = 460;
    // starField.position.z = 120;//-120
    starField = new THREE.Points(plane, material);
    let starFieldCopy = new THREE.Points(plane, material);
    let starFieldCopyCopy = new THREE.Points(plane, material);
    // starField.position.z = 160;//-120
    // scene.add(starField);
    starFieldCopy.position.z -= 2;
    starFieldCopyCopy.position.z -= 3;
    starsGroup.add(starField);
    starsGroup.add(starFieldCopy);
    starsGroup.add(starFieldCopyCopy);
    scene.add(starsGroup)
    starsGroup.rotation.y += 10;
    warpVector = new THREE.Vector3(0, 50, 0); //50
    warpVector2 = new THREE.Vector3(20, 120, 0);

    // scene.add(cube)




    // scene.add(cube);



    // load a resource
    // loader.load(
    //     // resource URL
    //     universal,

    //     // onLoad callback
    //     function (texture) {
    //         // in this example we create the material when the texture is loaded
    //         var material = new THREE.MeshStandardMaterial({
    //             map: texture,
    //             roughness: 1.0,
    //             flatShading: true,
    //         });
    //         cube = new THREE.Mesh(geometry, material);
    //         cube.material.map.needsUpdate = true;
    //         warpVector = new THREE.Vector3(0, 50, 0); //50
    //         warpVector2 = new THREE.Vector3(20, 120, 0);
    //         texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    //             texture.offset.set( 0, 0 );
    //             texture.repeat.set( 5, 5 );

    //         cube.geometry.dynamic = true;
    //         cube.material.needsUpdate = true;
    //         scene.add(cube);
    //     },

    //     // onProgress callback currently not supported
    //     undefined,

    //     // onError callback
    //     function (err) {
    //         console.error('An error happened.');
    //         let material = new THREE.MeshNormalMaterial({ color: 0xffff00 });
    //         cube = new THREE.Mesh(geometry, material);
    //         warpVector = new THREE.Vector3(0, 50, 0); //50
    //         warpVector2 = new THREE.Vector3(20, 120, 0);
    //         scene.add(cube);
    //     }
    // );




    renderer.render(scene, camera);
}

function addSphere(scene) {
    console.log("sphere")
    let geometry = new THREE.SphereGeometry(
        30,
        870,
        870);

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

    const lightOut = new THREE.AmbientLight("#fff", 0.05);//grey
    lightOut.position.set(40, 20, 40);
    const extraFromAbove = new THREE.DirectionalLight("#fff", 0.3);
    extraFromAbove.position.set(5, 12, -26);
    extraFromAbove.rotation.x -= 20;

    const infront = new THREE.DirectionalLight(0xFFFFFF, 0.5);
    infront.position.set(5, 12, 26);
    infront.rotation.x -= 20;

    var light = new THREE.AmbientLight(0x404040, 2.0); // soft white light
    scene.add(light);

    let helper = new THREE.DirectionalLightHelper(extraFromAbove, 15);
    // scene.add(helper);


    scene.add(lightOut); //ambient light
    scene.add(infront);
    scene.add(extraFromAbove);
}


function animation() {

    setTimeout(() => {

        if (updateNow !== universal) {

            // console.log(universal)
            loader.load(universal, function (tex) {
                // Once the texture has loaded
                // Asign it to the material
                tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
                tex.offset.set(0, 0);
                tex.repeat.set(5, 5);

                cube.material.map = tex;
                cube.material.map.needsUpdate = true;
                // scene.add(cube);
                updateNow = universal;
            });


        }
        // wave();
        cube.rotation.y += 0.0009 + 0.01 * Math.random();
        cube.rotation.z += 0.0007 + 0.01 * Math.random();
        // cube.position.x += 0.03;
        requestAnimationFrame(animation);

        // composer.render();
        renderer.render(scene, camera);
        // wave();

    }, 80);
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
