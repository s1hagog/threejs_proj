import _ from 'lodash';
import './css/main.css';
import * as Three from 'three';
import Icon from './images/carbon.png';

//Import modules:
import Animation from './modules/Animation';
import AnimationBackground from './modules/AnimatedBackground';


const animation = new AnimationBackground();
// const animation = new Animation();
animation.animate();

const header = document.createElement('h1');
const body = document.querySelector('body');
body.appendChild(header);

header.innerHTML = 'HELLLO WORLD';
header.setAttribute('class', 'heading');

// let scene, camera, renderer, cube;

// function init() {
//     scene = new Three.Scene();

//     camera = new Three.PerspectiveCamera(
//         75, 
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//     );

//     renderer = new Three.WebGLRenderer({
//         antialias: true
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);

//     document.body.appendChild(renderer.domElement);

//     const geometry = new Three.BoxGeometry( 2, 2, 2 );
//     const texture = new Three.TextureLoader().load(Icon);

//     const material = new Three.MeshBasicMaterial( {map: texture} );
//     cube = new Three.Mesh( geometry, material );
//     scene.add( cube );

//     camera.position.z = 5;
// }

// function animate() {
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// }

// function onWindowResize () {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// }

// window.addEventListener('resize', onWindowResize, false);

// init();
// animate();




// function component() {
//     const element = document.createElement('div');
  
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     // Add the image to our existing div.
//     const myIcon = new Image();
//     myIcon.src = Icon;

//     const newIcon = myIcon.cloneNode(false);

//     element.appendChild(myIcon);
    
//     element.appendChild(newIcon);

//     // element.appendChild();
//     return element;
//   }
  
//   document.body.appendChild(component());