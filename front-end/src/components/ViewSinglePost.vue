<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <img :src="post.imageUrl" alt="">
          <div class="modal-text">
            <div class="modal-header">
                {{post.title}}
            </div>
            <div class="modal-body">
                <p>{{post.author}}</p>
                <p>{{post.description}}</p>
            </div>
            <div class="modal-footer">
                insert edit and delete buttons here
                <!-- <button class="modal-default-button" @click="$emit('close')">
                  ok
                </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data(){
    return{
      post:[]
    }
  },
  props:{
    postId: String,
  },
  mounted(){
    this.getPost()
  },
  methods:{
    async getPost(){
      const response = await fetch('http://localhost:3000/posts/' + this.postId)
      const data = await response.json();
      this.post = data; 
    }
  }
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
.modal-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 23em;
}
</style>
