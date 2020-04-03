import * as Three from 'three';
import smoke from '../images/smoke.png';

export default class AnimatedBackground {

    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.scene = new Three.Scene;
        this.camera = new Three.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );

        this.positionCamera({
            z: 1
        }, {
            x: 1.16,
            y: -0.12,
            z: 0.27,
        });

        // console.log(this.camera.position.)

        this.ambient = new Three.AmbientLight(0x555555);
        this.scene.add(this.ambient);

        this.renderer = new Three.WebGLRenderer({
            antialias: true
        });

        this.renderer.setSize(this.width, this.height);
        this.scene.fog = new Three.FogExp2(0x03544e, 0.001);

        this.renderer.setClearColor(this.scene.fog.color);
        document.body.appendChild(this.renderer.domElement);

        //Adding texture

        this.texture = new Three.TextureLoader().load(smoke);

        this.cloudGeo = new Three.PlaneBufferGeometry(500,500);
        this.cloudMaterial = new Three.MeshLambertMaterial({
            map: this.texture,
            transparent: true
        });

        for(let i=0; i<50; i++){
            this.cloud = new Three.Mesh(this.cloudGeo, this.cloudMaterial);
            this.cloud.position.set(
                Math.random()*800-400,
                500,
                Math.random()*500-500
            )
            this.cloud.rotation.set(
                1.16,
                -0.12,
                Math.random()*2*Math.PI
            );
            this.cloud.material.opacity = 1;
            this.scene.add(this.cloud);
        }

        console.log(this.cloud);

        // this.loader = new Three.TextureLoader();
        // this.loader.load(smoke, texture => {
        //     let cloudGeo = new Three.PlaneBufferGeometry(500,500);
        //     let cloudMaterial = new Three.MeshLambertMaterial({
        //         map: texture,
        //         transparent: true
        //     });

        //     for(let i=0; i<50; i++){
        //         let cloud = new Three.Mesh(cloudGeo, cloudMaterial);
        //         cloud.position.set(
        //             Math.random()*800-400,
        //             500,
        //             Math.random()*500-500
        //         )
        //         cloud.rotation.x = 1.16;
        //         cloud.rotation.y = -0.12;
        //         cloud.rotation.z = Math.random()*2*Math.PI;
        //         cloud.material.opacity = 0.55;
        //         this.scene.add(cloud);
        //     }
        // })
        this.events();
    }

    animate() {

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animate.bind(this));
    }

    positionCamera(pos, rot) {

        //Deconstructing
        const {position, rotation} = this.camera;

        //Camera Positioning
        position.x = pos.x ? pos.x : position.x;
        position.y = pos.y ? pos.y : position.y;
        position.z = pos.z ? pos.z : position.z;

        //Camera Rotation
        rotation.x = rot.x ? rot.x : rotation.x;
        rotation.y = rot.y ? rot.y : rotation.y;
        rotation.z = rot.z ? rot.z : rotation.z;

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