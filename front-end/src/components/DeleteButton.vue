<template>
    <button @onClick="deletePost" class="delete-button">Delete Post</button>
</template>

<script>
export default {
    methods:{
        async delete() {
            const response = await fetch ("http://localhost:3000/posts", {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            const resData = '"Post Deleted...';
            return resData;
        }
    }
}
</script>

<style>

</style>