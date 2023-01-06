<template>
    <div class="form-container">
      <div class="form-section">
        <label for="first-name">First name</label>
        <input class="input name" type="text" id="first-name">
      </div>
      <div class="form-section">
        <label for="last-name">Last name</label>
        <input class="input last-name" type="text" id="last-name">
      </div>
      <div class="form-section double">
        <label for="email">Email</label>
        <input class="input" type="text" id="email">
      </div>
      <div class="form-section double">
        <label for="email">Topic</label>
        <input class="input" type="text" id="email">
      </div>
      <div class="form-section double">
        <label for="email">Description</label>
        <textarea class="input description" id="email"></textarea>
      </div>
    </div>
</template>
  
<script>
export default {
name: "userForm"
}
</script>
  
<style scoped>
input {
    width: 95%;
    background-color: #5B5D62;
    outline: none;
    border: none;
    border-radius: 5px;
    height: 25px;
    color: #c2c1c1;
    padding: 5px;
    margin-top: 10px;
}
.form-container {
    width: 500px;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 2px solid #6C63FF;
    border-radius: 20px;
}
.name, .last-name {
  width: 90%;
}
.form-section {
    padding: 20px;
}
.form-section > label {
    color: #6C63FF;
    font-size: 23px;
}
.double {
    grid-column-start: 2 span;
}
.description {
    display: block;
    width: 95%;
    height: 50px;
    resize: none;
    background-color: #5B5D62;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #c2c1c1;
    padding: 5px;
    margin-top: 10px;
}
</style>