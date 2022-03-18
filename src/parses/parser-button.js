import uiButton from 'ui/Button.vue'
import { bindActiveEvent } from '~utils'
export default {
    name:'enchanceUiButton',
    components:{
        uiButton
    },
    render() {
        const _props = {
            // ...bindActiveEvent(this)
            onclick:(e)=>{
                console.log('知道')
                // e.stopPropagation();
                
            }
        }
        return <uiButton {..._props}/>
    },
}