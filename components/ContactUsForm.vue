<template>
  <div class="form-container">
    <div class="form-section">
      <label>First name</label>
      <input class="input-field" placeholder="Enter First name">
    </div>
    <div class="form-section">
      <label>Last name</label>
      <input class="input-field" placeholder="Enter Last name">
    </div>
    <div class="form-section double">
      <label>Email</label>
      <input class="input-field" placeholder="Enter Email">
    </div>
    <div class="form-section double">
      <label>Topic</label>
      <input class="input-field" placeholder="Enter Topic">
    </div>
    <div class="form-section double">
      <label>Description</label>
      <textarea class="input-field description" placeholder="Enter Description"></textarea>
    </div>
    <div class="submit-form">
      <button >Submit</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "ContactUsForm"
}
</script>

<style scoped>
.form-container {
  width: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 5px solid #6C63FF;
  border-radius: 20px;
  background-color: #222222;
  font-family: Alata;
}

.input-field {
  border-radius: 5px;
  padding-left: 5px;
  box-sizing: Border-box;
  color: white;
  font-family: Alata;
  font-weight: lighter;

}

input {
  height: 30px;
  width: 100%;
  background-color: #5B5D62;
  outline: none;
  border: none;
}

input:focus {
  outline: solid 2px #6C63FF;
}

.form-section:first-child,
.form-section:nth-child(2){
  padding-top: 20px;
}

.form-section {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  gap: 5px;
}

.form-section > label {
  color: #6C63FF;
  font-size: 18px;
}

.double {
  grid-column-start: 2 span;
}

.description {
  display: block;
  width: 100%;
  height: 150px;
  resize: none;
  background-color: #5B5D62;
  outline: none;
  border: none;
}

.description:focus {
  outline: solid 2px #6C63FF;
}

.submit-form {
  width: 200%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.submit-form > button {
  background-color: #6C63FF;
  border-radius: 5px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  padding: 5px 30px;
  transition: .2s;
  text-decoration: none;
}

.submit-form > button:hover {
  background-color: #2b2e32;
  outline: 2px solid #6C63FF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
