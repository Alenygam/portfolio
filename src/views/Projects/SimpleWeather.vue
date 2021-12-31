<template>
    <ProjectTitle 
        title="Simple Weather" 
        shortDesc="The simple application for the weather"
    />
    <ProjectSection 
        title="Adaptable themes"
        img="/img/SimpleWeather/Cover.png"
        desc="Both dark and white themes, according to your device's settings."
    />
    <ProjectSection 
        title="Saved cities"
        img="/img/SimpleWeather/SavedCities.png"
        desc="Access the weather in all the cities that you want, just with the click of a button."
        dropShadow=true
    />
    <ProjectSection 
        title="Change settings"
        img="/img/SimpleWeather/Settings.png"
        desc="You can change how you want the weather to be displayed, and the language you want the app to be displayed in!"
    />
    <ProjectSection 
        title="F-Droid repo"
        img="/img/f-droid-qr-code.png"
        customImgHeight=225
        desc="
            Download it using my custom f-droid repo:<br><br>
            <ul style='text-align: left; list-style-position: inside;'>
                <li>URL: <code>https://f-droid.alenygam.com/fdroid/repo</code></li>
                <li>Digital Signature: <code>EE 7D 6A 99 54 E0 E6 18 CE 12 05 F9 EC DC 0F 10 03 28 DD 20 8A A6 56 C7 26 03 DB E5 B1 BE 7C AE</code></li>
            </ul>
        "
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
