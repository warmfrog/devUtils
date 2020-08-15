<template>
  <div class="col-12  col-sm-6  col-md-6 col-lg-4">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <router-link :to="tool.url" class="card-title h5 text-dark">{{ tool.name }}</router-link>
        <p class="card-text">{{ tool.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tool',
  props: {
    'tool': {
      'name': String,
      'url': String,
      'description': String
    }

  }
}
</script>

<style>
a:focus {
  text-decoration: none
}
</style>
