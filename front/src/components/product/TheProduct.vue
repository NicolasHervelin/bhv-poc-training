<template>
    <div>
        <ul>
            <li> <p>UUID = {{ id }}</p> </li>
            <li> <p>Name = {{ name }}</p> </li>
            <li> <p>Description = {{ desc }}</p> </li>
            <li> <img :src="img" alt="" /> </li>
            <li> <p>Price = {{ price }}</p> </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Component from 'vue-class-component';
    import {Vue} from 'vue/types/vue';
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
