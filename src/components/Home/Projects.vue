<template>
    <div class="title-container">
        <h1 class="section-title">Projects</h1>
    </div>
    <div class="projects-container">
        <ProjectsCard 
            title="Spaggiu"
            description="Simple and easy to use frontend for the Spaggiari electronic register."
            image="/img/Projects_spaggiu_picture.png"
            route="/projects/spaggiu"
        />
        <ProjectsCard
            title="SimpleWeather"
            description="Simple Weather app written in Flutter. Supports getting data from current GPS location."
            image="/img/Projects_SimpleWeather_picture.png"
            route="/projects/spaggiu"
        />
    </div>
</template>

<script>
import ProjectsCard from '@/components/common/ProjectsCard.vue'

export default {
    components: {ProjectsCard}
}
</script>

<style scoped>
    .title-container {
        text-align: center;
    }

    .section-title {
        font-size: 32px;
    }

    .projects-container {
        display: flex;
        flex-wrap: nowrap;
        padding: 40px;
        overflow: auto;
        justify-content: center;
    }

    .projects-container > div {
        flex: 0 0 300px;
        margin: 10px;
    }

    @media screen and (max-width: 840px) {
        .projects-container {
            justify-content: flex-start;
        }
    }
</style>