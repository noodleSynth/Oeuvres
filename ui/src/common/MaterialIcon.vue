<template>
  <span v-bind="$attrs" class="material-symbols-outlined">{{icon}}</span>
</template>

<script lang="ts" setup>
defineProps < {
  icon: string
}>()
</script>