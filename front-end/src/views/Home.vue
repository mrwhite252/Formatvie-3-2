<template>
  <div class="home">
    <CreatePost />
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
};
</script>

<style>
.home {
  display: flex;
  margin: 0 3rem;
}
</style>
