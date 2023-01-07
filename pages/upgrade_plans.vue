<template>
  <div class="container">
    <div class="title">
      <img src="~assets/svg/Brain.svg">
      <h1>Choose a plan to upgrade</h1>
    </div>
    <div class="tariffs-container">
      <Plan
        v-for="(tariff, index) of availableTariffs"
        :key="index"
        :title=tariff.title
        :description="tariff.description"
        :price=tariff.price
        :isAvalible=tariff.isAvailable
        :diskSpace=tariff.diskSpace
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpgradePlan',
  layout: 'UserNavigationBar',
  auth: true,
  data() {
    return {
      availableTariffs: [
        {
          title: 'Free',
          description: 'Free plan, where you have only 20 gigabytes of storage with some limitations',
          price: 0.00,
          isAvailable: true,
          diskSpace: '20 GB'
        },
        {
          title: 'Basic',
          description: 'You have to buy, to get more storage with no minimal file size or max file size',
          price: 9.99,
          isAvailable: false,
          diskSpace: '50 GB'
        },
        {
          title: 'Extra',
          description: 'More storage, no more limits for the number of files and folders',
          price: 14.99,
          isAvailable: false,
          diskSpace: '100 GB'
        },
        {
          title: 'Rugged storage',
          description: 'five times more storage than plan Extra and no more limitations',
          price: 19.99,
          isAvailable: false,
          diskSpace: '500 GB'
        }
      ]
    }
  }
}

</script>

<style scoped>
.container {
  background-color: #2B2D30;
  border-top: solid 5px #6C63FF;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px;
  width: 80%;
  height: 70%;
  margin-inline: auto;
  font-family: Alata;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title > img {
  height: 75px;
}

.title > h1 {
  margin: 0;
  text-align: center;
  color: white;
}

.tariffs-container {
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
}

@media only screen and (max-width: 1100px) {
  .container {
    height: initial;
    top: 80%;
  }
  .tariffs-container {
    flex-direction: column;
  }
}

@media only screen and (max-width: 700px) {
  .container {
    top: 90%;
  }
}
</style>
