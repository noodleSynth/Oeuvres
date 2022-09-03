<script setup lang="ts">
import { onMounted, ref } from 'vue';
import repoJson from './repos.json';
import RepoService from './services/git.service'
import GitCard from './components/GitCard.vue'

const repos = ref([])

onMounted(() => {
  repoJson.forEach((r) => {
    RepoService.getRepoDetails(r).then(rj => repos.value.push(rj))
  })
})
</script>

<template>
  <main>
    <nav>
      <a href="/" class="h1 banner nav-item">Oeuvres</a>
      <div class="navlinks">
        <a href="#github" class="h2 nav-item">
          <i class="icon fa-brands fa-github"></i>
          <span>Github</span>
        </a>
      </div>
    </nav>
    <div class="body" v-for="r in repoJson" :key="r">
      <GitCard :path="r" />
    </div>
  </main>
</template>

<style lang="sass">
html
  background-color: $primary
  margin: 0px
  display: flex
  flex-direction: column
  justify-content: center
  position: relative
  margin: auto

nav
  background-color: $primary-two
  min-height: 50px
  color: $highlight
  display: flex
  flex-direction: row
  justify-content: space-between
  padding: 8px 14px

.nav-item
  text-decoration: none
  color: var(--highlight)
  transition: color .2s
  display: flex
  align-items: center
  &:hover
    color: white
  .icon
    font-size: 20px
    margin: auto 8px



.navlinks
  display: flex
  justify-content: space-evenly
  align-items: center

main>.body
  justify-content: center
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 60px
</style>
