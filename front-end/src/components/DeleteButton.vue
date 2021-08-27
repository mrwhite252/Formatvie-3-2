<template>
    <button @click="deletePost">Delete</button>
</template>

<script>
export default {
   // this method is basically the same as above, except the method is DELETE instead of the default GET
    async deletePost() {
      const response = await fetch(
        "http://localhost:3000/posts/" + this.post.postId, // attaches the id of the post to the end of the url, which will be read by the API and used to find the right post
        {
          method: "DELETE", 
        }     
      );
      const data = await response.json();
      console.log(data);
      
},
}
</script>

<style>

</style>