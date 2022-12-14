<template>
  <div>
    <h2>dasdklsjdkas</h2>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  layout: 'UserNavigationBar',
  auth: true,
  data () {
    return {
      user: this.$auth.$state.user,
    }
  }
}
</script>

<style scoped>
div {
  margin-top: 100px;
}
</style>
