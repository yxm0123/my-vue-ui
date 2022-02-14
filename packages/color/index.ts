import {App} from 'vue'
import Color from './src/color.vue'

Color.install = (app:App):void=>{
  app.component(Color.name,Color);
}

export default Color