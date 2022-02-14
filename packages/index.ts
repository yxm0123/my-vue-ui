import { App } from "vue";
import CerButton from './button';
import CerColor from './color';

const components = [
  CerButton,
  CerColor
]

const install = (app:App):void =>{
  components.map((component)=>{
    app.component(component.name,component)
  })
}
export {
  CerButton
}
export default {
  install
}