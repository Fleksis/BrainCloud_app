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
        <div class="profile-button">
          <img :src="user.image" @click="isOpenedProfile = !isOpenedProfile">
          <div v-show="isOpenedProfile" class="user-profile-dropdown">
            <div class="profile-dropdown-data">
              <img :src="user.image">
              <div>
                <h3>{{ user.name }}</h3>
                <h4>{{ user.email }}</h4>
              </div>
            </div>
            <div class="profile-dropdown-buttons">
              <NuxtLink to="/settings"><img src="~/assets/svg/Settings.svg">Account settings</NuxtLink>
              <a @click="logout()">Logout</a>
            </div>
          </div>
        </div>
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
  auth: true,
  data () {
    return {
      isOpenedProfile: false,
      user: this.$auth.$state.user.data
    }
  },
  mounted() {
    console.log(this.user)
    if (!this.$store.state.auth.loggedIn) {
      this.$router.push('/auth/login')
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout()
      await this.$router.push('/auth/login')
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

.profile-button {
  position: relative;
  padding-right: 60px;
}

.profile-button > img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
}

.user-profile-dropdown {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 37px;
  left: -300px;
  background-color: #2B2E32;
  gap: 10px;
  padding: 10px 50px;
  border-radius: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-family: Alata;
}

.profile-dropdown-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.profile-dropdown-data > img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 50%;
}

.profile-dropdown-data > div > h3 {
  color: white;
}

.profile-dropdown-data > div > h4 {
  color: #ffffff99;
}

.profile-dropdown-data > div > h3,
.profile-dropdown-data > div > h4 {
  font-weight: lighter;
  margin: 0;
}

.profile-dropdown-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.profile-dropdown-buttons > div {
  display: flex;
}

.profile-dropdown-buttons > a,
.profile-dropdown-buttons > a {
  display: flex;
  gap: 5px;
  padding: 10px 15px;
  border-radius: 15px;
  background-color: #5B5D62;
  text-decoration: none;
  color: white;
  cursor: pointer;
}

@media only screen and (max-width: 900px) {
  body {
    color: red;
  }
}
</style>
