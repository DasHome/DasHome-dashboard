<template>
    <div class="container-fluid">
        <Header />
        <Panel />
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Panel from '../components/Panel.vue'

    export default {
        components: {
            Header,
            Panel
        }
    }
</script>