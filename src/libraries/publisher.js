export default class Publisher{
    constructor(){
        this.subscribers = [];
        this.subscribe = this.subscribe.bind(this);
        this.publish = this.publish.bind(this);
    }

    subscribe(e, fn){
        if(!(e in this.subscribers)){
            this.subscribers[e] = [];
        }

        this.subscribers[e].push(fn);
    }

    publish(e){
        console.log("publishing: "+ e);
        if(e in this.subscribers){
            this.subscribers[e].forEach((fun)=>{if(typeof(fun) === 'function')fun();else console.log(fun)});
        }
    }
}
