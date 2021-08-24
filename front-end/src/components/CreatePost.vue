// this component is about create new post function on homepage

<template>
  <div class="create-post-component">
    <div class="header">
      <img id="logo" src="../assets/logo-2.png" alt="logo" />
      <h1>ShutterFly</h1>
    </div>
    <div class="form">
      <h2>Create New Post:</h2>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Author" />
      <select name="" id="">
        <option value="Select Image">Select Image</option>
      </select>
      <textarea placeholder="Description" row="20" />
    </div>
    <button type="submit"><i class="fab fa-telegram-plane"></i>Confirm</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.create-post-component {
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0 auto;
}
#logo {
  width: 8rem;
}

.form {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

textarea {
  margin: 1rem 0;
}
</style>
