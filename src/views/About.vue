<template>
  <HeroSection/>
  <DescriptionSection
    title="About Me"
    desc="
      I'm a full stack developer based in Turin, Italy. I have experience 
      using the MongoDB and MySQL databases, and I design most of my APIs
      using Node.js and Express.<br><br>

      You can find the source code for this website <a href=https://github.com/Alenygam/portfolio>here</a><br>
      You can find my GitHub <a href=https://github.com/Alenygam/>here</a>
    "
    vid="/img/about_me/typing.webm"
    customVidHeight=300
  />
</template>

<script>
import HeroSection from '@/components/Home/HeroSection.vue'
import DescriptionSection from '@/components/AboutMe/DescriptionSection.vue'
export default {
  components: {HeroSection, DescriptionSection}
}
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>