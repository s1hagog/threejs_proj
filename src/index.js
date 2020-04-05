import _ from 'lodash';
import './css/main.css';
import * as Three from 'three';
import Icon from './images/carbon.png';

//Import modules:
import Animation from './modules/Animation';
import AnimationBackground from './modules/AnimatedBackground';
import AnimationBackground2 from './modules/AnimatedBackground2';
import AnimationBackground3 from './modules/AnimatedBackground3';

// const animation = new AnimationBackground();
// const animation = new Animation();
// const animation = new AnimationBackground2();
const animation = new AnimationBackground3();
// animation.animate();

const header = document.createElement('h1');
const body = document.querySelector('body');
body.appendChild(header);

header.innerHTML = 'HELLLO WORLD';
header.setAttribute('class', 'heading');