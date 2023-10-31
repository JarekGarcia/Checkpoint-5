<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 d-flex justify-content-center mb-5 p-5">
                <form @submit.prevent="getPostsWithSearchQuery()">
                    <div>
                        <label class="mx-2" for="posts">Search</label>
                        <input v-model="editable" type="text" id="posts">
                        <button type="submit" class="mdi mdi-magnify"></button>
                    </div>
                </form>
            </div>
        </section>
        <section class="row">
            <div class="col-10">
                <div v-for="post in posts" :key="post.id">
                    <PostCard :postProp="post" />
                </div>
            </div>
            <div class="col-2">
                <div v-for="ad in ads" :key="ad.title">
                    <AdCard :adProp="ad" />
                </div>
            </div>
        </section>
        <div class="row">
            <div class="col-6 d-flex justify-content-center">
                <button :disabled="currentPage <= 1" @click="changePageOfPosts(currentPage - 1)"
                    class="btn btn-danger">previous</button>
            </div>
            <div class="col-6 d-flex justify-content-center">
                <button :disabled="currentPage == totalPages" @click="changePageOfPosts(currentPage + 1)"
                    class="btn btn-success">next</button>
            </div>
        </div>

    </div>
</template>


<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState';
import { postService } from '../services/PostService';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
import { api } from '../services/AxiosService';
import { adsService } from '../services/AdsService';

export default {
    setup() {
        const editable = ref('');

        async function getAds() {
            try {
                await adsService.getAds()
            } catch (error) {
                Pop.error(error)
            }
        }
        onMounted(() => {
            // postService.clearData()
            getAds()
        })
        return {
            editable,
            posts: computed(() => AppState.posts),
            currentPage: computed(() => AppState.currentPage),
            totalPages: computed(() => AppState.totalPages),
            ads: computed(() => AppState.ads),

            async getPostsWithSearchQuery() {
                try {
                    const searchQuery = editable.value
                    logger.log('search query', searchQuery)
                    await postService.getPostsWithSearchQuery(searchQuery)
                } catch (error) {
                    Pop.error(error)
                }
            },
            async changePageOfPosts(pageNumber) {
                try {
                    const searchQuery = AppState.searchQuery
                    const endpointUrl = `api/posts?query=${searchQuery}&page=${pageNumber}`;
                    await postService.changePageOfPosts(endpointUrl);
                } catch (error) {
                    Pop.error(error)
                }
            },


        }
    }
};
</script>


<style lang="scss" scoped></style>