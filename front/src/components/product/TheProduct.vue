<template>
    <ul>
        <li>
            <label>UUID : {{ id }}</label>
        </li>
        <li>
            <p>Name : {{ name }}</p>
        </li>
        <li>
            <p>Description : {{ desc }}</p>
        </li>
        <li>
            <p>Image : </p>
            <img :src="img" alt="" />
        </li>
        <li>
            <p>Price : {{ price }}</p>
        </li>
    </ul>
</template>

<script lang="ts">
    import Component from 'vue-class-component';
    import Vue from 'vue';
    import {Prop} from 'vue-property-decorator';

    @Component
    export default class TheProduct extends Vue {
        @Prop()
        id: string;

        @Prop()
        name: string;

        @Prop()
        desc: string;

        @Prop()
        img: string;

        @Prop()
        price: string;
    }
</script>

<style scoped lang="scss">

</style>
