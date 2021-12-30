<template>
    <div v-bind:class="dropShadow ? 'section-container drop-shadow' : 'section-container'">
        <div class="main-section">
            <h3>{{title}}</h3>
            <div class="description-container">
                <p>
                    {{desc}}
                </p>
            </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: center;">
            <img v-bind:src="img" v-bind:alt="title" height="500">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dropShadow: Boolean,
        title: String,
        desc: String,
        img: String
    }
}
</script>

<style scoped>
    .section-container {
        min-height: 500px;
        margin: 20px;
        border-radius: 10px;
        padding: 10px;

        display: flex;
        flex-direction: row;
        color: #FFFFFF;
        background-color: #D44E67;
    }

    .section-container > div > img {
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

    .drop-shadow {
        box-shadow: 0 0 25px #00000030;
        background-color: #ffffff;
        color: #000;
    }

    @media screen and (max-width: 580px) {
        .section-container {
            flex-direction: column;
        }
    }
</style>