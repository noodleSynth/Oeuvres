<template>
  <section class="landing_section">
    <aside class="banner">
      <div class="container">
        <svg class="monolyth" viewBox="0 0 659 842">
          <rect width="659" height="842" fill="black"/>
        </svg>
      </div>
    </aside>
    <aside class="welcome">
      <div class="container">
        <h1>
          Oeuvres
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae accumsan odio, ut pulvinar metus. Quisque hendrerit odio feugiat tincidunt sodales. Sed et ex vel sem blandit malesuada id at nulla. Nullam volutpat diam et molestie vulputate. Morbi aliquet ipsum quam, ac bibendum mi aliquet quis. Vivamus ornare magna sed tortor semper, nec maximus sem rutrum. Mauris ut dui eget leo lobortis hendrerit vitae ultricies tellus.
        </p>
      </div>
    </aside>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="sass">
.landing_section
  $bannerBackground: lighten($primary-two, 60)
  min-width: 100vw
  height: 100vh
  background-color: $primary-two
  display: flex
  flex-direction: row
  justify-content: stretch
  @media (max-width: 1000px)
    flex-direction: column
  .banner
    background: url('@/assets/LandingBackground.jpg')
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    box-shadow: inset $primary-two 0px 0px 15px 10px
    width: 100%
    @media (max-width: 1000px)
      height: 100vh
    .container
      backdrop-filter: blur(2px) contrast(2)
      display: flex
      flex-direction: column
      margin: auto
      width: 100%
      height: 100%
      .monolyth
        // width: 659px
        // max-width: 659px
        // height: 842px
        // max-height: 842px
        // background-color: black
        transform: scale(.5)
        margin: auto
        box-shadow: lighten(black, 20) 0px 0px 20px 1px
  .welcome
    display: flex
    width: min-content
    margin: auto
    .container
      color: white
      margin: auto
      margin-top: 4em
      padding: 0px 2em
      h1
        text-decoration: underline
        text-decoration-color: gold
        text-decoration-thickness: 2px
        text-underline-offset: 8px
        font-size: 4em !important
        margin: auto
        width: min-content
        margin-bottom: 1em
      p
        width: 300px
        text-align: center
        padding-top: 20px
        line-height: 20px

</style>