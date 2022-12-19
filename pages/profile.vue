<template>
  <div class="body-container">
    <div class="side-bar">
      <div class="create-folder">
        <div @click="addFolder()">
          <img src="~assets/svg/Add.svg">
          <span>Create</span>
        </div>
        <AddFolder v-show="showAddFolderPopup" @close-modal="showAddFolderPopup = false" @close-and-refresh-folders="userFolders()" />
      </div>
      <div class="folders-container">
        <h2>Your folders</h2>
        <div>
          <h2 v-show="folders.length === 0">You do not have any folders</h2>
          <div v-for="(folder, index) in folders" :key="index" class="folders">
            <div class="folder-icon" @click="deleteFolder(index)">
              <img class="folder-icon" src="~assets/svg/Folder.svg">
              <img class="folder-cross" src="~assets/svg/Cross.svg">
            </div>
            <h3>{{ folder.title }}</h3>
            <DeleteFolder v-if="folder.deleteModal" @close-modal="deleteFolder(index)" :id="folder.id" :title="folder.title" @close-and-refresh-folders="userFolders()"/>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-left: 15%; margin-top: 50px">
      <h2>{{ this.$auth.$state.user }}</h2>
    </div>
  </div>
</template>

<script>
import DeleteFolder from "../components/DeleteFolder";
export default {
  name: 'ProfilePage',
  components: {DeleteFolder},
  layout: 'ProfileNavigationBar',
  auth: true,
  data () {
    return {
      folders: [],
      showAddFolderPopup: false,
    }
  },
  mounted() {
    this.userFolders()
  },
  methods: {
    addFolder () {
      this.showAddFolderPopup = !this.showAddFolderPopup
      this.folders.map((folder) => {
        folder.deleteModal = false
        return folder
      })
      this.$forceUpdate();
    },
    deleteFolder (index) {
      this.folders[index].deleteModal = !this.folders[index].deleteModal
      this.showAddFolderPopup = false
      this.$forceUpdate();
    },
    async userFolders () {
      this.showAddFolderPopup = false
      await this.$axios.get('/user_folders').then((res) => {
        console.log(res.data.data)
        this.folders = res.data.data
        this.folders = this.folders.map((folder) => {
          folder.deleteModal = false
          return folder
        })
        console.log(this.folders)
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>
.body-container {
  display: flex;
  flex-direction: row;
  margin-left: 0 !important;
}

.side-bar {
  margin-top: 50px;
  position: fixed;
  height: calc(100% - 50px);
  width: 300px;
  background-color: #2B2E32;
  overflow-y: auto;
  overflow-x: hidden;
  text-overflow: ellipsis;
  scrollbar-color: #484C54 #00000000;
  scrollbar-width: thin;
}

.create-folder{
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #484C54;
}

.create-folder > div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: Alata;
  background-color: #222222;
  padding: 8px 15px;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
}

.create-folder > div > span {
  font-size: 18px;
  color: white;
}

.folders-container > div {
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  padding: 10px 5px 150px 25px;
}

.folders-container > div > h2 {
  font-family: Alata;
  text-align: center;
  color: #A3A6AA;
  margin: 0;
}

.folders-container > h2 {
  font-family: Alata;
  color: #A3A6AA;
  text-align: left;
  margin: 0;
  padding: 10px;
}

.folders {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: fit-content;
  user-select: none;
}

.folders > .folder-icon {
  position: relative;
}

.folder-cross {
  display: none;
  position: absolute;
  width: 13px;
  top: 7px;
  left: 7px;
  filter: invert(70%) sepia(100%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
  transition: 0.5s;
}

.folders > div:hover > .folder-cross {
  display: initial;
}

.folders > h3 {
  font-family: Alata;
  font-weight: normal;
  color: #A3A6AA;
  margin: 0;
}
</style>
