import * as Three from 'three';
import Icon from '../images/carbon.png';

export default class Animation {

    constructor() {

        this.scene = new Three.Scene();
        this.camera = new Three.PerspectiveCamera(
            60, 
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        this.renderer = new Three.WebGLRenderer({
            antialias: true
        });

        this.geometry = new Three.BoxGeometry( 2, 2, 2 );
        this.texture = new Three.TextureLoader().load(Icon);

        this.material = new Three.MeshBasicMaterial( {map: this.texture} );
        this.cube = new Three.Mesh( this.geometry, this.material );

        //Ambient light
        this.ambient = new Three.AmbientLight(0x555555);
        this.scene.add(this.ambient);

        //Scene Fog
        this.scene.fog = new Three.FogExp2(0x03544e, 0.001);
        this.scene.add( this.cube );
        this.camera.position.z = 5;

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.renderer.setClearColor(this.scene.fog.color);
        
        


        //add events listeners

        this.events();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
    
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    events() {
        window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }
}