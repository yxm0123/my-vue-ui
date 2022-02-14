<template>
  <div>
    23232
    <cer-button>点击</cer-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import comps from '../packages/index'
import {CerButton} from '../packages'
export default defineComponent({
  name: 'App',
  components:{
    CerButton
  },
  setup() {
    onMounted(()=>{
      console.log(comps, 656);
      
    })
  },
})
</script>
