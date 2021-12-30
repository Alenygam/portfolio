<template>
    <div class="project-title">
        <h1>{{title}}</h1>
        <h2>{{shortDesc}}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        shortDesc: String
    }
}
</script>

<style scoped>
    .project-title {
        text-align: center;
    }

    .project-title > * {
        margin: 5px;
    }

    .project-title > h1 {
        font-size: 48px;
    }

    .project-title > h2 {
        font-size: 24px;
    }
</style>

