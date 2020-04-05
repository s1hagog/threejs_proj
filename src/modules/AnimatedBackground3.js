import * as Three from 'three';
import smoke from '../images/smoke.png';

export default class AnimatedBackground3 {

    constructor() {

        this.particles = [];
        //Scene
        this.scene = new Three.Scene;

        //Light
        this.sceneLight = new Three.DirectionalLight(0xffffff, 0,5);
        this.sceneLight.position.set(0,0,1);
        this.scene.add(this.sceneLight);

        //Portal Light

        this.portalLight = new Three.PointLight(0x062d89, 30, 350, 1.7);
        this.portalLight.position.set(30,-121,25);
        this.scene.add(this.portalLight);

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

        console.log(this.particles.length)
        console.log(this.particles[this.particles.length - 1].position);
    }

    particleSetup() {
        let texture = new Three.TextureLoader().load(smoke);
        let portalGeo = new Three.PlaneBufferGeometry(350,350);
        let portalMaterial = new Three.MeshBasicMaterial({
            map:texture,
            transparent: true,
        })


        for(let p=880; p>250; p--){
            let particle = new Three.Mesh(portalGeo, portalMaterial);
            particle.position.set(
                0.5 * p * Math.cos((4 * p * Math.PI) / 180),
                0.5 * p * Math.sin((4 * p * Math.PI) / 180),
                0.1 * p
            )
            particle.rotation.z = Math.random() * 360;
            this.particles.push(particle);
            this.scene.add(particle);
        }


        this.clock = new Three.Clock();
        
    }

    animate() {

        let delta = this.clock.getDelta();

        this.particles.forEach(p => {
            p.rotation.z -= delta * 1.5;
        })
       
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animate.bind(this));
    }
}