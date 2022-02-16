// template.js
module.exports = {
  vueTemplate: compoenntName => {
    return `
<template>
  <div class="${'my-'+compoenntName}">
      ${compoenntName}组件
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "${'My'+compoenntName}"
})
</script>
<style lang="scss" scoped>
.${'my-'+compoenntName} {

  };
</style>`
},
  entryTemplate: compoenntName => {
    return `
      import { App } from 'vue'
      import ${compoenntName} from './${compoenntName}.vue'
      ${compoenntName}.install = (app:App):void=>{
        app.component(${compoenntName}.name,${compoenntName});
      }
      export default ${compoenntName}
    `
  }
}
