<template>
  <HeroSection/>
  <Projects/>
</template>

<script>
import HeroSection from '@/components/Home/HeroSection.vue'
import Projects from '@/components/Home/Projects.vue'

export default {
  components: {HeroSection, Projects}
}
</script>