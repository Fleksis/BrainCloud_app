<template>
  <div>
    <div id="navigation-bar">
      <div class="navigation-bar-horizontal">
        <div>
          <img class="navigation-bar-logo" src="~assets/svg/Brain.svg">
          <h3>Brain Cloud</h3>
        </div>
        <div class="navigation-buttons">
          <NuxtLink to="/profile">Profile</NuxtLink>
          <NuxtLink to="/">Subscription</NuxtLink>
          <NuxtLink to="/">About Us</NuxtLink>
          <NuxtLink to="/">Admin Page</NuxtLink>
        </div>
        <ProfileButton />
      </div>
    </div>
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserNavigationBar',
  mounted() {
    if (!this.$store.state.auth.loggedIn) {
      this.$router.push('/auth/login')
    }
  }
}
</script>

<style scoped>

.asdasd {
  position: absolute;
  top: 500px;
}
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

.navigation-buttons {
  margin-right: 130px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 50px;
  color: white;
}

.navigation-buttons > a {
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-family: Alata;
  transition: 0.2s;
  cursor: pointer;
}

.navigation-buttons > a:hover {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}
</style>
