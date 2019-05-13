<template>
    <div class="header">
        <div class="jumbotron">
            <h1 class="display-4" id="title">Welcome to Personal Trainer App</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    .jumbotron {
        background-image: url('../assets/gym.jpg');
        height: 300px;
        background-position: center;
        background-size:800px
    }
    #title {
        font-weight: 500;
        color: #ff260b;
        text-align: center;

    }
</style>