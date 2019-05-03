<template>
    <div class="container-fluid">
        <Header />
        <Panel />
        {{settings}}
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Panel from '../components/Panel.vue'

    export default {
        data() {
            return {
                tiles: [],
                settings: {}
            }
        },
        components: {
            Header,
            Panel
        },
        methods: {
            fetchDatas () {
                fetch('/settings.json')
                .then(response => response.json())
                .then(data =>
                {
                    this.settings = data;
                    document.body.style = 'background-color:' + data.backgroundColor;
                    
                    // load modules here
                });
            }
        },
        mounted() {
            this.fetchDatas();
        }
    }
</script>