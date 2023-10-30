<template>
    <img class="img-fluid p-2 rounded" role="button" :src="adProp.tall" alt="">
</template>


<script>
import { Ad } from '../models/Ad';


export default {

    props: {
        adProp: { type: Ad, required: true },
    },

    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped></style>