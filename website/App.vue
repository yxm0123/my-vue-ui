<template>
  <div>
    23232
    <my-button>点击</my-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import comps from '../packages/index'
import {MyButton} from '../packages'
export default defineComponent({
  name: 'App',
  components:{
    MyButton
  },
  setup() {
    onMounted(()=>{
      console.log(comps, 656);
      
    })
  },
})
</script>
