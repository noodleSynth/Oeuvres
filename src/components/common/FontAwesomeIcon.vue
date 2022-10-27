<template>
  <i :class="[iconCollection, iconName]"></i>
</template>

<script lang="ts" setup>
import { computed } from "vue"


const props = defineProps<{
  collection?: string,
  name: string
}>()

const iconCollection = computed(() => {
  if (!props.collection) return 'fa-solid'
  return "fa-" + props.collection
})
const iconName = computed(() => {
  return 'fa-' + props.name
})

</script>