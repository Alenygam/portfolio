<template>
    <div class="about-me-container">
        <div class="main-section">
            <h3>{{title}}</h3>
            <div class="description-container">
                <div v-html="desc">
                </div>
            </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: center;">
            <video v-bind:height="customVidHeight" autoplay="autoplay" loop="loop">
                <source v-bind:src="vid" type="video/webm">
            </video>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        desc: String,
        vid: String,
        customVidHeight: Number
    }
}
</script>

<style scoped>
    .about-me-container {
        min-height: 500px;
        margin: 20px;
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0 0 25px #00000030;

        display: flex;
        flex-direction: row;
    }

    .about-me-container > div > video {
        border-radius: 10px;
    }

    .main-section {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    
    .main-section > h3 {
        font-size: 24px;
        text-align: center;
    }

    .description-container {
        flex-grow: 1;
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .description-container > * {
        max-width: 50ch;
    }

    @media screen and (max-width: 580px) {
        .about-me-container {
            flex-direction: column;
        }
    }
</style>