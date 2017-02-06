import Base from './libraries/baseComponent';

export default class Attachment extends Base{
    constructor(props){
        super(props);
        this.subscribe(this.props.pub);
    }
}
