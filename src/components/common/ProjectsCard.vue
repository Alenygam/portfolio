<template>
    <div class="project">
        <div class="project-title">
            <h2>
                {{title}}
            </h2>
        </div>
        <img v-bind:src="image" v-bind:alt="title" width="300" height="300" class="project-image">
        <div class="project-description">
            {{description}}<br>
            <router-link v-bind:to="route">Read more</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        image: String,
        description: String,
        route: String,
    }
}
</script>

<style scoped>
    .project {
        min-height: 400px;
        width: 300px;
        padding: 20px;
        box-shadow: 0 0 10px #000;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }

    .project > * {
        margin: 5px 0;
    }

    .project-title {
        text-align: center;
    }
    
    .project-title > h2 {
        font-size: 24px;
    }

    .project-image {
        border-radius: 10px;
    }

    .filler {
        flex-grow: 1;
    }
</style>