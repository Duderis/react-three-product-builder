import React from 'react';

class BaseComponent extends React.Component {
    constructor(props){
        super(props);
    }

    //methods for overriding -------
    update(){}

    startOfRender(){}
    //------------------------------

    subscribe(pub){
        pub("redraw", this.updateComponent.bind(this));
    }

    updateComponent(){
        this.update();
    }

    render(){
        this.startOfRender();
        if(this.props.children){
            let children;
            if(typeof this.props.pub === 'function'){
                children = React.Children.map(this.props.children,
                (child) => React.cloneElement(child, {
                    pub: this.props.pub,
                    scene: this.props.scene
                }));
            }else{
                children = this.props.children;
            }
            return (<div>{children}</div>);
        }
        return false;

    }
}

BaseComponent.propTypes = {
    obj: React.PropTypes.object.isRequired
}

export default BaseComponent;
