<template>
  <h2 @click="redirect()">{{ title }}</h2>
</template>

<script>
export default {
  name: "HelpNavigationHeader",
  props: ['title', 'header'],
  methods: {
    redirect() {
      window.location.href = window.location.origin + '/help' + '#' + this.header
    }
  }
}
</script>

<style scoped>

</style>
