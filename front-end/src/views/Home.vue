<template>
  <div class="home">
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
