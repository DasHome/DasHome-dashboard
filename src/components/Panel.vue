<template>
    <div class="row dashboard-panel display-animation">
        <Tile v-for="(tile, index) in tiles" v-bind:key="index" :tile="tile" />
    </div>
</template>

<script>
    import Tile from '../components/Tile.vue'

    export default {
        data() {
            return {
                tiles: []
            }
        },
        components: {
            Tile
        },
        methods: {
            fetchDatas () {
                var tile = {
                    content: 'atatata',
                    settings: {
                        name: 'a',
                        textColor: 'white',
                        backgroundColor: '#ec407a',
                        width: 2,
                        height: 1,
                        visible: true,
                        order: 1
                    }
                };
                
                this.tiles.push({
                    content: 'atatata',
                    settings: {
                        name: 'a',
                        textColor: 'white',
                        backgroundColor: '#ab47bc',
                        width: 6,
                        height: 5,
                        visible: true,
                        order: 1
                    }
                });
                
                this.tiles.push(tile);
                this.tiles.push(tile);
                this.tiles.push(tile);
                this.tiles.push(tile);
                this.tiles.push(tile);
                this.tiles.push(tile);
                
                this.tiles.push(tile);
                
                this.tiles.push({
                    content: 'atatata',
                    settings: {
                        name: 'a',
                        textColor: 'black',
                        backgroundColor: '#ffca28',
                        width: 3,
                        height: 1,
                        visible: true,
                        order: 1
                    }
                });

                this.tiles.push({
                    content: 'atatata',
                    settings: {
                        name: 'a',
                        textColor: 'black',
                        backgroundColor: '#29b6f6',
                        width: 3,
                        height: 1,
                        visible: true,
                        order: 1
                    }
                });

                this.tiles.push({
                    content: 'atatata',
                    settings: {
                        name: 'a',
                        textColor: 'white',
                        backgroundColor: '#2672EC',
                        width: 2,
                        height: 1,
                        visible: false,
                        order: 1
                    }
                });
            }
        },
        mounted() {
            this.fetchDatas();
        }
    }
</script>

<style scoped>
    .dashboard-panel > * {
        display: block;
        float: left;
        margin: 5px;
    }

    .tile {
        width: 100%;
        display: inline-block;
        box-sizing: border-box;
        background: #fff;
        padding: 20px;
        margin: 1rem;
        color: #212121;
        outline: 0;
        border: 0;
        border-radius: 2px;
        -webkit-transition: all 0.15s ease-in-out;
        -o-transition: all 0.15s ease-in-out;
        transition: all 0.15s ease-in-out;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    .tile:hover,
    .tile:active,
    .tile.active,
    .tile:focus,
    .tile:active:focus,
    .tile.active:focus {
        -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .display-animation > * {
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        -o-transform: scale(0);
        transform: scale(0);
    }
    .display-animation > .animated {
        -webkit-animation: display 0.5s cubic-bezier(0.55, 0, 0.1, 1) forwards;
        -o-animation: display 0.5s cubic-bezier(0.55, 0, 0.1, 1) forwards;
        animation: display 0.5s cubic-bezier(0.55, 0, 0.1, 1) forwards;
    }

    @keyframes display {
        from {
            -webkit-transform: scale(0);
        }
        to {
            -webkit-transform: scale(1);
        }
    }
    @-o-keyframes display {
        from {
            -webkit-transform: scale(0);
        }
        to {
            -webkit-transform: scale(1);
        }
    }
    @-ms-keyframes display {
        from {
            -webkit-transform: scale(0);
        }
        to {
            -webkit-transform: scale(1);
        }
    }
    @-moz-keyframes display {
        from {
            -webkit-transform: scale(0);
        }
        to {
            -webkit-transform: scale(1);
        }
    }
    @-webkit-keyframes display {
        from {
            -webkit-transform: scale(0);
        }
        to {
            -webkit-transform: scale(1);
        }
    }
</style>