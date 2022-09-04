<template>
  <section v-if="repo" class="repo_page">
    <RepoBanner :repo="repo" :file='currentView'/>
    <body>
      <GitPage :repo="repo" :file="currentView" />
    </body>
  </section>
</template>
<script lang="ts" setup>
import gitService from "@/services/git.service";
import type { GitDetails } from "@/services/models/GitDetails";
import { computed, onMounted, ref } from "vue-demi";

import { useRoute } from "vue-router";
import RepoBanner from "../components/RepoBanner.vue";
import GitPage from "../components/GitPage.vue";

const route = useRoute()
const repo = ref<GitDetails>()
console.log(route.params)

const repoName = `noodleSynth/${route.params.repo}`

const readem = ref<string>()
const index = ref<string>()

onMounted(() => {
  gitService.getRepoDetails(repoName).then(e => {
    repo.value = e;
  });
});

const currentView = computed(() => route.params.file.length === 0 ? "README.md" : route.params.file)

</script>
<style lang="sass">
nav
  position: initial !important

.repo_page
  min-width: 100vw
  body
    max-width: 1000px
    margin: 20px auto
    background-color: $primary-two
</style>