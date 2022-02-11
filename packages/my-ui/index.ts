import { App } from "vue";
import Button from "@my-ui/button";
import Icon from '@my-ui/icon'

const components = [
  Button,
  Icon
]

const install = (app:App):void =>{
  components.map(component =>{
    app.component(component.name,component)
  })
}
export default {
  install
}