<template>
    <div class="row">
        <div class="col-md-12">
            <h1><strong>{{ welcomeMessage }}</strong></h1>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                welcomeMessage: ''
            }
        },
        methods: {
            fetchDatas () {
                this.welcomeMessage = 'Good morning !'
            }
        },
        mounted() {
            this.fetchDatas();
        }
    }
</script>