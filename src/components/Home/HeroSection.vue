<template>
    <div class="hero-container">
        <div class="hero-title">
            <h1>Alessandro Farcas</h1>
            <h2>Freelance Full-Stack developer</h2>
        </div>
        <div class="hero-image">
            <img src="@/assets/Home_picture.png">
        </div>
    </div>
</template>

<style scoped>
    .hero-container {
        width: 100%;
        height: 600px;
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .hero-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
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

    @media screen and (max-width: 920px) {
        .hero-container {
            height: 800px;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 2fr;
        }

        .hero-title {
            text-align: center;
        }
    }
</style>