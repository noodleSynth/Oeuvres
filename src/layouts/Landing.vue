<template>
  <section class="layout landing_section">
    <div class="container">
      <div class="banner">
        <div class="body">
          <svg class="monolyth" viewBox="0 0 659 842">
            <rect width="659" height="842" fill="black"/>
          </svg>
        </div>
      </div>
      <div class="welcome">
        <div class="body">
          <h1>
            Oeuvres
          </h1>
          <div>
            <p>
              An Oeuver is a body of work. A collection of work done with explicit goals in a discipline or field.
            </p>
            <p>
              This website serves as a catalogue/gallery of my personal and shared projects.
            </p>
            <p>
              Still under development, be sure to check back often!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="sass">
.layout.landing_section
  max-height: 100vh
  @media (max-width: 800px)
      max-height: unset
  .container
    padding: 0px
    flex-direction: column
    display: flex
    position: relative
    justify-content: space-between
    width: 100%
    max-height: 100%
    position: relative
  .banner
    background: url('@/assets/LandingBackground.jpg')
    background-size: cover
    background-attachment: fixed
    background-position: center
    background-repeat: no-repeat
    box-shadow: inset $primary-two 0px 0px 15px 10px
    height: auto
    
    @media (max-width: 800px)
      // height: 55%
    .body
      backdrop-filter: blur(2px) contrast(2)
      display: flex
      flex-direction: column
      margin: auto
      width: 100%
      max-height: 66vh
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
    max-width: min-content
    min-height: min-content
    margin: auto
    .body
      color: white
      margin: auto
      padding: 0px 2em
      max-width: min-content
      display: flex
      flex-direction: row
      justify-content: flex-start
      align-items: flex-start
      @media (max-width: 800px)
        flex-direction: column
        padding-bottom: 2em
      h1
        // text-decoration: underline
        // text-decoration-color: gold
        text-decoration-thickness: 2px
        text-underline-offset: 8px
        font-size: 4em !important
        width: min-content
        margin: auto 1em
        border: solid 2px gold
        padding: .5em
        @media (max-width: 800px)
          margin: 1em auto
      p
        width: 300px
        text-align: center
        padding-top: 20px
        line-height: 20px

</style>