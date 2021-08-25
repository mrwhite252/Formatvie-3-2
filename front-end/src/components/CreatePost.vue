// this component is about create new post function on homepage

<template>
  <div class="create-post-component">
    <div class="header">
      <img id="logo" src="../assets/logo-2.png" alt="logo" />
      <h1>ShutterFly</h1>
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
          <button type="submit"><i class="fab fa-telegram-plane"></i>Confirm</button>
      </form>
      </div>
      <p>{{post.title}}</p>
      <p>{{post.author}}</p>
      <p>{{post.imageUrl}}</p>
      <p>{{post.description}}</p>
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
      post.title = this.title;
      post.imageUrl = this.imageUrl;
      post.description = this.description;
      if (this.author) { 
        post.author = this.author;
      }

      const response = await fetch("http://localhost:3000/posts", { 
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(post),
      });
      const data = await response.json(); 
      console.log(data)
      this.$emit("posted");
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
  width: 15rem;
  margin: 0 auto;
  height: 100vh;
  background-color: white;
  position: fixed;
}
#logo {
  width: 8rem;
}

form {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 40vh;
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
  padding: 1em;
}
</style>
