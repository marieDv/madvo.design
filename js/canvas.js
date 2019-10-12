/**
 *THREE.JS MODEL FOR BACKGROUND
 */


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
let updateNow = universal;
let positions;

//variables for image
let WIDTH;
let HEIGHT;
let returnArray = [];

const HEIGHT_AMPLIFIER = 0.5;//0.7
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
let cameraDistance = 740;


let uvPosition = Math.abs(Math.sin(timer / 5.0)) ;//Math.abs(Math.sin(timer / 5.0))
/**
 *render and camera
 */
let renderer = new THREE.WebGLRenderer({ canvas: document.getElementsByClassName('threejs')[0], alpha: true });
renderer.setPixelRatio(window.devicePixelRatio / 2);//for higher density displays
let addtocanvas = 0;
renderer.setSize(window.innerWidth, window.innerHeight + addtocanvas); //set to window size
let scene = new THREE.Scene();
originalAspect = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(32, window.innerWidth / (window.innerHeight), 0.1, 1000); //smaller when further away
camera.position.set(0, 0, 20);
//camera.lookAt(scene.position);
camera.target = new THREE.Vector3(0, 0, 0);

scene.fog = new THREE.Fog("#fff", 600, 1000);

//renderer.setClearColor(0xffffff, 0);//default color for bg
scene.background = new THREE.Color( 0xff0000 );

window.addEventListener('resize', onWindowResize, false);

////////////////////////////////////////////////////////
//////// COMPOSER

let composer = new THREE.EffectComposer(renderer);

//Passes
let renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);
renderPass.renderToScreen = true;

let pass1 = new THREE.ShaderPass(THREE.VolumetericLightShader);
pass1.uniforms.weight.value = 1.6;//decay density weight
pass1.uniforms.decay.value = 0.85;
pass1.uniforms.density.value = 0.3;//0.09
pass1.needsSwap = false;
composer.addPass(pass1);
pass1.renderToScreen = true;


const bloomPass = new THREE.BloomPass(
    1.9,    // strength
    20,   // kernel size
    1,    // sigma ?
    356,  // blur render target resolution
);
composer.addPass(bloomPass);

const filmPass = new THREE.FilmPass(
    0.45,   // noise intensity
    0.025,  // scanline intensity
    248,    // scanline count
    false,  // grayscale
);
filmPass.renderToScreen = true;
composer.addPass(filmPass);
// let pass2 = new THREE.FilmPass(THREE.FilmShader);
// composer.addPass(pass2);
// pass2.renderToScreen = true;


let hiddenthumbnails = document.getElementsByClassName("hidden-thumbnail");
let modelArray = [];
for (let i = 0; i < hiddenthumbnails.length; i++) {
    console.log(hiddenthumbnails[i].innerHTML)
    createImage(hiddenthumbnails[i].innerHTML, i);
}

console.log(hiddenthumbnails)

function createImage(src, index) {
    let loaded = false;
    let image = new Image();
    // image.src = src;
    image.src = src;
    image.onload = function () {
        WIDTH = image.width;
        HEIGHT = image.height;
        let mCanvas = document.createElement('canvas');
        mCanvas.width = WIDTH;
        mCanvas.height = HEIGHT;
        let mContext = mCanvas.getContext('2d');
        mContext.drawImage(image, 0, 0);
        let mData = mContext.getImageData(0, 0, WIDTH, HEIGHT).data;
        let alpha = [];
        // iterate over all pixels
        for (var i = 0, n = mData.length; i < n; i += 4) {
            // alpha[i] = mData[i];
            alpha[i] = mData[i + 1];//alpha[i] = mData[i +1];
            alpha[i+1] = mData[i +2];
        }
        let j = 0;
        let mReturnArray = [];
        for (var i = 0; i < mData.length; i += 1) {
            mReturnArray[j] = alpha[i];
            j++;
        }
        let plane = new THREE.PlaneBufferGeometry(WIDTH, HEIGHT, WIDTH - 1, HEIGHT - 1);
        let morphVertices = plane.attributes.position.array;

        for (i = 0, j = 2; i < mReturnArray.length; i += 4, j += 3) {
            morphVertices[j] = mReturnArray[i] * (HEIGHT_AMPLIFIER);
            if (mReturnArray[i] === 0) {
                morphVertices[j] = backgroundPlane;
            }
        }
        plane.computeFaceNormals();
        plane.computeVertexNormals();
        modelArray[index] = morphVertices;

    }
    // if(index === 0){
    //     setTimeout(() => {
    //         console.log(modelArray)
    //     scene1();
    //     }, 500);

    // }

}

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

        let alpha = [];
        // iterate over all pixels
        for (var i = 0, n = data.length; i < n; i += 4) {
            var red = data[i];
            var green = data[i + 1];
            var blue = data[i + 2];
            // alpha[i] = data[i];
            alpha[i] = data[i +1];
            alpha[i+1] = data[i +2];
        }

        let j = 0;
        for (var i = 0; i < data.length; i += 1) {
            returnArray[j] = alpha[i];
            j++;
        }
        scene1();
    }
}

function scene1() {

    // lights(scene);
    let bufferGeometry = new THREE.SphereBufferGeometry(WIDTH, HEIGHT, WIDTH - 1, HEIGHT - 1);
    let plane = new THREE.SphereBufferGeometry(WIDTH, HEIGHT, WIDTH - 1, HEIGHT - 1);
    plane.castShadow = true;
    plane.receiveShadow = true;
    var vertices = plane.attributes.position.array;

    for (i = 0, j = 2; i < returnArray.length; i += 4, j += 3) {
        vertices[j] = returnArray[i];// * HEIGHT_AMPLIFIER;
        if (returnArray[i] === 0) {
            vertices[j] = backgroundPlane;
        }
    }
    plane.dynamic = true;
    plane.computeFaceNormals();
    plane.computeVertexNormals();

    /////// MORPH TARGET
    morphTarget = new THREE.SphereBufferGeometry(WIDTH, HEIGHT, WIDTH - 1);

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

    var numVerts = 10947;
    var sphereGeometry = new THREE.SphereBufferGeometry(50, 32, 32);
    var sphereVerts = THREE.GeometryUtils.randomPointsInBufferGeometry(sphereGeometry, numVerts);
    sphere = new Float32Array(sphereVerts.length * 3);
    for (var v = 0; v < sphereVerts.length; v += 1) {
        // sphere[v * 3 + 0] = sphereVerts[v].x  * Math.random() * (0.1 - -0.2) + -0.2;
        sphere[v * 3 + 0] = sphereVerts[v].x * (Math.random() - 0.9) - 5;
        sphere[v * 3 + 1] = sphereVerts[v].y * (Math.random() - 0.9) + 10;
        sphere[v * 3 + 2] = sphereVerts[v].z * (Math.random() - 0.9) + 10;
    }
    // sphereGeometry.position.x -= 0.5;
    sphereGeometry.scale.z = 0.2;
    console.log(modelArray[0])

    bufferGeometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
    bufferGeometry.addAttribute('morph0', new THREE.BufferAttribute(positions, 3));

    let material = new THREE.MeshNormalMaterial({ color: 0x888888, wireframe: false });
    shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
            torus: { value: 1.0 },
            size: { value: 2.33 },
            u_resolution: { type: "v2", value: new THREE.Vector2(1.0, 1.0) },
            texture1: { type: "t", value: THREE.ImageUtils.loadTexture(universal) },
            u_mouse: { type: "v2", value: new THREE.Vector2(100.0, 100.0) },
            time: { // float initialized to 0
                type: "f",
                value: 0.0
            },
            uvPosition: {type:"f", value: uvPosition}

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
    // cube.rotation.x += 9.2;
    // cube.rotation.y -= 0.02;
    // cube.position.y -= 20;
    // cube.rotation.x -= 0.19;
    scene.add(cube);
    let changeX = 0;
    document.onmousemove = function (e) {
        shaderMaterial.uniforms.u_mouse.value.x = e.pageX;
        shaderMaterial.uniforms.u_mouse.value.y = e.pageY;
        changeX = e.pageX;
        // console.log((e.pageX)+ " " +renderer.domElement.width/4)
        if (e.pageX > renderer.domElement.width / 4) {
            // cube.rotation.z += (changeX*0.0000001);
            cube.rotation.x -= (5 * 0.00001);

        } else {
            // cube.rotation.z -= (changeX*0.0000001);
            // console.log(changeX)
            cube.rotation.x += (5 * 0.000001);
        }
        // console.log(changeX/1000000)
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

    setInterval(() => {
        if (changeVariable === "-= 0.04 * Math.random()") {
            changeVariable = "+= 0.04 * Math.random()";
        } else {
            changeVariable = "-= 0.04 * Math.random()";
        }

        TweenMax.to(cube.rotation, 4, {
            ease: Linear.easeNone,
            y: changeVariable, //move each box 500px to right
            // x: "+=" +(changeX/100),
            // repeat: -1,
        });

    }, 4000);









    camera.position.z = cameraDistance * Math.cos(THREE.Math.degToRad(1));
    
    // camera.lookAt(camera.target);

    shaderMaterial.uniforms.torus.value = 0.8;
    warpVector = new THREE.Vector3(0, 50, 0); //50
    warpVector2 = new THREE.Vector3(20, 120, 0);


    composer.render();
}

function animate() {

    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 1 / 2);

    render();

}

function render() {



    if (updateNow !== universal) {

        if (updateOnce === true) {
            // console.log(modelArray[universalIndex])
            previousMorphTarget = positions;
            imageHasLoaded = true;
            cube.geometry.addAttribute('position', new THREE.BufferAttribute(sphere, 3));
            cube.geometry.addAttribute('morph0', new THREE.BufferAttribute(modelArray[universalIndex], 3));

            shaderMaterial.uniforms.torus.value = 0;
            shaderMaterial.uniforms.texture1.value = THREE.ImageUtils.loadTexture(universal);
            updateOnce = false;
        }
        // if (shaderMaterial.uniforms.torus.value < 0.8) {
        //     shaderMaterial.uniforms.torus.value += 0.05;
        // }

        if (shaderMaterial.uniforms.torus.value < 1) {
            pass1.uniforms.density.value += 0.01;//0.09
            shaderMaterial.uniforms.torus.value += 0.065;
        }
        setTimeout(() => {
            firstLoad = false;
            updateNow = universal;
            updateOnce = true;
            if (pass1.uniforms.density.value > 0) {
                pass1.uniforms.density.value -= 0.0051;//0.09
            }
            // console.log(pass1.uniforms.density.value)
            // pass1.uniforms.density.value = 0.3;//0.09
            camera.position.z = cameraDistance * Math.cos(THREE.Math.degToRad(1));
        }, 700);
    } else {
        if (shaderMaterial) {
            if (shaderMaterial.uniforms.torus.value > 0.4 && firstLoad) {
                shaderMaterial.uniforms.torus.value -= 0.05;
            }
        }
        if (shaderMaterial) {
            shaderMaterial.uniforms.time.value = .00025 * (Date.now() - timer);
            // console.log(Math.sin(shaderMaterial.uniforms.time.value / 5.0))
            if(Math.sin(shaderMaterial.uniforms.time.value / 5.0) < 1.5 && Math.sin(shaderMaterial.uniforms.time.value / 5.0) > 1.1)
            
            shaderMaterial.uniforms.uvPosition.value= Math.abs(Math.sin(shaderMaterial.uniforms.time.value / 5.0));
        }
        // console.log(shaderMaterial.uniforms.u_mouse.value / shaderMaterial.uniforms.u_resolution.value)
    }
    composer.render();
    // wave();
}

function onWindowResize() {

    camera.aspect = window.innerWidth / (window.innerHeight + addtocanvas);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight + addtocanvas);
    shaderMaterial.uniforms.u_resolution.value.x = renderer.domElement.width;
    shaderMaterial.uniforms.u_resolution.value.y = renderer.domElement.height;
}
