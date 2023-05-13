import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

//creating the scene
const scene = new THREE.Scene();

//creating the camera
const camera = new THREE.PerspectiveCamera( 75, 
    window.innerWidth / window.innerHeight,
     0.1, 
     1000 );

//creating the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//adding light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

//creating a gridHelper
const radius = 10;
const sectors = 16;
const rings = 18;
const divisions = 64;

//creating the ground
const geometry = new THREE.BoxGeometry( 8.5, 0.05, 10 );
const material = new THREE.MeshBasicMaterial( {color: 0x6c757d} );
const ground = new THREE.Mesh( geometry, material );
ground.position.y = -2.4;
ground.position.z = -3;
ground.position.x = -0.2;
	   
	   //Walls
	   //creating the front wall
	   const geometry10 = new THREE.PlaneGeometry( 8.5, 7 );
	   const material10 = new THREE.MeshStandardMaterial( {color: 0x495057} );
	   const frontWall = new THREE.Mesh( geometry10, material10 );
	   frontWall.position.y = 1.1;
	   frontWall.position.x = -0.2;
	   frontWall.position.z = -8;
	   
	   //creating the right wall
	   const geometry11 = new THREE.BoxGeometry( 0.05, 7, 7 );
	   const material11 = new THREE.MeshStandardMaterial( {color: 0x495057} );
	   const rightWall = new THREE.Mesh( geometry11, material11 );
	   rightWall.position.z = -1.5;
	   rightWall.position.x = 4; 
	   rightWall.position.y = 1.1;
	   
	   //creating the left wall
	   const geometry111 = new THREE.BoxGeometry( 0.05, 7, 10 );
	   const material111 = new THREE.MeshStandardMaterial( {color: 0x495057} );
	   const leftWall = new THREE.Mesh( geometry111, material111 );
	   leftWall.position.z = -3.05;
	   leftWall.position.x = -4.48; 
	   leftWall.position.y = 1.1;
	   
	   const geometry12 = new THREE.BoxGeometry( 0.05, 7, 1 );
	   const material12 = new THREE.MeshStandardMaterial( {color: 0x495057} );
	   const last = new THREE.Mesh( geometry12, material12 );
	   last.position.z = -7.5;
	   last.position.x = 4; 
	   last.position.y = 1.1;
	   
	   const geometry13 = new THREE.BoxGeometry( 0.05, 2, 2 );
	   const material13 = new THREE.MeshStandardMaterial( {color: 0x495057} );
	   const topWall = new THREE.Mesh( geometry13, material13 );
	   topWall.position.z = -6;
	   topWall.position.x = 4; 
	   topWall.position.y = 3.6;
	   
	   //door
	   const geometry14 = new THREE.BoxGeometry( 0.1, 5, 2 );
	   const material14 = new THREE.MeshStandardMaterial( {color: 0xf8f9fa} );
	   const door = new THREE.Mesh( geometry14, material14 );
	   door.position.z = -6.3;
	   door.position.x = 3.2; 
	   door.position.y = 0.1;
	   door.rotation.y += -0.8;
	   
	   const wholeWall = new THREE.Group();
	   wholeWall.add(frontWall,  rightWall,leftWall, last, topWall, door, ground);
	   scene.add(wholeWall);


const helper = new THREE.PolarGridHelper( radius, sectors, rings, divisions ); 
helper.position.y = -2.5;
helper.position.z = -2;
scene.add( helper );

//creating a bed

//base
const geometry1 = new THREE.BoxGeometry( 4, 1, 5 );
const material1= new THREE.MeshStandardMaterial( {color: 0x936639} );
const base = new THREE.Mesh( geometry1, material1 );
base.position.y = -1.9;
base.position.z = -1;
base.position.x = -1.2;

//headboard
//left side
const geometry2 = new THREE.BoxGeometry( 0.1, 2.8, 0.4 );
const material2= new THREE.MeshStandardMaterial( {color: 0x936639} );
const left = new THREE.Mesh( geometry2, material2 );
left.position.x = -3.25;
left.position.z = 1.35;
left.position.y = -1;

//right side
const geometry3 = new THREE.BoxGeometry( 0.1, 2.8, 0.4 );
const material3= new THREE.MeshStandardMaterial( {color: 0x936639} );
const right = new THREE.Mesh( geometry3, material3 );
right.position.z = 1.35;
right.position.y = -1;
right.position.x = 0.8;

//the head side
const geometry4 = new THREE.BoxGeometry( 4, 0.1, 0.05 );
const material4= new THREE.MeshStandardMaterial( {color: 0x936639} );
const head = new THREE.Mesh( geometry4, material4 );
head.position.x = -1.2;
head.position.z = 1.53;
head.position.y = -2.35;

//the top side
const geometry5 = new THREE.BoxGeometry( 4, 0.57, 0.27 );
const material5= new THREE.MeshStandardMaterial( {color: 0x121212} );
const firstBlock = new THREE.Mesh( geometry5, material5 );
firstBlock.position.z = 1.32;
firstBlock.position.x = -1.2;
firstBlock.position.y = -1.12;

const geometry6 = new THREE.BoxGeometry( 4, 0.57, 0.27 );
const material6= new THREE.MeshStandardMaterial( {color: 0x121212} );
const secondBlock = new THREE.Mesh( geometry6, material6 );
secondBlock.position.z = 1.32;
secondBlock.position.x = -1.2;
secondBlock.position.y = -0.55;

const geometry7 = new THREE.BoxGeometry( 4, 0.57, 0.27 );
const material7= new THREE.MeshStandardMaterial( {color: 0x121212} );
const thirdBlock = new THREE.Mesh( geometry7, material7 );
thirdBlock.position.z = 1.32;
thirdBlock.position.x = -1.2;
thirdBlock.position.y = 0.02;

const geometry8 = new THREE.BoxGeometry( 4, 0.1, 0.4 );
const material8= new THREE.MeshStandardMaterial( {color: 0x936639} );
const topBlock = new THREE.Mesh( geometry8, material8 );
topBlock.position.z = 1.35;
topBlock.position.x = -1.2;
topBlock.position.y = 0.36;

//bed
const geometry9 = new THREE.BoxGeometry( 3.9, 1, 4.9 );
const material9= new THREE.MeshStandardMaterial( {color: 0xadb5bd} );
const bed = new THREE.Mesh( geometry9, material9 );
bed.position.y = -1.6;
bed.position.z = -1;
bed.position.x = -1.2;

const wholeBed = new THREE.Group();
wholeBed.add(base, left, right, head, firstBlock, secondBlock, topBlock,thirdBlock, bed);
scene.add(wholeBed);

//Creating a TV
//tv
const geometry15 = new THREE.BoxGeometry( 5, 3, 0.2 );
const material15= new THREE.MeshStandardMaterial( {color: 0x121212} );
const tv = new THREE.Mesh( geometry15, material15 );
tv.position.z = -8;
tv.position.x = -0.2;
tv.position.y = 2;

//screen
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('C:/Users/E4310/Downloads/School/Year3Semester2/Concept of modelling/Three_Assingment1/src/tv.jpg');

const material0 = new THREE.MeshBasicMaterial({ map: texture });

const geometry0 = new THREE.PlaneGeometry(4.8, 2.7); 
const screen = new THREE.Mesh(geometry0, material0);
screen.position.z = -7.89;
screen.position.x = -0.2;
screen.position.y = 2; 

const TV = new THREE.Group();
TV.add(tv, screen);
scene.add(TV);

//wardrobe
const geometry17 = new THREE.BoxGeometry( 0.03, 5, 3.3 );
const material17 = new THREE.MeshStandardMaterial( {color: 0x212529} );
const wr1 = new THREE.Mesh( geometry17, material17 );
wr1.position.z = 0.3;
wr1.position.x = 3; 
wr1.position.y = 0.14;

const geometry18 = new THREE.BoxGeometry( 0.03, 1.9, 3.3 );
const material18 = new THREE.MeshStandardMaterial( {color: 0x212529} );
const wr2 = new THREE.Mesh( geometry18, material18 );
wr2.position.z = 0.3;
wr2.position.x = 3; 
wr2.position.y = 3.625;

const geometry19 = new THREE.BoxGeometry( 0.03, 5, 3.3 );
const material19 = new THREE.MeshStandardMaterial( {color: 0x212529} );
const wr3 = new THREE.Mesh( geometry19, material19 );
wr3.position.z = -3.1;
wr3.position.x = 3; 
wr3.position.y = 2.1;

const geometry20 = new THREE.BoxGeometry( 0.03, 1.9, 3.3 );
const material20 = new THREE.MeshStandardMaterial( {color: 0x212529} );
const wr4 = new THREE.Mesh( geometry20, material20 );
wr4.position.z = -3.1;
wr4.position.x = 3; 
wr4.position.y = -1.4;

const geometry21 = new THREE.CylinderGeometry( 0.05, 0.05, 2.5, 32 ); 
const material21 = new THREE.MeshStandardMaterial( {color: 0xadb5bd} ); 
const handle = new THREE.Mesh( geometry21, material21 );
handle.position.x = 2.8;
handle.position.y = 3;
handle.position.z = 1.7;

 const geometry22 = new THREE.CylinderGeometry( 0.04, 0.04, 0.3, 32 ); 
const material22 = new THREE.MeshStandardMaterial( {color: 0xadb5bd} ); 
const nail1 = new THREE.Mesh( geometry22, material22 );
nail1.position.x = 3;
nail1.position.y = 4;
nail1.position.z = 1.7;
nail1.rotation.z = 1.57;

 const geometry23 = new THREE.CylinderGeometry( 0.04, 0.04, 0.3, 32 ); 
const material23 = new THREE.MeshStandardMaterial( {color: 0xadb5bd} ); 
const nail2 = new THREE.Mesh( geometry23, material23 );
nail2.position.x = 3;
nail2.position.y = 2;
nail2.position.z = 1.7;
nail2.rotation.z = 1.57;

const geometry110 = new THREE.BoxGeometry( 1, 7, 6.8 );
const material110 = new THREE.MeshStandardMaterial( {color: 0x343a40} );
const strip = new THREE.Mesh( geometry110, material110 );
strip.position.z = -1.4;
strip.position.x = 3.5; 
strip.position.y = 1.1;

 const wardrobe = new THREE.Group();
wardrobe.add(wr1, wr2, wr3, wr4, handle, nail1, nail2, strip);
scene.add(wardrobe);

//Creating the plant
const geometry24 = new THREE.CylinderGeometry( 0.5, 0.3, 0.8, 32 ); 
const material24 = new THREE.MeshStandardMaterial( {color: 0xffff00} ); 
const bucket = new THREE.Mesh( geometry24, material24 ); 
bucket.position.x = -3.7;
bucket.position.z = -6.6;
bucket.position.y = -1;
scene.add( bucket );

const geometry25 = new THREE.BoxGeometry( 1.3, 0.1, 1.3 ); 
const material25 = new THREE.MeshStandardMaterial( {color: 0xe9ecef} ); 
const stand = new THREE.Mesh( geometry25, material25 ); 
stand.position.x = -3.7;
stand.position.z = -6.7;
stand.position.y = -1.5;

const geometry26 = new THREE.CylinderGeometry( 0.1, 0.15, 2, 32 ); 
const material26 = new THREE.MeshStandardMaterial( {color: 0xca6702} ); 
const stock = new THREE.Mesh( geometry26, material26 ); 
stock.position.x = -3.7;
stock.position.z = -6.6;
stock.position.y = 0.1;

const geometry27 = new THREE.CylinderGeometry( 0.08, 0.13, 1, 32 ); 
const material27 = new THREE.MeshStandardMaterial( {color: 0xca6702} ); 
const leave = new THREE.Mesh( geometry27, material27 ); 
leave.position.x = -4;
leave.position.z = -6.6;
leave.position.y = 0.1;
leave.rotation.z = 0.8;

const geometry28 = new THREE.CylinderGeometry( 0.05, 0.1, 0.7, 32 ); 
const material28 = new THREE.MeshStandardMaterial( {color: 0xca6702} ); 
const leave1 = new THREE.Mesh( geometry28, material28 ); 
leave1.position.x = -3.4;
leave1.position.z = -6.6;
leave1.position.y = 0.7;
leave1.rotation.z = -0.8;

const plant = new THREE.Group();
plant.add(stand, bucket, stock, leave, leave1);
scene.add(plant);

camera.position.z = 9;//positioning the camera

//Adding controls
const controls = new PointerLockControls(camera, document.body);
scene.add(controls.getObject());

const onKeyDown = function(event) {

	switch(event.keyCode) {
		case 38:
			controls.moveForward(1);
			break;
		case 40:
			controls.moveForward(-1);
			break;
		case 37:
			controls.moveRight(-1);
			break;
		case 39:
			controls.moveRight(1);
			break;			
	}
}

document.addEventListener("keydown", onKeyDown);

//for mouse controlling
document.addEventListener("click",
 function ( ) {
     controls.lock();
});

document.addEventListener("lock",
 function ( ) {
     controls.enabled = true;
});

document.addEventListener("unlock",
 function ( ) {
     controls.enabled = false;
});

function animate() {

	requestAnimationFrame( animate );

	renderer.render( scene, camera );

}
animate();