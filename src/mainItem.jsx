import Base from './libraries/baseComponent';

export default class MainItem extends Base{
    constructor(props){
        super(props);
        this.subscribe(this.props.pub);
    }
    componentDidMount(){
        this.props.scene.add(this.props.obj.threeObj);
        console.log(this.props.obj.threeObj);
    }
    update(){

    }
}
