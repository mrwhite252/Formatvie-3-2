<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AllPosts/>
  </div>
</template>

<script>
//For testing/display purposes the component containing all posts is imported here - 
import AllPosts from '../components/AllPosts.vue'

export default {
  name: 'Home',
  components: {
    AllPosts
  }
}
</script>
