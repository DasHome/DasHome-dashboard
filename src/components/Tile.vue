<template>
    <div class="tile" :class="width" :style="cssStyle" v-if="isVisible">
        {{ content }}
    </div>
</template>

<script>
    export default {
        props: {
            tile: Object
        },
        data() {
            return {
                content: this.tile.content,
                cssStyle: {
                    'color': this.tile.settings.textColor,
                    'background-color': this.tile.settings.backgroundColor,
                    'height': this.tile.settings.height * 10 + 'vh'
                },
                isVisible: this.tile.settings.visible
            }
        },
        computed:
        {
            width: function () {
                return 'col-md-' + this.tile.settings.width;
            }
        }
    }
</script>
