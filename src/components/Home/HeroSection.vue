<template>
    <div class="hero-container">
        <div class="hero-title">
            <h1>Alessandro Farcas</h1>
            <h2>Freelance Full-Stack developer</h2>
            <ContactMeButton/>
        </div>
        <div class="hero-image">
            <img src="@/assets/Home_picture.png">
        </div>
    </div>
</template>

<script>
import ContactMeButton from '@/components/common/ContactMeButton.vue'

export default {
    components: {ContactMeButton}
}
</script>

<style scoped>
    .hero-container {
        width: 100%;
        height: 600px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin-bottom: 100px;
    }

    .hero-title {
        display: flex;
        justify-content: center;
        flex-direction: column;
        place-items: center;
        text-align: right;
    }

    .hero-title > h1 {
        font-size: 78px;
    }

    .hero-title > h2 {
        font-size: 24px;
    }

    .hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero-image > img {
        width: 450px;
        height: 450px;
        border-radius: 10px;
    }

    .contact-button {
        margin-top: 20px;
    }

    @media screen and (min-width: 920px) {
        .hero-title {
            place-items: flex-end;
        }
    }

    @media screen and (max-width: 920px) {
        .hero-container {
            height: 650px;
            width: 100%;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 2fr;
        }

        .hero-title {
            text-align: center;
        }

        .hero-title > h1 {
            font-size: 60px;
        }

        .hero-title > h2 {
            font-size: 20px;
        }

        .hero-image > img {
            width: 300px;
            height: 300px;
        }
    }
</style>