import React from 'react';
import Parent from './libraries/parentComponent';
import * as THREE from 'three';
import Publisher from './libraries/publisher';
import Orbit from 'three-orbit-controls';

export default class Graphics extends Parent{
    constructor(props){
        super(props);
        this.publisher = new Publisher();
        this.scene = new THREE.Scene();
    }
    componentDidMount(){
        this.refNodeCanvas.width=this.offsetWidth;
        this.refNodeCanvas.height=this.offsetHeight;
        this.renderer = new THREE.WebGLRenderer({canvas : this.refNodeCanvas, antialias: true});
        this.scene.background = new THREE.Color( 0xffffff );
        this.camera = new THREE.PerspectiveCamera(45, (this.offsetWidth || 100)/(this.offsetHeight || 100), 1, 4000);
        this.camera.position.set(0,0,3);
        let tempFunction = Orbit(THREE);
        this.cntrl = new tempFunction(this.camera);
        this.light = new THREE.DirectionalLight( 0xffffff, 0.5);
        this.light.position.set(0, 0, 1);
        this.ambient = new THREE.AmbientLight(0xffffff, 1);
        this.scene.add( this.light,this.ambient );
        this.toggleRun();
    }

    render(){
        const childrenWithProps = React.Children.map(this.props.children,
        (child) => React.cloneElement(child, {
            pub: this.publisher.subscribe,
            scene: this.scene
        }))
        let style = {
            width: this.props.width || "100%",
            height: this.props.height || "500px",
            position: this.props.position || "relative"
        };
        let canvasStyle = {
            height:"100%",
            width:"100%"
        };
        return(
            <div style={style}>
                <canvas style={canvasStyle}
                    ref={(input) => {
                        this.refNodeCanvas = input;
                        if((!this.offsetWidth || !this.offsetHeight)||(this.offsetWidth!=input.offsetWidth || this.offsetHeight!=input.offsetHeight)){
                            console.log("hello");
                            this.offsetWidth = input.offsetWidth;
                            this.offsetHeight = input.offsetHeight;
                        }
                    }}
                />
                {childrenWithProps}
            </div>
        );
    }
}
