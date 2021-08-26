<!-- This is all the posts/images -->
<template>
  <!-- all the content within the template should be wrapped up by a div -->

  <div class="all-posts-component">
    <h2 class="text-xl font-bold">Posts:</h2>
    <div 
      class="all-posts flex flex-wrap mx-1 my-1 justify-center"
      v-if="images.length >= 1"
    >
      <div
        v-for="image in images"
        :key="image.imageUrl"
        class=" mx-2 my-2 w-64 h-100"
      >
      <router-link :to="{name:'SinglePost', params:{postId:image._id}}">

        <div class="overflow-hidden  h-full">
          <img
            class="min-w-full h-full"
            v-bind:src="image.imageUrl"
            @click="getId(image._id)"
          />
        </div>
      </router-link>
      </div>
    </div>
    <div v-else>
      <h3 class="text-xl p-20">
        Hmm... There’s nothing here.
        <br />
        Try creating a post!
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      selectedId: null, //adds ability to extract image id to acess singular post
      showModel: false,
    };
  },
  methods: {
    // getImages gets images from piscum - Placeholder for now, until we have our database set up

    async getImages() {
      const response = await fetch(`http://localhost:3000/posts`); //get 10 random images
      const data = await response.json();
      this.images = data; // add to Image Array
    },

    getId(id) {
      this.selectedId = id;
      console.log(this.selectedId); //testing purposes
    },
  },
  mounted() {
    this.getImages();
  },
};
</script>

<style scoped>
@import url("https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css");

.all-posts-component{
  margin-left: 15em;
}

</style>
