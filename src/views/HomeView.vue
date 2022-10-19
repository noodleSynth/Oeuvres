
<template>
  <div>
    <GitCard v-for="repo in repos" :repo="repo" :key="repo.url" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue-demi";
import gitService from "../services/git.service";
import type { GitDetails } from "../services/models/GitDetails";
import GitCard from "../components/GitCard.vue";

const repos = ref<GitDetails[]>()

onMounted(() => {
  gitService.getRepos().then(r => repos.value = r)
})

</script>
