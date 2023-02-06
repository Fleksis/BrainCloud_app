<template>
  <div class="container">
    <div class="help-title"><h1>Help page</h1></div>
    <div class="deniss">
      <div><h2>Deniss</h2></div>
    </div>
    <div class="aleksandrs">
      <div><h2>Aleksandrs</h2></div>
    </div>
    <div class="subscription">
      <div><h2>Gustavs</h2></div>
        <h2>
            Subscription
        </h2>
        <p>
            For subscription there are 4 types of plans Free/Basic/Extra/Rugged storage. 
            Each of them can provide benefits like more storage, 
            options to create more folders and files while uploding bigger files. 
            You are automatically subscribed to the Free option. To upgrade your abilities, 
            you can choose to buy a plan for a respective price of 9.99/14.99/19.99 €.
        </p>
        <h3>
            Upgrade
        </h3>
        <ol type="1">
            <li>
                Go to the ‘Subscription’ page.
            </li>
            <li>
                Choose an appropriate option for your needs. For example, like the ‘Basic’ plan.
            </li>
            <li>
                Next your, going to be redirected to a payment page.
            </li>
            <li>
                Fill out the available inputs and press ‘Pay’ to proceed.
            </li>
            <li>
                Then you will be readdressed to the ‘Home’ page and a popup should appear with a message ‘You successfully upgraded your plan’.
            </li>
        </ol>
        <ul>
            <li>
                You can recheck if you have successfully enhanced your plan, by pressing on your user icon. If successful under the storage bar should be the new storage limit.
            </li>
            <li>
                It is possible to get a popup with a message ‘Payment failed’. By clicking on the back button in the payment page.
            </li>
        </ul>
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
    color: #6C63FF;
    font-weight: normal;
    text-align: center;
    font-family: Alata;
}

.subscription > h2 {
    color: #6C63FF;
    font-weight: normal;
    font-family: Alata;
}

.subscription > p {
    width: 90%;
    margin-inline: auto;
    color: white;
    text-align: center;
    font-family: Alata;
}

.subscription > h3 {
    color: #6C63FF;
    font-weight: normal;
    font-family: Alata;
}

.subscription > ol {
    width: 86%;
    margin-inline: auto;
    color: white;
    font-family: Alata;
}

.subscription > ul {
    width: 79%;
    margin-inline: auto;
    color: white;
    font-family: Alata;
}
</style>
