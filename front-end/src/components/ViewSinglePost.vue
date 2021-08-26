<template>

  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <BackButton/>
            <img :src="post.imageUrl" alt="" />
            <div class="modal-text">
          <span  v-if="seen">
              <div class="modal-header">
                  {{post.title}}
              </div>
              <div class="modal-body">
                  <p>{{post.author}}</p>
                  <p>{{post.description}}</p>
              </div>
                <button type="submit" @click="seen = !seen">
                <i class="fas fa-pencil-alt"></i>
                Edit Post
              </button>
          </span>

          <span v-else>
            <form @submit.prevent="sendPost">
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
              <button type="submit" @click="updatePost, seen=!seen">
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
  padding: 20px 30px;
  background-color: lightblue;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 1s ease;
  display: flex;
  justify-content: space-evenly;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
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
</style>