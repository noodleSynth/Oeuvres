<template>
  <header class="banner" :class="{ small: isTouchingTop }" ref="root">
    <div class="banner-container">
      <div class="repo-banner">
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
              <MatreialIcon v-if="showIndex" icon="close" />
              <MatreialIcon v-else icon="menu" />
            </label>
            <span class="material-symbols-outlined" style="font-size: 24px" >
            chevron_right
            </span>
            <span class="path h3">
              <span v-for="p in path" :key="p">
                <a class="h3" href="#">{{ p }}</a
                >/
              </span>
              <span class="h3">{{ file }}</span>
            </span>
          </div>
        </div>
      </div>
      <IndexDrawer :open="showIndex" :repo_name="repo.full_name" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { GitDetails } from "@/services/models/GitDetails";
import { computed, onActivated, onBeforeUnmount, onMounted, onUpdated, ref, watch } from "vue";
import IndexDrawer from "./IndexDrawer.vue";
import MatreialIcon from "@/common/MaterialIcon.vue";

const root = ref<HTMLElement>()
const isTouchingTop = ref(false)
const drawerState = ref(false)
const initialHeight = ref(0)
const props = defineProps<{
  repo: GitDetails;
  file: string;
}>();

// const parts = props.file.split("/") ?? ["Nothing", "Here"];

const repo = ref(props.repo);

// const path = computed(() => {
//   return parts.slice(0, parts.length - 1);
// });

// const filename = computed(() => parts[parts.length - 1]);

const showIndex = computed(() => drawerState.value || undefined)

let scrollEventTimeout = 0;
onMounted(() => {
  window.addEventListener("scroll", onScrollHandler);
  scrollEventTimeout = 0
  
})

watch(() => root.value?.offsetHeight, (v) => {
  initialHeight.value = Math.max(v, initialHeight.value)
})



onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScrollHandler);
})

const onScrollHandler = () => {
  if (scrollEventTimeout != 0) {
    return
  }
  scrollEventTimeout = setTimeout(() => {
    console.log(root.value?.offsetTop,  window.pageYOffset, root.value?.offsetTop -  window.pageYOffset)
    isTouchingTop.value = !(root.value?.getBoundingClientRect().top > 0)
    initialHeight.value = Math.max(root.value?.offsetHeight, initialHeight.value)
    clearTimeout(scrollEventTimeout);
    scrollEventTimeout = 0;
  }, 200);
}

</script>

<style lang="sass">
header.banner
  z-index: 999
  max-height: 0px
  transition: all .4s ease-in
  *
    transition: all .1s ease-in
  color: $highlight
  height: auto
  position: sticky
  top: 0px
  .repo-banner
    padding: 16px 8px
    background-color: $primary-two
    position: relative
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  .banner-container
    display: flex
    flex-direction: column
    align-items: stretch
    height: 100vh //calc(100vh - 126px)
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
    .description
      transform: scaleY(0)
    .footer
      margin: 4px
      .breadcrumbs
        padding: 4px
        *
          font-size: small

.button
  border: none
  user-select: none
</style>
