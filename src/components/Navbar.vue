<template>
    <div class="nav" id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about_me">About Me</router-link>
        <router-link to="/projects">Projects</router-link>
        <div class="filler"></div>
        <ContactMeButton/>
    </div>
    <button id="menubutton" class="menubutton" type="button" v-on:click="openMenu">
        <i class="ph-list" style="font-size: 32px"></i>
    </button>
</template>

<script>
import ContactMeButton from '@/components/common/ContactMeButton.vue'

function openMenu() {
    const nav = document.getElementById('nav');
    const menubutton = document.getElementById('menubutton');

    nav.classList.toggle('open-nav');
    menubutton.classList.toggle('open-button');
}

export default {
    methods: {
        openMenu: openMenu,
    },
    components: {ContactMeButton}
}
</script>

<style scoped>
    .menubutton {
        background-color: #D44E67;
        border: none;
        color: #ffffff;
        border-radius: 10px;
        position: fixed;
        top: 10px;
        left: 10px;
        cursor: pointer;
        transition: .5s;
        display: none;
        z-index: 999;
    }

    .menubutton:hover {
        color: #000000;
        background-color: #ffffff;
    }

    .nav {
        z-index: 999;
        position: fixed;
        width: 100vw;
        height: 40px;
        font-size: 18px;
        display: flex;
        background-color: #fff;
        transition: .5s;
    }


    .nav * {
        padding: 10px 20px;
        text-decoration: none;
    }

    .nav a {
    font-weight: bold;
    color: #000000;
    }

    .nav a.router-link-exact-active {
    color: #D44E67;
    }

    @media screen and (max-width: 500px) {
        .nav > * {
            margin: 10px;
        }
        .nav {
            /* Left needs to be -300px to account for the padding */
            left: -300px;
            height: calc(100vh - 40px);
            width: 260px;
            flex-direction: column;
            text-align: center;
            background-color: #9DB3AF;
            padding: 20px;
        }

        .menubutton {
            display: block;
        }

        .open-nav {
            left: 0;
        }

        .open-button {
            left: 310px;
        }

        .contact-button {
            margin-bottom: 50px;
        }
    }
    
    @media screen and (min-width: 500px) {
        .contact-button {
            margin: 3px 20px 3px 3px;
        }
    }
    
    .filler {
        padding: 0;
        margin: 0;
        flex-grow: 1;
    }
</style>

