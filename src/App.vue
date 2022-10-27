<script setup lang="ts">
import Landing from './layouts/Landing.vue';

</script>

<template>
  <Landing />
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
  position: sticky
  top: 0px
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)

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
