<template>
    <ProjectTitle 
        title="Spaggiu" 
        shortDesc="The alternative front end for the Spaggiari electronic register."    
    />
    <ProjectSection 
        title="Stunning Design"
        img="/img/Spaggiu/Cover.png"
        desc="Stunning and easy to use design, perfect for all kinds students."
    />
    <ProjectSection 
        title="Easy access"
        img="/img/Spaggiu/Navbar.png"
        desc="Easy access to all of the electronic register's feature, all from a simple navigation menu."
        dropShadow=true
    />
    <ProjectSection 
        title="Grades averages"
        img="/img/Spaggiu/GradesPage.png"
        desc="Instantly see the average grade for every subject and period."
    />
    <ProjectSection 
        title="See your trends"
        img="/img/Spaggiu/GradesGraphs.png"
        desc="Easy to read graphs show the trend of your grades over time."
        dropShadow=true
    />
    <ProjectSection 
        title="Custom designed agenda"
        img="/img/Spaggiu/Agenda.png"
        desc="Custom designed agenda with only the moment.js library. Crazy fast."
    />
    <ProjectSection 
        title="Use it right now"
        img="/img/Spaggiu/Login.png"
        desc="You can use the InDev version right now! Just visit <a href='https://spaggiu.alenygam.com'>https://spaggiu.alenygam.com</a>"
        dropShadow=true
    />
</template>

<script>
import ProjectSection from '@/components/Projects/ProjectSection.vue';
import ProjectTitle from '@/components/Projects/ProjectTitle.vue'

export default {
    components: {ProjectSection, ProjectTitle}
}
</script>

<style scoped>

</style>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
