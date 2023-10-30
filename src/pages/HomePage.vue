<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10">
        <PostForm />

        <div v-for="post in posts" :key="post.id" class="row p-5 box-shadow">
          <PostCard :postProp="post" />
        </div>
      </div>
      <div class="col-2">
        <div v-for="ad in ads" :key="ad.title">
          <AdCard :adProp="ad" />
        </div>
      </div>
      <div class="row">
        <PageNavComponent />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { postService } from '../services/PostService';
import Pop from '../utils/Pop';
import { AppState } from '../AppState.js'
import { adsService } from '../services/AdsService';
import { profileService } from '../services/ProfileService';

export default {


  setup() {
    async function getPosts() {
      try {
        await postService.getPosts()
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
      getPosts()
      getAds()
    })


    return {
      posts: computed(() => AppState.posts),
      ads: computed(() => AppState.ads),
      account: computed(() => AppState.account)

    }
  }
}
</script>

<style scoped lang="scss">
.box-shadow {
  box-shadow: 2rem;
}
</style>
