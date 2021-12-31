<template>
    <div class="contactme-container">
        <h1>Contact me</h1>
        <div class="contactme-text">
            You can reach me through:

            <ul style="list-style-position: inside; margin-top: 10px;">
                <li>Email: <a href="mailto:alessandro@alenygam.com">alessandro@alenygam.com</a></li>
                <li>Discord: <code>Alenygam#5574</code></li>
                <li>Matrix: <code>alenygam@matrix.alenygam.com</code></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .contactme-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        place-items: center;
    }

    .contactme-container > h1 {
        font-size: 48px;
    }

    .contactme-text {
        margin-top: 20px;
        width: 290px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px #00000030;
    }
</style>