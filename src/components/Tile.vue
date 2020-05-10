<template >
    <div :id="id" class="tile animated" :class="width" :style="cssStyle" v-if="isEmbedded">
        <iframe :src="this.modulePath" frameborder="none" />
    </div>

    <div :id="id" class="tile animated" :class="width" :style="cssStyle" v-html="content" v-else></div>
</template>

<script>
    export default {
        props: {
            tile: Object
        },
        data() {
            return {
                id: this.tile.settings.id,
                content: this.tile.content,
                jsAssets: this.tile.jsAssets,
                cssStyle: {
                    'color': this.tile.settings.textColor,
                    'background-color': this.tile.settings.backgroundColor,
                    'height': this.tile.settings.height ? this.tile.settings.height * 10 + 'vh' : '100%'
                },
                isEmbedded: this.tile.settings.embedded == true,
                modulePath: this.tile.modulePath
            }
        },
        computed:
        {
            width: function () {
                return 'col-sm-' + this.tile.settings.width;
            },

            htmlContent() {
                var parser = new DOMParser();

                var html = parser.parseFromString(this.content, "text/html");

                console.log(html);

                return html;
            },
        },
        mounted() {
            if (this.jsAssets)
                this.loadJsFile();
        },
        methods: {
            loadJsFile() {
                for (var i=0; i<this.jsAssets.length; i++) {
                    let moduleScript = document.createElement('script')
                    moduleScript.setAttribute('src', this.jsAssets[i])
                    document.head.appendChild(moduleScript)
                }
            }
        }
    }
</script>

<style scoped>
 .tile {
     position: relative;
 }
 .tile iframe
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>