<template>
  <div class="container">
    <div class="title-container">
      <img class="svg" src="~assets/svg/ContactUsLogo.svg">
      <div class="title-card">
        <div>
          <img src="~assets/svg/logo.svg" class="logo" alt="">
          <h1>Brain Cloud</h1>
        </div>
        <p>Welcome to our file storage application! With us, you can easily store and access your files from anywhere. Our platform ensures that your data is safe and protected.</p>
        <img class="circle-title" src="~assets/svg/Circle.svg">
      </div>
    </div>
    <div class="main-container">
      <div class="core-features">
        <div class="key-features-title">
          <h1>Our core values</h1>
        </div>
        <div class="key-features-cards">
          <div>
            <div>
              <img src="~assets/svg/Transparency.svg">
              <h3>Transparency</h3>
            </div>
            <p>Easy-to-use file storage app with full transparency for all file activities and user access.</p>
          </div>
          <div>
            <div>
              <img src="~assets/svg/Efficiency.svg">
              <h3>Efficiency</h3>
            </div>
            <p>Convenient file storage app with anytime, anywhere access on any device.</p>
          </div>
          <div>
            <div>
              <img src="~assets/svg/Control.svg">
              <h3>Control</h3>
            </div>
            <p>Fast and efficient file storage app featuring advanced file management and searching tools.</p>
          </div>
        </div>
      </div>
      <div class="contact_us">
        <div class="contact-form-title">
          <h2>Contact Us</h2>
          <p>Need to get in touch with us?</p>
          <p>Fill out the form with your problem.</p>
        </div>
        <div class="form">
          <ContactUsForm />
          <img class="circle-form" src="~assets/svg/Circle.svg">
        </div>
      </div>
    </div>
    <img class="circle-background" src="~assets/svg/Circle.svg">
    <img class="circle-background-center" src="~assets/svg/Circle.svg">
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  layout: "UserNavigationBar",
}
</script>

<style scoped>
* {
  font-family: Alata;
  margin: 0;
  padding: 0;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
}

.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-top: 25px;
}

.title-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  color: white;
  background-color: #6C63FF;
  width: 500px;
  height: fit-content;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  padding: 20px 20px 40px;
  text-align: center;
}

.title-card > p {
  font-size: 24px;
}

.title-card > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
}

.core-features {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.key-features-title > h1 {
  color: white;
  font-weight: normal;
}

.key-features-cards {
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 25px;
}

.key-features-cards > div {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 15px;
  width: 250px;
  text-align: center;
  padding: 20px;
  align-self: normal;
  background-color: #222222;
  border-radius: 15px;
  border-top: solid 5px #6C63FF;
}

.key-features-cards > div > div > img {
  height: 86px;
}

.key-features-cards > div > div > h3,
.key-features-cards > div > p {
  color: #97aec5;
}

.contact_us {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form-title {
  text-align: end;
}

.contact-form-title > h2 {
  color: #6C63FF;
  font-weight: lighter;
}

.contact-form-title > p {
  color: white;
}

.form {
  position: relative;
}


.circle-title {
  position: absolute;
  top: -150px;
  left: -170px;
  z-index: -1;
}
.circle-form {
  position: absolute;
  bottom: -100px;
  left: -120px;
  z-index: -1;
}
.circle-background{
  position: absolute;
  bottom: -100px;
  left: -150px;
  z-index: -1;
}
.circle-background-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

@media only screen and (max-width: 1500px) {
  .title-container {
    flex-direction: column-reverse;
    gap: 30px;
  }
  .title-container > img {
    display: none;
  }
  .title-card {
    border-radius: 15px;
  }
  .main-container {
    flex-direction: column;
  }
  .key-features-title > h1 {
    text-align: center;
  }
  .contact-form-title {
    text-align: center;
  }
  .circle-form{
    left: 150px;
  }
}

@media only screen and (max-width: 950px) {
  .key-features-cards {
    flex-direction: column;
  }
}
</style>
