import * as THREE from 'three';

export default class Obj{
    constructor(width = null, height = null, geometry = null, texture = null){
        this.width = width;
        this.height = height;
        this.geometry = geometry;
        this.texture = texture;
        this.threeObj = null;
        this.createThree();
    }
    createThree(){
        if(this.geometry){
            let mat;
            if(this.texture){
                mat = {
                    map: this.texture
                };
            }else{
                mat = {
                    color: 0x2b4293
                }
            }
            let material = new THREE.MeshPhongMaterial(mat);
            this.threeObj = new THREE.Mesh(this.geometry, material);
        }
    }
}
