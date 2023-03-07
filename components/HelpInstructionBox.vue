<template>
  <div class="instruction-container">
    <div class="step-name">
      <h2 :id="header">{{ title }}</h2>
    </div>
    <div class="instruction-part">
      <div class="step-description">
        <p>{{ description }}</p>
      </div>
      <div class="step-box">
        <div
          class="steps"
          v-for="step in steps"
          :key="step.index"
        >
          <h5>{{ 'Step ' + (steps.indexOf(step) + 1) }}</h5>
          <p>{{ step }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "helpInstructionBox",
  props: ['title', 'header','description','steps'],
  // data() {
  //   return {
  //   }
  // },
  // mounted() {
  //   if (this.$store.state.auth.loggedIn && this.$auth.$state.user.data.role[0] === 'Main Administrator') {
  //   } else {
  //     console.log('guest')
  //   }
  // }
}
</script>

<style scoped>
.instruction-container {
  margin-inline: auto;
  width: 750px;
  font-family: Alata;
  background-color: #5B5D62;
  border-radius: 15px;
}

.step-name {
  background-color: #6C63FF;
  padding: 30px;
  border: 1px solid #6C63FF;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.step-name > h2 {
  width: 100%;
  margin: 0;
  color: white;
}

.instruction-part {
  color: white;
  border: 1px solid #5b5d60;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 30px 30px 0;
}

.step-description {
}

.step-description > p {
  width: 100%;
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.step-box {
  margin-top: 25px;
}

.steps > h5 {
  margin: 0;
}

.steps > p {
  margin: 0;
  font-size: 24px;
  padding-top: 5px;
  padding-bottom: 20px;
}
</style>
