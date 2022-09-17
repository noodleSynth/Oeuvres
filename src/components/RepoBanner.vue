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
        <label  @click="drawerState = !drawerState" class="index h3 button">
          <span v-if="!showIndex" class="material-symbols-outlined">close</span>
          <span v-else class="material-symbols-outlined">menu</span>
        </label>
        <span class="material-symbols-outlined" style="font-size: 24px" >
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
    <aside :open="showIndex">
      Over here
    </aside>
  </header>
</template>

<script lang="ts" setup>
import type { GitDetails } from "@/services/models/GitDetails";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const root = ref<HTMLElement>()
const isTouchingTop = ref(false)
const drawerState = ref(false)
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

const showIndex = computed(() => drawerState.value || undefined)

let scrollEventTimeout = 0;
onMounted(() => {
  window.addEventListener("scroll", onScrollHandler);
  scrollEventTimeout = 0
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScrollHandler);
})

const onScrollHandler = () => {
  if (scrollEventTimeout != 0) {
    return
  }
  scrollEventTimeout = setTimeout(() => {
    console.log(root.value?.offsetTop,  window.pageYOffset)
    isTouchingTop.value = root.value?.offsetTop > 10
    clearTimeout(scrollEventTimeout);
    scrollEventTimeout = 0;
  }, 200);
}

</script>

<style lang="sass">
.repo-banner
  z-index: 999
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
    transform-origin: center top
    transform: scaleY(1)
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
        color: $highlight-warm
        .material-symbols-outlined
          font-size: 30px
          font-weight: 700
      .path
        margin-left: 4px
  &.small
    margin-bottom: 100px
    .description
      transform: scaleY(0)
    .footer
      margin: 4px
      .breadcrumbs
        padding: 4px
        *
          font-size: small
  aside
    position: absolute
    left: 0px
    top: 100%
    height: calc(100vh - 140px)
    background-color: $primary-two
    width: min-content
    width: 200px
    overflow: hidden
    // background: linear-gradient(45deg, blue, red)
    // transform: scaleX(0)
    transform-origin: center left
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25)
    &[open]
      // transform: scaleX(1)
      width: 0px

.button
  border: none
  user-select: none
</style>
