<template>
    <button @click="deletePost" class="delete-button">Delete Post</button>
</template>

<script>
export default {

  props:{
    post: Object,
  },
    methods:{
        async deletePost() {
          console.log("ping");
           const response = await fetch(
        "http://localhost:3000/posts/" + this.post._id,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      this.$router.push({ name: "Home" });
    }
    }
}
</script>

<style>

</style>