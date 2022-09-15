<template>
  <header class="repo-banner" :class="{ small: isTouchingTop }" ref="root">
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
        <a href="#" class="index h3"><span class="material-symbols-outlined">menu</span></a>
        <span class="material-symbols-outlined" style="font-size: 24px">
        chevron_right
        </span>
        <span class="path h3">
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
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const root = ref<HTMLElement>()
const isTouchingTop = ref(false)
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

onMounted(() => {
  window.addEventListener("scroll", onScrollHandler);
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScrollHandler);
})

let scrollEventTimeout = 0;
const onScrollHandler = () => {
  if (scrollEventTimeout) {
    return
  }
  scrollEventTimeout = setTimeout(() => {
    console.log(root.value?.offsetTop,  window.pageYOffset)
    isTouchingTop.value = ((root.value?.offsetTop - window.pageYOffset) < 10);
    clearTimeout(scrollEventTimeout);
    scrollEventTimeout = 0;
  }, 100);
}

</script>

<style lang="sass">
.repo-banner
  *
    transition: all .1s ease-in
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
      align-items: center
      .index
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        text-decoration: none
        .material-symbols-outlined
          font-size: 30px
          font-weight: 700
      .path
        margin-left: 4px
  &.small
    margin-bottom: 100px
    .description
      display: none
    .footer
      margin: 4px
      .breadcrumbs
        padding: 4px
        *
          font-size: small
        
</style>
