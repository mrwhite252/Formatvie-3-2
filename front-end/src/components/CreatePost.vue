// this component is about create new post function on homepage

<template>
  <div class="create-post-component">
    <div class="header">
      <img id="logo" src="../assets/logo-2.png" alt="logo" />
      <h1>ShutterFly</h1>
    </div>
    <form action="http://localhost:3000/posts" method="POST" class="create-post-form space-y-10 text-left">
      <h2 class="form-heading text-center">Create New Post:</h2>
      <input type="text" class="title border-1px border-solid border-black" placeholder="Title" name="title"/><br>
      <input type="text" placeholder="Author" name="author" /><br>
      <select class="image-select border-1 bordser-black border-solid" name="imageUrl">
        <option value="Select Image">Select Image</option>
        <option value="https://drive.google.com/file/d/1T8Bmj2uFS-1EuHNRBJn3YnpomlKTUSDA/view?usp=sharing">Bee</option>
        <option value="https://drive.google.com/file/d/1qjT6occo-Ghrn74yRPBdgGqMVRo_0Ybu/view?usp=sharing">Car</option>
        <option value="https://drive.google.com/file/d/18LORjnsmyKmB5951cT8eZcDIo_KX5VcN/view?usp=sharing">City</option>
        <option value="https://drive.google.com/file/d/1TRJ7rTeA5DOBkEE0UIVyucS8wEmKiMYR/view?usp=sharing">Dog</option>
        <option value="https://drive.google.com/file/d/1Rhx9zFY0gfhpLyXHa_z9X_Ai6_Y1CoWb/view?usp=sharing">Light House</option>
        <option value="https://drive.google.com/file/d/1sBho4iEEmXjg2VxP1oVPWmM8rJ8bRlR7/view?usp=sharing">Lion</option>
        <option value="https://drive.google.com/file/d/1jlJWQMzQC7WW9gRscRsUYMEDL2QpLGtV/view?usp=sharing">Moon</option>
        <option value="https://drive.google.com/file/d/1N_jFCVgTmWvGUJHsUVWTTQ2qYwzuknsA/view?usp=sharing">Mountian</option>
        <option value="https://drive.google.com/file/d/1Fa9S0RbyG222n7c31PTYPcpmCAgfeVyu/view?usp=sharing">Owl</option>
        <option value="https://drive.google.com/file/d/1f5LB6f1V_Q45vv8pFXNK7vcBARNv7kCb/view?usp=sharing">Waterfall</option>
      </select><br>
      <textarea placeholder="Description" name="description" row="20" /><br>
    <button type="submit"><i class="fab fa-telegram-plane"></i>Create Post</button>
  </form>
  </div>
</template>

<script>
export default {
  
    
  }
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
