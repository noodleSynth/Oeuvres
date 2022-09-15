<template>
  <div class="doc" v-html="doc">

  </div>
</template>
<script lang="ts" setup>
import gitService from "@/services/git.service";
import type { GitDetails } from "@/services/models/GitDetails";
import { onMounted, ref } from "vue-demi";


const props = defineProps<{
  repo: GitDetails,
  file: string,
}>()

const doc = ref<string>()

onMounted(() => {
  gitService.getMarkupFor(props.repo.full_name, props.file).then(r => {
    doc.value = r;
    console.log(r)
  })
})


</script>

<style lang="sass">
.doc
  margin: 32px
  color: $highlight
</style>