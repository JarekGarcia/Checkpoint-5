<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <div class="row">
    <form @submit.prevent="editAccount()" class="p-5">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" v-model="editable.name" class="form-control" id="name" aria-describedby="name" />
        <div id="emailHelp" class="form-text">
        </div>
      </div>
      <div class="mb-3">
        <label for="picture" class="form-label">Picture</label>
        <input v-model="editable.picture" type="url" class="form-control" id="picture" />
      </div>
      <div class="mb-3">
        <label for="class" class="form-label">Class</label>
        <input v-model="editable.class" type="text" class="form-control" id="class" />
      </div>
      <div class="mb-3">
        <label for="graduated" class="form-label">Graduated</label>
        <div>
          <input v-model="editable.graduated" type="checkbox" class="form-check-input" id="graduated" />
        </div>
      </div>
      <div class="mb-3">
        <label for="coverImg" class="form-label">Cover Image</label>
        <input v-model="editable.coverImg" type="url" class="form-control" id="coverImg" />
      </div>
      <div class="mb-3">
        <label for="github" class="form-label">GitHub</label>
        <input v-model="editable.github" type="url" class="form-control" id="github" />
      </div>
      <div class="mb-3">
        <label for="linkedin" class="form-label">LinkedIn</label>
        <input v-model="editable.linkedin" type="url" class="form-control" id="linkedin" />
      </div>
      <div class="mb-3">
        <label for="bio" class="form-label">Bio</label>
        <textarea v-model="editable.bio" type="text" class="form-control" id="bio" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { accountService } from '../services/AccountService';
export default {
  setup() {

    const editable = ref({});
    const count = ref(1);

    watchEffect(() => {
      editable.value = AppState.account;
    })
    return {
      account: computed(() => AppState.account),
      editable,
      count,

      async editAccount() {
        try {
          const accountData = editable.value;
          await accountService.editAccount(accountData)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
