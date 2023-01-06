<template>

    <div>
        <div class="welcome-section">
            <img class="svg" src="~assets/svg/contact_ussvg.svg">
            <div class="bc-section">
                <p>Brain Cloud</p>
                <p>Hey! We are Brain Cloud.The
                internet cloud storage service.</p>
                <img src="~assets/svg/logo.svg" class="logo" alt="">
            </div>
        </div>
        <div class="contactForm"><contactWelcome></contactWelcome></div>
        <div class="ocv-tittle">
                <p>Our Core Values</p>
            </div>
        <div class="ourCoreValues">
            <div class="Transparency">
                <img class="fourth" src="~assets/svg/svg4.svg">
                <p>Transparency</p>
                <p class="text3">abgdsa asd hasd</p>
                <p class="text3">abgdsa asd hasd</p>
                <p class="text3">abgdsa asd hasd</p>
            </div>
            <div class="Control">
                <img class="fifth" src="~assets/svg/svg5.svg">
                <p>Control</p>
                <p class="text3">abgdsa asd hasd</p>
                <p class="text3">abgdsa asd hasd</p>
                <p class="text3">abgdsa asd hasd</p>
            </div>
            <div class="Efficiency">
                <img class="sixth" src="~assets/svg/svg6.svg">
                <p>Efficiency</p>
                <p class="text3">abgdsa asd hasd</p>
                <p class="text3">abgdsa asd hasd</p>
                <p class="text3">abgdsa asd hasd</p>
            </div>
        </div>
        <div class="userForm"><userForm></userForm></div>
  
        <div class="container">
            <img class="first" src="~assets/svg/svg1.svg">
            <img class="second" src="~assets/svg/svg1.svg">
            <img class="third" src="~assets/svg/svg1.svg">
        </div>
    </div>
</template>

<script>
import UserForm from '../components/userForm.vue';

export default {
    name: "ContactUs",
    layout: "UserNavigationBar",
    components: { UserForm }
}
</script>

<style scoped>
* {
    font-family: Alata;
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
    margin-top: 50px;
    display: flex;
    width: 100%;
    justify-content: end;

}
.userForm{
    margin-top: 50px;
    display: flex;
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
.bc-section{
    display: flex;
    color: white;
    font-size: 48px;
    background-color: #6C63FF;
    width: 500px;
    height: 350px;
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    padding: 1rem;
    justify-content: flex-end;
    align-items: flex-start;
}
.bc-section > img{
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: start;
}
.ourCoreValues{
    display: flex;
    justify-content: flex-start;
    gap: 70px;
    margin-left: 40px;
}
.Transparency{
    color: white;
    font-size: 32px;
    text-align: center;
}
.Control{
    color: white;
    font-size: 32px;
    text-align: center;
}
.Efficiency{
    color: white;
    font-size: 32px;
    text-align: center;
}

.ocv-tittle{
    color: #6C63FF;
    font-size: 48px;
    text-align: start;
    padding: 40px;
}

.fourth{
    display: flex;
    justify-content: space-between;
    width: 75px;
    height: 65px;
    margin-left: 40px;
}
.fifth{
    width: 75px;
    height: 65px;
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
}

.sixth{
    align-items: center;
    width: 75px;
    height: 65px;
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
}

.text3{
    font-size: 24px;
}
</style>