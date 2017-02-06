import React from 'react';

export default class ParentComponent extends React.Component {
    constructor(props){
        super(props);
        this.renderer = null;
        this.scene = null;
        this.camera = null;
        this.light = null;
        this.running = false;
        this.publisher = null;
        this.offsetWdith = null;
        this.offsetHeight = null;
    }

    startRunning(){
        console.log("starting");
        this.running = true;
        this.run();
    }

    stopRunning(){
        console.log("stopping");
        this.running = false;
    }

    toggleRun(){
        if(this.running)
            this.stopRunning();
        else
            this.startRunning();
    }

    run(){
        if(this.running){
            this.publisher.publish("redraw");
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this.run.bind(this));
        }
    }

}
