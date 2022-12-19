<template>
  <div>
    <div id="navigation-bar">
      <div class="navigation-bar-horizontal">
        <div>
          <img class="navigation-bar-logo" src="~assets/svg/Brain.svg">
          <h3>Brain Cloud</h3>
        </div>
        <ProfileButton />
      </div>
    </div>
    <div>
      <Nuxt style="margin-left: 15%"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileNavigationBar',
  mounted() {
    if (!this.$store.state.auth.loggedIn) {
      this.$router.push('/auth/login')
    }
  }
}
</script>

<style scoped>

#navigation-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.navigation-bar-horizontal {
  position: absolute;
  background-color: #484C54;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  width: 100%;
  z-index: 20;
  padding-left: 30px;
}

.navigation-bar-horizontal > div {
  justify-content: flex-start;
  width: fit-content;
  display: flex;
  align-items: center;
}

.navigation-bar-logo {
  width: 64px;
  background-color: red;
}
</style>
