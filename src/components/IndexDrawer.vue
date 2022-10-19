<template>
  <aside class="index-drawer">
    <div class="doc" v-html="repo_index_html" />
  </aside>
</template>

<script lang="ts" setup>
import gitService from "@/services/git.service";
import { onMounted, ref } from "vue-demi"


const repo_index_html = ref()

const props = defineProps<{
  repo_name: string
}>()

onMounted(() => {
  console.log(props)
  gitService
    .getMarkupFor(props.repo_name, "INDEX.md")
    .then((r) => (repo_index_html.value = r));
})

</script>

<style lang="sass">
aside.index-drawer
  left: 0px
  top: 100%
  background-color: $primary-two
  width: min-content
  
  overflow: hidden
  // background: linear-gradient(45deg, blue, red)
  // transform: scaleX(0)
  transform-origin: center left
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25)
  white-space: nowrap
  flex: 1
  width: 0px
  &[open]
    // transform: scaleX(1)
    width: 200px
  .doc
    h1
      font-size: medium
      margin: 0px
</style>