<template>
  <div class="container">
    <div class="navigation">
      <HelpNavigationHeader v-show="isLoggedIn" title="Register" header="register"/>
      <HelpNavigationHeader v-show="isLoggedIn" title="Login" header="login"/>
      <HelpNavigationHeader v-show="isAdmin" title="Admin" header="admin"/>
      <HelpNavigationHeader title="About us" header="aboutUs"/>
      <HelpNavigationHeader title="Folder" header="folder"/>
      <HelpNavigationHeader title="File" header="file"/>
      <HelpNavigationHeader title="Subscription" header="subscription"/>
      <HelpNavigationHeader title="Personal data update" header="userUpdate"/>
    </div>
    <div class="instructions">
      <HelpInstructionBox
        v-show="isLoggedIn"
        header="register"
        title="Reģistrācija"
        description='Lai reģistrētos, dodieties uz mūsu vietni un uzreiz pirmajā lapā "Home" augšējā labajā stūrī redzēsiet uzrakstu "Register", virziet kursoru virs tā un noklikšķiniet , tad, atvērsies jauna lapu ar formu centrā, kas jāaizpilda lai veiksmīgi reģistrēties. '
        :steps="[
          'Full name or username laukā jums ir jāieraksta savs pilns vārds (vārds, uzvārds) vai jāizdomā savs lietotājvārds, taču, lūdzu, ņemiet vērā, ka jūs nevarat izmantot esošu lietotājvārdu.',
          'Email laukā jums jāievada savs e-pasts un ņemiet vērā, ka šeit ir nepieciešams unikāls e-pasts, jo, ja konts ar šo e-pastu jau pastāv, jūs nevarēsit reģistrēties. (e-pasta piemērs: abc123@abc.com) ',
          'Password laukā jums ir jāievada droša parole. Lai izveidotu paroli, jāatbilst kritērijiem: Minimālais 	garums ir 8 rakstzīmes, Parolē jāsatur vismaz viens mazs un viens liels burts, kā arī cipars no 0 	līdz 9. ',
          'Repeat password laukā viss, kas jums jādara, ir pārrakstīt iepriekš ievadīto paroli. ',
        ]"
      />
      <HelpInstructionBox
        v-show="isLoggedIn"
        header="login"
        title="Login"
        description="To use BrainCloud, the user needs to log into their account."
        :steps="[
          'Go to Log In page',
          'In the field Email, the user needs to enter their email.',
          'In the field Password, user needs to enter their password.',
          'To complete login, user needs to press the Log In button.'
        ]"
      />
      <HelpInstructionBox
        v-show="isAdmin"
        header="admin"
        title="Admin page"
        description="Ability to see all the users, change their data, upgrade their subscription and delete them. "
      />
      <HelpInstructionBox
        v-show="isAdmin"
        title="Rename"
        :steps="[
          'Go to ‘Admin page’ page, by pressing ‘Admin page’ on the navigation bar. ',
          'Press ‘More’ on the desirable user. ',
          'Click on ‘Rename’ and change their data. ',
          'To confirm press ‘Create’. ',
        ]"
      />
      <HelpInstructionBox
        v-show="isAdmin"
        title="Delete"
        :steps="[
          'Go to ‘Admin page’ page, by pressing ‘Admin page’ on the navigation bar. ',
          'Press ‘More’ on the desirable user. ',
          'Click ‘Delete’ and then click on ‘Delete’. ',
        ]"
      />
      <HelpInstructionBox
        v-show="isAdmin"
        title="Reset password"
        :steps="[
          'Go to ‘Admin page’ page, by pressing ‘Admin page’ on the navigation bar. ',
          'Press ‘More’ on the desirable user. ',
          'Click ‘Reset password’ and then click on ‘Reset’. ',
        ]"
      />
      <HelpInstructionBox
        title="About us"
        header="aboutUs"
        description="In about us you can try contacting us and see what we consider our core values. "
      />
      <HelpInstructionBox
        title="Contact Us"
        :steps="[
          'To reach ‘About us’ page, press ‘About us’ button on the navigation bar. ',
          'Scroll down to the bottom, so you can see Contact us fully.',
          'Enter your First name, Last name, Email, then enter the topic you want to know about and them you can enter your description.',
          'To send it, press ‘Submit’ button.',
        ]"
      />
      <HelpInstructionBox
        title="Folder"
        header="folder"
        description="Folders are usually needed to group files, but for us folders are needed to start uploading files to ‘Brain-cloud’. They are a renamable way to organize files with an option to make up to 20 folders for the Free plan."
      />
      <HelpInstructionBox
        title="Create"
        :steps="[
          'To create a folder, you need to press the ‘Create Folder’ button.',
          'A small window will appear under the ‘Create Folder’ button, where it will ask to input the folder name. To confirm the name press ‘Create’.',
        ]"
      />
      <HelpInstructionBox
        title="Delete"
        :steps="[
          'There will be a button that looks like a folder that flashes with a red X when you hover over it, that appears next to the folder name.',
          'When you press the button, a confirmation popup appears and to procced you need to press the ‘Delete’ button.',
        ]"
      />
      <HelpInstructionBox
        title="Rename"
        :steps="[
          'To rename you will need to press the button that looks like a pencil.',
          'When you press the button, a confirmation popup appears where you can enter a new name for the folder and to procced you need to press the ‘Change’ button.'
        ]"
      />
      <HelpInstructionBox
        title="Files"
        header="file"
        description="You can choose a folder where you want to upload the file. There is an option to upload a file through file explorer or by dragging in the file. Search for your file, by opening the folder where your file is saved, and typing the name or description of the file. Clicking on a file you can see its data like its title, description, upload data, size. Also clicking on a file you can download, rename or delete it."
      />
      <HelpInstructionBox
        title="File Upload"
        :steps="[
          'Open the folder where you want to upload the file (You must have at least one folder).',
          'Press the button ‘Add File’.',
          'In opened window, select your file which you want to upload and press ‘Ok’.',
          'In the ‘Title’ field write name for your file and in the ‘Description’ field write about your file.',
          'To finish your file upload, press the button ‘Create’.',
        ]"
      />
      <HelpInstructionBox
        title="File Search and View"
        :steps="[
          'Click on the search bar.',
          'Type the file name or description.',
          'When your file will be found, click on him.',
          'Then you can see its data.',
        ]"
      />
      <HelpInstructionBox
        title="File Dowload"
        :steps="[
          'Click on your desired file.',
          'In the opened window, you can see ‘Dowload’ button, click on it.',
          'In the opened panel, select ‘Save As..’ Function.',
          'Select folder on your desktop where you want to save file.',
          'Press button ‘Save’ and finish file dowload.',
        ]"
      />
      <HelpInstructionBox
        title="File Rename"
        :steps="[
          'Click on your file.',
          'In the opened window, you can see ‘Rename’ button , click on it.',
          'In next opened window, you can see ‘Title’ and ‘Description’ fields.',
          'In ‘Title’ field write the files new name.',
          'In the ‘Description’ field write a new description for your file.',
          'To save the changes, press the button ‘Change’.',
          'Changes will be accepted.',
        ]"
      />
      <HelpInstructionBox
        title="File Delete"
        :steps="[
          'Click on your file.',
          'In the opened window, you can see the ‘Delete’ button, click on it.',
          'In the opened window press ‘Delete’. ',
          'The file will be deleted.',
        ]"
      />
      <HelpInstructionBox
        title="Subscription"
        header="subscription"
        description="For subscription there are 4 types of plans Free/Basic/Extra/Rugged storage. Each of them can provide benefits like more storage, options to create more folders and files while uploding bigger files. You are automatically subscribed to the Free option. To upgrade your abilities, you can choose to buy a plan for a respective price of 9.99/14.99/19.99 €."
      />
      <HelpInstructionBox
        title="Upgrading"
        :steps="[
          'Go to the ‘Subscription’ page.',
          'Choose an appropriate option for your needs. For example, like the ‘Basic’ plan.',
          'Next your, going to be redirected to a payment page.',
          'Fill out the available inputs and press ‘Pay’ to proceed.',
          'Then you will be readdressed to the ‘Home’ page and a popup should appear with a message ‘You successfully upgraded your plan’.',
        ]"
      />
      <HelpInstructionBox
        title="Personal data update"
        header="userUpdate"
        description="With account settings you can refresh your picture, username, email and password."
      />
      <HelpInstructionBox
        title="Update picture"
        :steps="[
          'Click on your profile icon, on top-right corner of the page.',
          'Click the ‘Account settings’ button.',
          'To change your profile picture, click ‘Personal Data’.',
          'Then press the ‘Change avatar’.',
          'File explore will pop up, so you can choose what will be your new image.',
          'To confirm your actions, press ‘Save’.',
        ]"
      />
      <HelpInstructionBox
        title="Update Username/Email/Password"
        :steps="[
          'Click on your profile icon, on top-right corner of the page.',
          'Click the ‘Account settings’ button.',
          'To change your Username/Email/Password, click ‘Personal Data’.',
          'And type in your new data in the corresponding inputs.',
          'To confirm your actions, press ‘Save’.',
        ]"
      />
    </div>
    <div class="upbutton">
      <img src="~assets/svg/arrow-up.svg" @click="scrollToTop">
    </div>
  </div>
</template>

<script>

export default {
  name: 'help',
  layout: 'NotUserNavigationBar',
  auth: false,
  data() {
    return {
      isAdmin: false,
      isLoggedIn: false
    }
  },
  mounted() {
    if (this.$store.state.auth.loggedIn && this.$auth.$state.user.data.role[0] === 'Main Administrator') {
      this.isAdmin = true
    } else if(!this.$store.state.auth.loggedIn) {
      this.isLoggedIn = true
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 100px;
  width: 70%;
  margin-inline: auto;
  gap: 100px;
}

.navigation {
  width: fit-content;
  color: white;
  font-family: Alata;
  position: fixed;
  height: fit-content;
}

.navigation > h2 {
  cursor: pointer;
  transition: 0.2s;
}

.navigation > h2:hover {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}

.instructions {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.upbutton {
  display: flex;
  z-index: 10;
  position: fixed;
  top: 90%;
  right: 15%;
  justify-content: end;
  padding-bottom: 50px;
}

.upbutton > img {
  padding: 5px;
  color: white;
  border: solid 3px #6C63FF;
  height: 45px;
  width: 45px;
  flex-shrink: 0;
  text-align: center;
  border-radius: 50%;
  transition: 0.2s;
  cursor: pointer;
  user-select: none;
}

.upbutton > img:hover {
  transform:scale(1.2);
}

</style>
