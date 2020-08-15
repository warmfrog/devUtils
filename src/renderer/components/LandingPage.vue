<template>
  <div class="container">
    <div class="row">
      <tool v-for="tool in tools" :key="tool.id" :tool="tool"></tool>
    </div>
  </div>
</template>

<script>
import tool from './LandingPage/Tool'
import ToolList from '@/assets/json/tools.json'
export default {
  name: 'landing-page',
  components: {
    tool
  },
  data () {
    return {
      tools: ToolList.data
    }
  }
}
</script>

<style>
</style>
