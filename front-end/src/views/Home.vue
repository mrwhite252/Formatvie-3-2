<template>
<<<<<<< HEAD
  
  <BackButton/>
 
</template>

<script>
// @ is an alias to /src
import BackButton from "../components/BackButton.vue"
=======
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AllPosts/>
  </div>
</template>

<script>
//For testing/display purposes the component containing all posts is imported here - 
import AllPosts from '../components/AllPosts.vue'
>>>>>>> 351244ac9e4fbf00604561677f084f2c65fb3697

export default {
  name: 'Home',
  components: {
<<<<<<< HEAD
    BackButton
=======
    AllPosts
>>>>>>> 351244ac9e4fbf00604561677f084f2c65fb3697
  }
}
</script>
