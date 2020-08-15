<template>
  <div class="container">
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item active">
          <router-link :to="index" class="text-dark">主页</router-link>
        </li>
      </ol>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      index: '/'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
