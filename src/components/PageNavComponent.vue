<template>
    <div class="col-6">
        <button :disabled="currentPage <= 1" @click="changePageOfPosts(currentPage - 1)"
            class="btn btn-danger">previous</button>
    </div>
    <div class="col-6 d-flex justify-content-end">
        <button :disabled="currentPage == totalPages" @click="changePageOfPosts(currentPage + 1)"
            class="btn btn-success">next</button>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { postService } from '../services/PostService';
export default {
    setup() {


        return {
            currentPage: computed(() => AppState.currentPage),
            totalPages: computed(() => AppState.totalPages),
            searchQuery: computed(() => AppState.searchQuery),

            async changePageOfPosts(pageNumber) {
                try {
                    const endpointUrl = `api/posts?page=${pageNumber}`;
                    await postService.changePageOfPosts(endpointUrl);
                } catch (error) {
                    Pop.error(error)
                }
            }
            // async changePageOfPostsWithSearchQuery(pageNumber) {
            //     try {
            //         const searchQuery = AppState.searchQuery
            //         const endpointUrl = `api/posts?page=${pageNumber}&query=${searchQuery}`
            //         await postService.changePageOfPosts(endpointUrl)
            //     } catch (error) {
            //         Pop.error(error);
            //     }
            // }

        }
    }
};
</script>


<style lang="scss" scoped></style>