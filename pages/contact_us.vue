<template>

    <div>
        <div class="welcome-section">
            <img src="~assets/svg/contact_ussvg.svg">
        </div>
        <div class="contactForm"><contactWelcome></contactWelcome></div>
  
        <div class="container">
            <img class="first" src="~assets/svg/svg1.svg">
            <img class="second" src="~assets/svg/svg1.svg">
            <img class="third" src="~assets/svg/svg1.svg">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
export default {
  name: "ContactUs",
  layout: 'UserNavigationBar',
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
img {
    width: 500px;
    height: 250px;
}

.container {
    position: relative;
    height: 80vh;
}

.contactForm{
    display: flex;
    width: 100%;
    justify-content: end;

}
.contactForm > div{
    display: flex;
    flex-direction: column;
    justify-content: end;
}
.first{
    width: 351px;
    height: 359px;
    position: absolute;
    left: 15%;
    top: 35%;

}
.second{
    width: 523px;
    height: 535px;
    position: absolute;
    left: 45%;
    top: 2%;
}
.third{
    width: 351px;
    height: 359px;
    position: absolute;
    left: 75%;
    top: 50%;
}
.welcome-section{
    display: flex;
    justify-content: space-between;
    margin-top: 90px;
}

</style>