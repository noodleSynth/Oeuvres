<template>
  <div class="layout">
    <div class="container">
      <GitCard v-for="repo in repos" :repo="repo" :key="repo.id" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import GitCard from '@/components/GitCard.vue';
import gitService from '@/services/git.service';
import type { GitDetails } from '@/services/models/GitDetails';
import { onMounted, ref } from 'vue';

const repos = ref<GitDetails[]>([])

onMounted(() => {
  gitService.getRepos().then(e => repos.value = e)
})

</script>