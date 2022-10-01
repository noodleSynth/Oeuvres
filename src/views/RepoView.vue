<template>
  <section v-if="repoDetail" class="repo_page">
    <RepoBanner :repo="repoDetail" :file="'README.md'"/>
    <body>
      <GitPage :repo="repoDetail" :file="'README.md'" />
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
const repoDetail = ref<GitDetails>()

const { file, repo } = route.params

console.log(route.params)

const repoName = repo as string

const readem = ref<string>()
const index = ref<string>()

onMounted(() => {
  gitService.getRepoDetails(repoName).then(e => {
    repoDetail.value = e;
  });
});

console.log(route.params)

// const currentFile = computed(() => )

</script>
<style lang="sass">
nav
  position: initial !important

.repo_page
  min-width: 100vw
  position: sticky
  top: 0px
  // position: relative
  body
    padding-top: 140px
    width: 100%
    margin: 20px 0px
    // background-color: $primary-two
    display: flex
    position: sticky
    flex-direction: row
    justify-content: space-between
</style>