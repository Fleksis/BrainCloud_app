<template>
  <div class="delete-folder-container">
    <h2>{{ title }}</h2>
    <div class="folder-form-buttons">
      <button @click="$emit('close-modal')">Cancel</button>
      <button @click="deleteFolder()">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteFolder",
  props: ['id', 'title'],
  methods: {
    async deleteFolder () {
      await this.$axios.delete('/folders/' + this.id).then((res) => {
        this.$emit('close-and-refresh-folders')
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>
.delete-folder-container {
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 20px;
  padding: 10px 10px;
  top: 30px;
  left: -15px;
  background-color: #222222;
  border-radius: 15px;
  box-shadow: 0 4px 4px #202020;
}

.delete-folder-container > h2 {
  font-family: Alata;
  font-weight: normal;
  text-align: center;
  color: #A3A6AA;
  margin: 0;
}

.delete-folder-container > div {
  display: flex;
  justify-content: space-between;
}

.folder-form-buttons {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.folder-form-buttons > button {
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
}

.folder-form-buttons > button:hover {
  background-color: #2b2e32;
  outline: 2px solid #6C63FF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
