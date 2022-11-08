<template>
    <div class="layout" id="about">
      <div class="container">
        <GitCard v-if="thisRepo" :repo="thisRepo" />
      </div>

    </div>
</template>

<script lang="ts" setup>
import CardBoiler from '@/components/common/CardBoiler.vue';
import GitCard from '@/components/GitCard.vue';
import gitService from '@/services/git.service';
import type { GitDetails } from '@/services/models/GitDetails';
import { onMounted, ref } from 'vue';

const thisRepo = ref<GitDetails>()

onMounted(() => {
  gitService.getRepoDetails('Oeuvres').then(e => thisRepo.value = e)
})

</script>

<style lang="sass">
#about
  background: url('@/assets/AboutBackground.jpg')
  background-size: 200vh auto
  background-position: -40px 30%
  @media (max-width: 800px)
    background-position: 25% 30%
  background-repeat: no-repeat
  box-shadow: inset rgba(0, 0, 0, 1) 0px -10px 15px -5px
  background-attachment: fixed
  .container
    backdrop-filter: blur(1px)
</style>