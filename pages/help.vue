<template>
  <div class="container">
    <help-instruction-box
      title="How to asd1"
      description="asd2 is something that you need to use very carefully "
      :steps="['asd1','asd2','asd3','asd4']"
    />
  </div>
</template>

<script>
export default {
  name: 'help',
  layout: 'NotUserNavigationBar',
  auth: false
}
</script>

<style scoped>
.container {
  margin-top: 100px;
  width: 70%;
  margin-inline: auto;
}
</style>
