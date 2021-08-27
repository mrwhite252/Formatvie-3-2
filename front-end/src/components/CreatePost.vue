// this component is about create new post function on homepage

<template>
  <div class="create-post-component">
    <div class="header">
      <img id="logo" src="../assets/logo-2.png" alt="logo" />
    </div>
    <div class="form">
      <h2>Create New Post:</h2>
      <form @submit.prevent="sendPost">
        <input type="text" placeholder="Title" v-model="post.title"/>
        <input type="text" placeholder="Author" v-model="post.author"/>
        <select  name="" id="" v-model="post.imageUrl">
          <option selected hidden value="Select Image"  >Select Image...</option>
          <option value="https://drive.google.com/uc?export=view&id=1f5LB6f1V_Q45vv8pFXNK7vcBARNv7kCb" >Waterfall</option>
          <option value="https://drive.google.com/uc?export=view&id=1TRJ7rTeA5DOBkEE0UIVyucS8wEmKiMYR" >Dog</option>
          <option value="https://drive.google.com/uc?export=view&id=1T8Bmj2uFS-1EuHNRBJn3YnpomlKTUSDA" >Bee</option>
          <option value="https://drive.google.com/uc?export=view&id=1Fa9S0RbyG222n7c31PTYPcpmCAgfeVyu" >Owl</option>
          <option value="https://drive.google.com/uc?export=view&id=1jlJWQMzQC7WW9gRscRsUYMEDL2QpLGtV" >Moon</option>
          <option value="https://drive.google.com/uc?export=view&id=1qjT6occo-Ghrn74yRPBdgGqMVRo_0Ybu" >Car</option>
          <option value="https://drive.google.com/uc?export=view&id=1N_jFCVgTmWvGUJHsUVWTTQ2qYwzuknsA" >Mountain</option>
          <option value="https://drive.google.com/uc?export=view&id=1Rhx9zFY0gfhpLyXHa_z9X_Ai6_Y1CoWb" >Lighthouse</option>
          <option value="https://drive.google.com/uc?export=view&id=1sBho4iEEmXjg2VxP1oVPWmM8rJ8bRlR7" >Lion</option>
          <option value="https://drive.google.com/uc?export=view&id=18LORjnsmyKmB5951cT8eZcDIo_KX5VcN" >City</option>
        </select>
        <textarea placeholder="Description" row="20" v-model="post.description"/>
          <button type="submit"><i class="fab fa-telegram-plane"></i> Confirm</button>
      </form>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      post:{
      title:null,
      author:null,
      imageUrl:null,
      description:null,
      },

    }
  },
  methods: {
    async sendPost() {
      const post = {}; 
      post.title = this.post.title;
      post.imageUrl = this.post.imageUrl;
      post.description = this.post.description;
      if (this.author) { 
        post.author = this.post.author;
      }

      const response = await fetch("http://localhost:3000/posts", { 
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(post),
      });
      const data = await response.json(); 
      console.log(data)
      this.post.title = null
      this.post.author = null
      this.post.imageUrl = null
      this.post.description = null
      this.$emit('createdPost')
    },
  },
};
</script>

<style>
.create-post-component {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  margin: 0 auto;
  height: 100vh;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 9px -1px 38px -18px rgba(0,0,0,0.75);
-webkit-box-shadow: 9px -1px 38px -18px rgba(0,0,0,0.75);
-moz-box-shadow: 9px -1px 38px -18px rgba(0,0,0,0.75);
}

#logo {
  width: 16em;
  margin-top: 2em;
}

form {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 40vh;
  margin-bottom: 20vh;
}

textarea {
  margin: 1rem 0;
}
input, select, textarea{
  padding: 0.2em 2em;
  padding-left: 0.2em;
  border-radius: 5px;
  border: thin black solid;
}
button{
  border: thin black solid;
  border-radius: 30px;
  color: white;
  background-color: #3E4352;
  padding: 1em;
}
</style>
