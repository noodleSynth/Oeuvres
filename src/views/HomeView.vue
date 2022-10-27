<template>
  <div class="repo-list">
    <GitCard v-for="repo in repos" :repo="repo" :key="repo.url" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue-demi";
import gitService from "../services/git.service";
import type { GitDetails } from "../services/models/GitDetails";
import GitCard from "../components/GitCard.vue";
import { useUtilStore } from "@/stores/utilityStore";

const repos = ref<GitDetails[]>();

onMounted(() => {
  const utilStore = useUtilStore();
  gitService.getRepos().then(
    (r) =>
      (repos.value = r.filter((e) => {
        return !utilStore.repoExclusions.includes(e.clone_url);
      }))
  );
});
</script>

<style lang="sass">
.repo-list
  display: flex
  flex-direction: row
  align-items: flex-start
  justify-content: center
  @media (max-width: 900px)
    flex-direction: column
    align-items: center
</style>
