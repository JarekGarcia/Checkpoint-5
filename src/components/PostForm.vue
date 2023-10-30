<template>
    <form @submit.prevent="createPost()" class="mx-5 p-3">
        <div class="form-group">
            <label class="fw-bold" for="body">What's on your ghetto mind?</label>
            <textarea v-model="editable.body" type="body" class="form-control mb-3" id="body" name="body"
                aria-describedby="body" placeholder="type something..."></textarea>
            <label class="fw-bold" for="imgUrl">Ghetto picture</label>
            <input v-model="editable.imgUrl" type="url" class="form-control" id="imgUrl" name="imgUrl"
                aria-describedby="imgUrl" placeholder="image URL">
            <div class="d-flex justify-content-end mt-2">
                <button type="submit" class="btn btn-success">Post</button>
            </div>

        </div>
    </form>
</template>


<script>
import { ref } from 'vue';
import Pop from '../utils/Pop';
import { postService } from '../services/PostService';


export default {
    setup() {

        const editable = ref({})
        return {
            editable,

            async createPost() {
                try {
                    const postData = editable.value
                    await postService.createPost(postData)
                    editable.value = {}

                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
form {
    max-width: 30%;
}
</style>