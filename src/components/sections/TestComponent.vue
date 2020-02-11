<template lang="pug">
    include ../../../tools/mixins.pug
    +b.SECTION.test-component
        +e.H2.title {{titleText}}
</template>

<script>
    export default {
        data() {
            return {
                titleText: this.$store.getters.getTitleText,
            }
        },
    }
</script>