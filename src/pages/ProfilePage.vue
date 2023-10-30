<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-10 p-0">
                <img class="cover-img" :src="profile.coverImg" :alt="profile.name">
                <div class="row">
                    <div class="col-6 justify-content-start p-3">
                        <div class="d-flex mt-3">
                            <img class="profile-img" :src="profile.picture" :alt="profile.name">
                            <div class="flex-column px-3">
                                <div class="d-flex ">
                                    <p class="fw-bold fs-2 m-0">{{ profile.name }} <i v-if="profile.graduated"
                                            class="mdi mdi-star"></i>
                                    </p>
                                    <p class="mx-2">{{ profile.class }}</p>
                                </div>
                                <div class="d-flex fs-1">
                                    <a :href="profile.linkedin" v-if="profile.linkedin" class="mdi mdi-linkedin"></a>
                                    <a :href="profile.github" v-if="profile.github" class="mdi mdi-github"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3">
                        <p class="fw-bold">Bio:</p>
                        <p>{{ profile.bio }}</p>
                    </div>
                </div>
                <div v-for="post in posts" :key="post.id" class="row">
                    <postCard :postProp="post" />
                </div>
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
            <div class="col-2">
                <div v-for="ad in ads" :key="ad.title">
                    <AdCard :adProp="ad" />
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import { useRoute, useRouter } from 'vue-router';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { profileService } from '../services/ProfileService';
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger';
import { adsService } from '../services/AdsService';
import { postService } from '../services/PostService';

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        async function getProfileById() {
            try {
                const profileId = route.params.profileId;
                await profileService.getProfileById(profileId)
            } catch (error) {
                Pop.error(error)
            }
        }

        async function getPostsByProfileId() {
            try {
                const profileId = route.params.profileId
                await profileService.getPostsByProfileId(profileId)
            } catch (error) {
                Pop.error(error)
            }
        }



        async function getAds() {
            try {
                await adsService.getAds()
            } catch (error) {
                Pop.error(error)
            }
        }



        onMounted(() => {
            getProfileById()
            getPostsByProfileId()
            getAds()
            logger.log('profile id from route', route.params.profileId)
        })

        return {
            profile: computed(() => AppState.profile),
            posts: computed(() => AppState.posts),
            ads: computed(() => AppState.ads),
            currentPage: computed(() => AppState.currentPage),
            totalPages: computed(() => AppState.totalPages),

            async changePageOfPosts(pageNumber) {
                try {
                    const profile = AppState.profile
                    const endpointUrl = `api/posts?creatorId=${profile.id}&page=${pageNumber}`;
                    await postService.changePageOfPosts(endpointUrl);
                } catch (error) {
                    Pop.error(error)
                }
            }

        }
    }
};
</script>


<style lang="scss" scoped>
.cover-img {
    height: 25vh;
    width: 100%;
    object-fit: cover;
}

.profile-img {
    height: 7vh;
    width: 7vh;
    border-radius: 4rem;
    object-fit: cover;
    object-position: center;
}
</style>