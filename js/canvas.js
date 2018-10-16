var time = 0;
var vStart = new THREE.Vector2(0, 0);
var mesh = null;
var wavePlane = null;
var warpVector = null;
var warpVector2 = null;
var cRot = 0.3;
var tRot = 0.8;
var mouseTimer = 0;
var next = false;
var play= true;
var config = {
    frequenz: 0.3, //1.4 for wobble waves 0.2 for sublte rings 0.1 for extreme rings
    speed: 170, // + slower
    radius: 28,
    widthSeg:100, //resolution x
    heightSeg: 100, // resolution y
    magnitude:12,
    waveDepth: 0.01
};





//****** RENDERER and CAMERA *******
var renderer = new THREE.WebGLRenderer({canvas: document.getElementsByClassName('threejs')[0], antialias: true});

renderer.setClearColor(0x1e1e1e);//default color for bg
renderer.setPixelRatio(window.devicePixelRatio);//for higher density displays

var addtocanvas = 0;
renderer.setSize(window.innerWidth, window.innerHeight + addtocanvas); //set to window size
var scene = new THREE.Scene();


originalAspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(3.2, window.innerWidth / (window.innerHeight + addtocanvas), 0.1, 1000); //smaller when further away
camera.position.z = 150;
camera.lookAt(scene.position);
window.addEventListener('resize', onWindowResize, false);


//****** VARIABLES *******
var threeDObj;
var cube;
var copy;
var ringMesh;
var movement;

var ObjVertices;

scene1();
// renderer.render(scene, camera);
animation();


function scene1() {

    lights(scene);
    addSphere(scene);


}
function addSphere(scene){

    var geometry = new THREE.SphereGeometry(
        50,
        170,
       170);
    "#151628"
    var mat = new THREE.MeshPhongMaterial({
        color: new THREE.Color(0x0F0F13),
        transparent: true,
        shininess: 2,
        // flatShading: true,
        alphaTest: 0.5,
        opacity: 0.6,
    });

    mesh = new THREE.Mesh(geometry, mat);
    mesh.castShadow = true;
    mesh.receiveLights = true;
    mesh.geometry.dynamic = true;
    mesh.material.needsUpdate = true;
    mesh.scale.set(0.4, 0.4, 0.4);
    mesh.rotation.x = 30;
    // mesh.position.y = -9;
    scene.add(mesh);

    warpVector = new THREE.Vector3(0, 50, 0); //50
    warpVector2 = new THREE.Vector3(20, 120, 0);
}

function render() {
}

function lights(scene){
    const lightIn = new THREE.PointLight("#b7bcc9", 2, 0.0, 0.01);
    lightIn.position.set(-110,-100,-190);
    const lightFront = new THREE.DirectionalLight( 0xffffff, 0.2 );
    lightFront.position.set(3,13,50);
    const lightOut = new THREE.AmbientLight( "#4c4971", 5.2 );//grey
    lightOut.position.set(40,20,40);
    const rimLightLu = new THREE.DirectionalLight( 0xB7BCE2, 1 );
    rimLightLu.position.set(-3, -2, -5);
    rimLightLu.rotation.x = 89.5;
    rimLightLu.rotation.z -= 3;
    const rimLightMo = new THREE.DirectionalLight( 0xF7F7F7, 3 );
    rimLightMo.position.set(4, 10, 2);
    rimLightMo.rotation.x = 89.5;
    // rimLightMo.rotation.z -= 3;
    const extraFromAbove = new THREE.DirectionalLight( 0xB7BCC9, 0.6 );
    extraFromAbove.position.set(5,14,16);
    extraFromAbove.rotation.x -= 20;
    extraFromAbove.rotation.z -= 20;

    let helper = new THREE.DirectionalLightHelper( lightFront, 15 );
    //  scene.add(helper);



    // scene.add(lightIn);
    scene.add(lightOut); //ambient light
    scene.add(lightFront); //hard light from right top
    scene.add(rimLightLu);
    scene.add(rimLightMo);
    scene.add(extraFromAbove);
}


function animation() {
    setTimeout(function() {
            play=false;
    }, 5300);

    let next = document.getElementById("next");
    next.addEventListener("click", function(){
        mesh.position.x = -9;
    });

    if(play){
    setTimeout(function() {


        wave();





        renderer.render(scene, camera);
        requestAnimationFrame(animation);
    }, 1000 / 30);}
}

function wave(){
    const { vertices } = mesh.geometry;
    const { frequenz, speed, radius, magnitude, waveDepth } = config;

    for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i];
        const dist = v.distanceTo(warpVector);
        let waveToUse = (0.8 + (waveDepth*cRot) * Math.sin(dist / -frequenz + (time/speed*magnitude))) * radius;

        v.normalize().multiplyScalar(waveToUse);

    }

    mesh.geometry.verticesNeedUpdate = true;
    mesh.geometry.computeVertexNormals();
    // mesh.geometry.computeFaceNormals();

    time++;
}


function onWindowResize() {

    camera.aspect = window.innerWidth / (window.innerHeight + addtocanvas);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight + addtocanvas);

}
