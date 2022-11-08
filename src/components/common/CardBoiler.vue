<template>
  <div class="card">
    <div class="head">
      <slot name="head">
        <span class="title">
          This is a card
        </span>
        <div class="icon">
          <i class="fa fa-brands fa-github" />
        </div>
      </slot>
    </div>
    <div class="body">
      <slot name="body">
        <span>
          This is the card content
        </span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="sass">
.card
  background-color: transparentize(darken($primary, 5), .5)
  padding: 10pt
  color: white

  max-width: min(300pt, 100%)
  @media (max-width: 800px)
      width: auto
  margin: .5em 0px
  border: solid lighten($primary, 10) 2pt
  border-radius: 5pt
  position: relative
  .head
    display: flex
    justify-content: space-between
    align-items: flex-start
    padding-right: .5em
    .title
      margin: 10pt 0px
      font-weight: bold
      font-size: larger
    a.icon, .icon
      font-size: 15pt
      margin: auto 5px
      color: white
      &:hover
        color: $highlight
    
</style>