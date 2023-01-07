<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <div class="card-price">
      <span> {{ price === 0 ? 'Free' : price + '€'}} </span>
      <span> {{ diskSpace }}  Storage </span>
    </div>
    <p>{{ description }}</p>
    <button @click="buyPlan()" :disabled="user.subscription_type.type === title" class="buy-button"> {{ user.subscription_type.type === title ? 'Active' : `Upgrade to ${title}` }} </button>
  </div>
</template>

<script>
export default {
  name: 'UpgradePlans',
  props: ['title', 'description', 'price', 'isAvailable', 'diskSpace'],
  data () {
    return {
      user: this.$auth.$state.user.data,
    }
  },
  methods: {
    async buyPlan () {
      await this.$axios.post('/bill/' + this.$auth.$state.user.data.id, {subscription_type: this.title}).then((res) => {
        console.log(res.data.url);
        window.open(res.data.url)
      }).catch((e) => {

      })
    }
  }
}
</script>

<style>
.card {
  background-color: #121212;
  height: 100%;
  width: 90%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
}

.card > h1 {
  padding-top: 20px;
  margin: 0;
  height: 20px;
  text-align: center;
  color: white;
}

.card-price {
  color: #BCC8D4;
  display: flex;
  flex-direction: column;

}

.card-price > span:first-child {
  text-align: center;
  font-size: 35px;
}

.card-price > span:last-child {
  font-size: 20px;
}

.card > p {
  text-align: center;
  padding-left: 20px;
  padding-right: 15px;
  color: #BCC8D4;
  margin: 0;
}

.buy-button {
  background-color:#484c54;
  border-radius: 15px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  padding: 5px 30px;
  transition: .2s;
  margin-bottom: 10px;
  width: 60%;
  height: 50px;
  text-align: center;
}

.buy-button:hover {
  background-color: #2b2e32;
  outline: 2px solid #6C63FF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.buy-button:hover.buy-button:disabled {
  background-color: #2b2e32;
  outline: 2px solid #640000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.buy-button:disabled {
  background-color: #222222;
}

@media only screen and (max-width: 1100px) {
  .card {
    margin-inline: auto;
    gap: 25px;
  }
}
</style>
