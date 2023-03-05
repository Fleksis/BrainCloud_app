<template>

</template>

<script>
export default {
  name: "index",
  mounted() {
    console.log(this.$route.query.session_id)
    console.log();
    this.$axios.get('/success/?session_id=' + this.$route.query.session_id + '&user=' + this.$route.query.user + '&subscription_type=' + this.$route.query.subscription_type).then((res) => {
      console.log(res.data)
      setTimeout(() => {
        this.$auth.fetchUser()
      }, 1000)
      // this.$router.push('/home?success=true')
    }).catch((e) => {
      console.log(e)
      // this.$router.push('/home?success=false')
    })
  }
}
</script>

<style scoped>

</style>
