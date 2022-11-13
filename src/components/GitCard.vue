<template>
  <CardBoiler>
    <template #head>
      <span class="title">{{repo.name}}</span>
      <a :href="repo.html_url" class="icon">
          <i class="fa fa-brands fa-github" />
      </a>
    </template>
    <template #body>
      {{ repo.description }}
    </template>
  </CardBoiler>
</template>

<script lang="ts" setup>
import type { GitDetails } from "@/services/models/GitDetails";
import CardBoiler from "./common/CardBoiler.vue";

defineProps<{
  repo: GitDetails;
}>();
</script>

<style lang="sass">
.git.card
  border: solid 1px $active
  border-radius: 8px
  width: min-content
  min-width: 275px
  margin: 8px
  display: flex
  flex-direction: column
  position: relative
  @media (max-width: 900px)
    max-width: 50%
    width: auto
    margin-top: 2em
  .repo-links
    position: absolute
    margin-top: -2.2em
    display: flex
    justify-content: flex-end
    width: 100%
    .repo-link
      background-color: $primary-three
      padding: .3em
      font-size: 1.5em
      margin: .2em
      border-radius: 100%
      border: solid $highlight
      width: min-content
  .body
    overflow: hidden
    .header
      background-color: $primary-three
      padding: 8px
      border-radius: 8px
      .title
        color: white
        text-decoration: none
        margin-right: 1em
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
      position: relative

</style>
