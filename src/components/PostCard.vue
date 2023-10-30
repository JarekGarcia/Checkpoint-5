<template>
    <div class="col-10 bg-secondary mb-5 p-5 rounded shadow-3">
        <div class="d-flex align-items-center mb-3 ">
            <router-link :to="{ name: 'ProfilePage', params: { profileId: postProp.creator.id } }">
                <img class="post-profile-img" :src="postProp.creator.picture" :alt="postProp.creator.name"
                    :title="postProp.creator.name">
            </router-link>
            <div class="mx-3 d-flex flex-column">
                <p class="fw-bold">{{ postProp.creator.name }} <i v-if="postProp.creator.graduated"
                        class="mdi mdi-star"></i></p>
                <span>{{ postProp.createdAt.toLocaleDateString() }}</span>
            </div>
            <div class="justify-content-end">
                <button @click="deletePost()" v-if="account.id == postProp.creator.id"
                    class="btn btn-danger">Delete</button>
            </div>
        </div>
        <p class="fw-bold">{{ postProp.body }}</p>
        <img class="img-fluid post-img rounded" :src="postProp.imgUrl" :alt="postProp.creator">
        <div class="d-flex justify-content-end pt-3">
            <button @click="likePost()" v-if="account.id" class="btn btn bg-danger">Like Post</button>
            <i class="mdi mdi-heart text-danger fs-3 p-2"></i>
            <p class="d-flex justify-content-end fw-bold pt-3">{{ postProp.likes.length }}</p>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { Post } from '../models/Post';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { postService } from '../services/PostService';
import { logger } from '../utils/Logger';


export default {
    props: {
        postProp: { type: Post, required: true }
    },
    setup(props) {
        const route = useRoute();
        const router = useRouter();
        //         async function getPostById() {
        //             try {
        // const postId = route.params.postId;
        // await postService
        //             } catch (error) {
        //                 Pop.error(error)
        //             }
        //         }
        return {
            account: computed(() => AppState.account),
            async deletePost() {
                try {
                    const wantsToDelete = await Pop.confirm('Are you sure you want to delete this amazing ghetto post?');
                    if (!wantsToDelete) {
                        return;
                    }
                    const postId = props.postProp.id;
                    // logger.log('deleting post with id:', postId);
                    await postService.deletePost(postId);
                }
                catch (error) {
                    Pop.error(error);
                }
            },
            async likePost() {
                try {
                    const liker = this.account;
                    const postId = props.postProp.id;
                    logger.log('liking this post', postId, liker);
                    await postService.likePost(postId, liker);
                }
                catch (error) {
                    Pop.error(error);
                }
            }
        };
    },
    components: { RouterLink }
};
</script>


<style lang="scss" scoped>
.post-img {
    height: 30vh;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.post-profile-img {
    height: 7vh;
    width: 7vh;
    border-radius: 4rem;
    object-fit: cover;
    object-position: center;
}
</style>