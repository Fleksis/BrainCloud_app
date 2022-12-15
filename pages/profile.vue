<template>
  <div>
    <h2>{{ this.$auth.$state.user }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  layout: 'UserNavigationBar',
  auth: true
}
</script>

<style scoped>
div {
  margin-top: 100px;
}
</style>
