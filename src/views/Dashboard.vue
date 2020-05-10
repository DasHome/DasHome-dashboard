<template>
    <div class="container-fluid">
        <Header :text="welcomeText" />
        <Panel :tiles="tiles" />
    </div>
</template>

<script>
    import { loadSettings } from '../services/settings-loader'
    import Header from '../components/Header.vue'
    import Panel from '../components/Panel.vue'

    export default {
        data() {
            return {
                welcomeText: '',
                tiles: []
            }
        },
        components: {
            Header,
            Panel
        },
        methods: {
            fetchDatas () {
                loadSettings()
                .then(settings => {
                    this.welcomeText = settings.welcomeText;
                    this.tiles = settings.modules;
                    document.body.style = 'background-color:' + settings.backgroundColor;
                });
            }
        },
        mounted() {
            this.fetchDatas();
        }
    }
</script>