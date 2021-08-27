<template>
  <div class="home">
    <CreatePost @createdPost="testing"/>
    <AllPosts />
  </div>
</template>

<script>
//For testing/display purposes the component containing all posts is imported here -
import AllPosts from "../components/AllPosts.vue";
import CreatePost from "../components/CreatePost.vue";


export default {
  name: "Home",
  components: {
    AllPosts,
    CreatePost,
  },
  data(){
    return{
      testingData: null
    }
  },
  methods:{
    testing(){
      console.log("Hello")
      this.testingData = "NEW HELLO"
      console.log(this.testingData)
    },
  }
};
</script>

<style>
.home {
  display: flex;
  margin: 0 3rem;
}

</style>
