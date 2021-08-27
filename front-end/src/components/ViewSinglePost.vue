<template>

  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <BackButton/>
            <img :src="post.imageUrl" alt="" />
            <div class="modal-text">
          <span id="post-view">
              <div class="modal-text-top">
                <div class="modal-header">
                    <h3>{{post.title}}</h3>
                </div>
                <div class="modal-body">
                    <h5>{{post.author}}</h5>
                    <p>{{post.description}}</p>
                </div>
              </div>
                <button @click="editPost">
                <i class="fas fa-pencil-alt"></i>
                Edit Post
              </button>
          </span>

          <span id="post-edit">
            <form @submit.prevent="updatePost">
              <input type="text" placeholder="Title" v-model="post.title" />
              <input type="text" placeholder="Author" v-model="post.author" />
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
              <textarea
                placeholder="Description"
                row="20"
                v-model="post.description"
              />
              <button type="submit" @click="updatePost(), viewPost()">
                <i class="fab fa-telegram-plane"></i> Confirm
              </button>
            </form>
          </span>
            <!-- <DeleteButton/> -->
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BackButton from "./BackButton.vue"
// import DeleteButton from "./DeleteButton.vue"

export default {
  data() {
    return {
      post: [],
      seen:true,
    };
  },
  components:{
    BackButton,
    // DeleteButton,
  },
  props: {
    postId: String,
  },
  mounted() {
    this.getPost();
    this.viewPost();
  },
  methods: {
    async getPost() {
      const response = await fetch(
        "http://localhost:3000/posts/" + this.postId
      );
      const data = await response.json();
      this.post = data;
    },
    async updatePost() {
      const response = await fetch(
        "http://localhost:3000/posts/" + this.postId,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: this.post.title,
            author: this.post.author,
            imageUrl: this.post.imageUrl,
            description: this.post.description,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    },
    editPost(){
      document.getElementById("post-view").style.display="none";
      document.getElementById("post-edit").style.display="inline";
    },
    viewPost(){
      document.getElementById("post-edit").style.display="none";
      document.getElementById("post-view").style.display="flex";

    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: gray;
  display: table;
  transition: opacity 1s;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 70vw;
  height: 70vh;
  margin: 0px auto;
  padding: 20px 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 1s ease;
  display: flex;
  justify-content: space-around;
}

.modal-header h3 {
  margin-top: 0;
  color: #3E4352;
  font-size: 2em;
  font-weight: 800;
}

.modal-body {
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
}

.modal-body h5{
  font-weight:600;
}

.modal-footer {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}
.modal-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 23em;
}
.hidden{
  display: none;
}
#post-view{
  display: flex;
  flex-direction: column;
  height: 70vh;
  
}
</style>