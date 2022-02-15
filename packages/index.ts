import { App } from "vue";
import MyButton from './button';
import MyColor from './color';

const components = [
  MyButton,
  MyColor
]

const install = (app:App):void =>{
  components.map((component)=>{
    app.component(component.name,component)
  })
}
export {
  MyButton,
  MyColor
}
export default {
  install
}