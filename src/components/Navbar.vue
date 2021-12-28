<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <div style="flex-grow: 1;"></div>
        <button type="button" v-on:click="test">
            <i class="ph-list" style="font-size: 32px"></i>
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        test: () => console.log('it works :D'),
    }
}
</script>

<style scoped>
    .nav {
        position: fixed;
        width: 100vw;
        height: 40px;
        font-size: 18px;
        display: flex;
        background-color: #9DB3AF40;
    }

    .nav * {
        margin: auto 20px;
    }

    .nav a {
    font-weight: bold;
    color: #000;
    }

    .nav a.router-link-exact-active {
    color: #D44E67;
    }
</style>

