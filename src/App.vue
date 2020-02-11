<template lang="pug">
    #app
        index-component
</template>

<script>
    import Index from "./components/pages/Index.vue";
    export default {
        updated(){
            if (typeof document !== 'undefined'){
                document.body.style.overflow = "";
            }
        },
        created(){
            if (typeof document !== 'undefined' && window.innerWidth >= 1200) {
                window.addEventListener('resize', this.setHtmlFontSize);
            }
        },
        destroyed(){
            if (typeof document !== 'undefined' && window.innerWidth >= 1200){
                window.removeEventListener('resize', this.setHtmlFontSize);
            }
        },
        mounted() {
            if(window.innerWidth >= 1200){
                this.setHtmlFontSize();
            }
        },
        methods:{
            setHtmlFontSize (){
                let fontSize = window.innerWidth / 100;

                if(window.innerWidth >= 1200) {
                    fontSize = window.innerWidth / 100;
                    if(window.innerWidth >= 1800) {
                        fontSize = 18;
                    }
                    document.documentElement.style.fontSize = fontSize + 'px';
                } else {
                    document.documentElement.style.fontSize = null
                }
            }
        },
        components: {
            'index-component': Index,
        }
    };
</script>

<style lang="scss">
</style>