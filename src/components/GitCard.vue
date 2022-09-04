<template>
  <div class="git card">
    <template v-if="repo">
      <div class="header">
        <a class="h2 title">{{repo.name}}</a>
        <div class="submenu">
          <a :href="repo.html_url"><i class="fa-brands fa-github"></i></a>
          <span class="datetime">{{formatDate(repo.updated_at)}}</span>
        </div>
      </div>
      <div class="body">
        {{repo.description}}
        <p>
          {{mainReadme}}
        </p>
      </div>
    </template>
    <template v-else>
      Loading...
    </template>
  </div>
</template>

<script lang="ts" setup>
import gitService from "@/services/git.service";
import { onMounted, ref } from "vue-demi";
import { formatDate } from '@/utils/Format'
import type { GitDetails } from "@/services/models/GitDetails";

const repo = ref<GitDetails>();
const mainReadme = ref<string>()

const props = defineProps<{
  path: string;
}>();

onMounted(() => {
  const { path } = props;
  gitService.getRepoDetails(path).then((e) => {
    repo.value = e
    gitService.getRepoSource(e.full_name, 'README.md').then(q => mainReadme)
  });
});
</script>

<style lang="sass">
.git.card
  border: solid 1px $active
  border-radius: 8px
  width: min-content
  overflow: hidden
  min-width: 275px
  .header
    background-color: $primary-three
    padding: 8px
    .title
      color: white
    .submenu
      padding: 4px
      display: flex
      a
        font-size: 20px
        &:hover
          color: $highlight
      &>*
        margin: auto 5px
        &:first-of-type
          margin-left: 0px
      .datetime
        color: $highlight-cold
        @extend .header-detail
  &>.body
    color: white
    padding: 8px 16px
</style>
