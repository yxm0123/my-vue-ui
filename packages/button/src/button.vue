<template>
  <el-button class="my-button">
    <span v-if="$slots.default"><slot></slot></span>
  </el-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyButton'
})
</script>
<style lang="scss" scoped>
.my-button{
  color: pink;
}
</style>
