export class Observer{
    constructor(vnode,center){
        this.vnode = vnode
        center.attach(this)
    }
    update(isDraging){
        this.vnode.updateDraging(isDraging)
    }
}

export class Center{
    constructor(){
        this.obs = []
    }
    attach(ob){
        this.obs.push(ob)
    }   
    notify(isDraging){
        this.obs.forEach(ob=>{
            ob.update(isDraging)
        })
    }
    static instance = null
    static getInstance(){
        if(Center.instance){
            return Center.instance
        }
        return Center.instance = new Center()
    }
}

