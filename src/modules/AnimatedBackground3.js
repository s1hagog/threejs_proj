import * as Three from 'three';
import smoke from '../images/smoke.png';

export default class AnimatedBackground3 {

    constructor() {

        //Scene
        this.scene = new Three.Scene;

        //Light
        this.sceneLight = new Three.DirectionalLight(0xffffff, 0,5);
        this.sceneLight.position.set(0,0,1);
        this.scene.add(this.sceneLight);

        //Camera
        this.camera = new Three.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 10000 );
        this.camera.position.z = 1000;
        this.scene.add(this.camera);

        //Renderer
        this.renderer = new Three.WebGLRenderer();
        this.renderer.setClearColor(0x000000, 1);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        //Append to DOM
        document.body.appendChild(this.renderer.domElement);
        
        this.particleSetup();
    }

    particleSetup() {
        let texture = new Three.TextureLoader().load(smoke);
        let portalGeo = new Three.PlaneBufferGeometry(350,350);
        let portalMaterial = new Three.MeshStandardMaterial({
            map:texture,
            transparent: true,
        })

        let particle = new Three.Mesh(portalGeo, portalMaterial);
        particle.position.set(2,2,2);

        this.scene.add(particle);
        this.renderer.render(this.scene, this.camera);

        
    }
}