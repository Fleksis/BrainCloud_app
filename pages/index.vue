<template>
  <div class="container">
<!--    <img src="assets/svg/">-->
    <div class="navigation-bar">
      <h2>Brain Cloud</h2>
      <div>
        <h3>Register</h3>
        <h3>Login</h3>
      </div>
    </div>
    <div class="title-container">
      <div class="title">
        <div class="title-text">
          <h1>We provide <span>reliable file storage</span></h1>
          <h2>Need secure file storage? Get up to 20 Gb of free storage by signing up today.</h2>
        </div>
        <div class="title-buttons">
          <button>Create Account</button>
          <h3>or</h3>
          <button>Already have?</button>
        </div>
      </div>
      <img src="~assets/svg/Hero_title.svg">
    </div>
    <div>
      <div class="instant-access">
        <img src="~assets/svg/Hero_time.svg">
        <div class="title-text">
          <h1><span>Instant Access </span>for your files</h1>
          <h2>Our file storage application provides instant access to your files from any device. No more waiting for files to load or transfer.</h2>
        </div>
        <div class="title-buttons">
          <button>Create Account</button>
          <h3>or</h3>
          <button>Already have?</button>
        </div>
      </div>
    </div>
    <div>
      <div></div>
      <div></div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 75px;
  max-width: 1980px;
  margin-inline: auto;
}

.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  background-color: #6C63FF;
  font-family: Alata;
}

.navigation-bar > h2 {
  color: white;
  margin: 0;
}

.navigation-bar > div {
  display: flex;
  gap: 20px;
}

.navigation-bar > div > h3 {
  color: white;
  margin: 0;
  font-weight: normal;
  cursor: pointer;
}

.navigation-bar > div > h3:hover {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}

.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  font-family: Alata;
}

.title {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.title-text > h1,
.title-text > h2 {
  margin: 0;
  color: white;
}

.title-text > h1 > span {
  color: #6C63FF;
}

.title-text > h2 {
  width: 70%;
  font-weight: normal;
}

.title-buttons {
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.title-buttons > h3 {
  font-weight: normal;
  margin: 0;
  color: white;
}

.title-buttons > button {
  background-color: #484c54;
  border-radius: 5px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  padding: 5px 30px;
  transition: .2s;
}

.title-buttons > button:first-child {
  background-color: #6C63FF;
}

.title-buttons > button:hover {
  background-color: #2b2e32;
  outline: 2px solid #6C63FF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.title-container > img {
  height: 380px;
}
</style>
