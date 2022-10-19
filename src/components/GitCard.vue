<template>
  <div class="git card">
      <div class="header">
        <router-link :to="{name: 'repo', params: { repo: repo.name }}" class="h2 title">{{ repo.name }}</router-link>
        <div class="submenu">
          <a :href="repo.html_url"><i class="fa-brands fa-github"></i></a>
          <span class="datetime">{{ formatDate(repo.updated_at) }}</span>
        </div>
      </div>
      <div class="body" v-if="repo.description">
        {{ repo.description }}
      </div>
  </div>
</template>

<script lang="ts" setup>
import { formatDate } from "@/utils/Format";
import type { GitDetails } from "@/services/models/GitDetails";


const props = defineProps<{
  repo: GitDetails;
}>();

</script>

<style lang="sass">
.git.card
  border: solid 1px $active
  border-radius: 8px
  width: min-content
  overflow: hidden
  min-width: 275px
  margin: 8px
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
