<template>
  <div class="container">
    <div class="help-title"><h1>Help page</h1></div>
    <div class="deniss">
      <div><h2>Deniss</h2></div>
    </div>
    <div class="aleksandrs">
      <div><h2>Aleksandrs</h2></div>
    </div>
    <div class="gustavs">
      <div><h2>Gustavs</h2></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "help.vue",
  auth: false
}
</script>

<style scoped>
.container {
  width: 70%;
  margin-inline: auto;
}

.help-title {
  width: 100%;
}

.help-title > h1 {
  color: white;
  text-align: center;
  font-family: Alata;
}
</style>
