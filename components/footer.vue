<template>
    <footer class="footer">
        <div class="socials">
            <div class="socials-wrapper">
                <div class="logo-container">
                    <img src="~assets/svg/logo.svg" class="logo" alt="">
                    <span class="logo-name">Brain Cloud</span>
                </div>
                <ul class="social-medias">
                    <li class="social-link"> Telegram <img class="mini-logo" src="~assets/svg/telegram.svg" alt=""></li>
                    <li class="social-link"> Instagram <img class="mini-logo"  src="~assets/svg/instagram.svg" alt=""></li>
                    <li class="social-link"> Twitter <img class="mini-logo"  src="~assets/svg/twitter.svg" alt=""></li>
                </ul>
            </div>
        </div>
        <div class="contact-info">
            <ul class="contact-info-list">
                <li class="contact-info-element" > Contact us </li>
                <li class="contact-info-element" > Support </li>
                <li class="contact-info-element" > <img class="contact-info-logo" src="~assets/svg/telephone.svg" alt=""> +371213129</li>
                <li class="contact-info-element" > <img class="contact-info-logo" src="~assets/svg/email.svg" alt=""> abc@abc.com</li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 20vh;
        background-color: #6C63FF;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        z-index: 200;
    }
    .socials {
    grid-column-start: 2;
    grid-column-end: 4;
    }
    .contact-info {
    grid-column-start: 8;
    grid-column-end: 11;
    }
    .logo-container {
    width: 100%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .logo {
    width: 30%;
    height: 40px;
    }
    .logo-name {
    color: white;
    font-size: 24px;
    width: 70%;
    height: 50px;
    line-height: 50px;
    letter-spacing: 1px;
    margin-left: 20px;
    }
    .social-medias {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-size: 15px;
    }   
    .social-link {
    cursor: pointer;
    width: 100%;
    }
    .mini-logo {
    display: block;
    width: 40px;
    height: 40px;
    align-self: center;
    margin: 10px auto;
    }
    .contact-info-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    list-style: none;
    font-size: 28px;
    line-height: 30px;
    }
    .contact-info-logo {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 0;
    }
    .contact-info-element {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 22px;
    }
    .socials-wrapper {
    height: 100%;
    width: 100%;
    }
    @media (max-width: 1150px) {
        .socials {
            grid-column-start: 2;
            grid-column-end: 5;
        }
    }
    @media (max-width: 768px) {
    .socials {
            grid-column-start: 2;
            grid-column-end: 6;
        }
    .contact-info {
            grid-column-start: 7;
            grid-column-end: 11;
        }   
    }
    @media (max-width: 550px) {
    .logo-name {
            font-size: 20px;
        }
    .contact-info-list {
            font-size: 20px;
        }
    }
</style>