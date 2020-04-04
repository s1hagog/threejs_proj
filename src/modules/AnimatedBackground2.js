import * as Three from 'three';
import star from '../images/star.png';

export default class AnimatedBackground {
    
    constructor() {

        this.scene = new Three.Scene;
        this.camera = new Three.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );

        this.positionCamera({
            z: 1,
        }, {
            x: Math.PI /2
        });

        this.renderer = new Three.WebGLRenderer({
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        //Create stars objects

        this.starGeo = new Three.Geometry();
        for(let i = 0; i < 1000; i++){
            this.star = new Three.Vector3(
                Math.random() * 600 - 300,
                Math.random() * 600 - 300,
                Math.random() * 600 - 300
            );
            this.star.velocity = 0;
            this.star.acceleraion = 0.02;
            this.starGeo.vertices.push(this.star)
        }
        this.sprite = new Three.TextureLoader().load(star);
        this.starMaterial = new Three.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.7,
            map: this.sprite
        })

        this.stars = new Three.Points(this.starGeo, this.starMaterial);
        this.scene.add(this.stars);
        
    }

    animate() {

        // this.cloudParticles.forEach(p => {
        //     p.rotation.z -= 0.001;
        //     // p.position.y -= 2;
        // })

        this.starGeo.vertices.forEach( p => {
            p.velocity += p.acceleraion;
            p.y -= p.velocity;
            if(p.y < -200){
                p.y = 200;
                p.velocity = 0;
            }
        })
        this.starGeo.verticesNeedUpdate = true;
        this.stars.rotation.y += 0.002; 
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
}