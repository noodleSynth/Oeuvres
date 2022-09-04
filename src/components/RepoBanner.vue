<template>
  <header class="repo-banner">
    <div class="title">
      <router-link
        :to="{ name: 'repoPage', params: { repo: $route.params.repo } }"
        class="nav-item h1"
      >
        {{ repo.name }}
      </router-link>
      <div class="actions">
        <a :href="repo.html_url" class="nav-item">
          View on <i class="fa-brands fa-github icon"></i>
        </a>
      </div>
    </div>
    <div class="description h3">
      {{ repo.description }}
    </div>
    <div class="footer">
      <div class="breadcrumbs">
        <a href="a" class="index h3">Table of contents</a>
        <span class="path h3">
          >
          <span v-for="p in path" :key="p">
            <a class="h3" href="#">{{ p }}</a
            >/
          </span>
          <span class="h3">{{ filename }}</span>
        </span>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { GitDetails } from "@/services/models/GitDetails";
import { computed, ref } from "vue";

const props = defineProps<{
  repo: GitDetails;
  file: string;
}>();

const parts = props.file.split("/") ?? ["Nothing", "Here"];

const repo = ref(props.repo);

const path = computed(() => {
  return parts.slice(0, parts.length - 1);
});

const filename = computed(() => parts[parts.length - 1]);
</script>

<style lang="sass">
.repo-banner
  padding: 16px 8px
  background-color: $primary-two
  color: $highlight
  position: sticky
  top: 0px
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  .title
    display: flex
    justify-content: space-between
  .discription
    padding: auto 8px
  .footer
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-top: 20px
    .breadcrumbs
      display: flex
      padding: 16px
      .path
        margin-left: 4px
</style>
