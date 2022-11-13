<template>
  <div class="layout" id="about">
    <div class="container">
      <GitCard v-if="thisRepo" :repo="thisRepo" />
      <CardBoiler class="about-card">
        <template #head>
          <span class="title">About (Noodles Odyssey)</span>
        </template>
        <template #body>
          <p>
            Its not that great of a film, but this was a nice scene.
            From the film:
            <br />
            <a href="https://en.wikipedia.org/wiki/2010:_The_Year_We_Make_Contact">`The Year We Made Contact`</a>
            <br />
            (The <i>strange</i> sequel to 
            <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(film)">
              `2001 A Space Odyssey`</a>)
            <br />
            The artwork prominently references the final scene,a monolith
            resting on a beach populated by primitive foliage.
          </p>
          <p>
            In addition there is a creature resting atop the branded, alien,
            lego brick, admiring the moon.
            <br />
            <strong>The wiki says:</strong><br />
            `machines in black cuboids whose sides extend in the precise ratio
            of 1 : 4 : 9 (1² : 2² : 3²)
            <a href="https://en.wikipedia.org/wiki/Monolith_(Space_Odyssey)"
              >¹</a
            >`
            <br />
            <strong>But... for simplicity they are:</strong><br />
            impossibly smooth and precise `cuboids` consisting of 1 piece.
          </p>
        </template>
      </CardBoiler>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardBoiler from "@/components/common/CardBoiler.vue";
import GitCard from "@/components/GitCard.vue";
import gitService from "@/services/git.service";
import type { GitDetails } from "@/services/models/GitDetails";
import { onMounted, ref } from "vue";

const thisRepo = ref<GitDetails>();

onMounted(() => {
  gitService.getRepoDetails("Oeuvres").then((e) => (thisRepo.value = e));
});
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
    .about-card
      a
        color: $highlight-warm

</style>
