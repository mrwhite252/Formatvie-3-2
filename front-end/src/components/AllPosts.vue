  <!-- This is all the posts/images -->
<template>
<div class="all-posts">
    <div v-for="image in images" :key="image.id">
    <img v-bind:src="'https://picsum.photos/id/' +image.id + '/200/300'" @click="getId(image.id)">
  </div>
  <p>Selected Id: {{selectedId}}</p>
</div>

</template>

<script>

export default {
  data(){
    return{
      images:[],
      selectedId:null  //adds ability to extract image id to acess singular post
    }
  },
  methods:{
    // getImages gets images from piscum - Placeholder for now, until we have our database set up

    async getImages(){
    const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=10`) //get 10 random images
    const data = await response.json();
    this.images = data; // add to Image Array
    },

    getId(id){
        this.selectedId = id;
        console.log(this.selectedId) //testing purposes
    },
  },
  mounted(){
    this.getImages();
  }
}
</script>

<style scoped>
/*  Temporary Styling */
.all-posts{
    display: flex;
    flex-wrap: wrap;
    margin: 1em 10em;
}
img{
    width: 10em;
}
</style>