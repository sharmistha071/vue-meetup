<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/website/Header.vue'

export default {
    components: {
        'app-header': Header
    },
    data () {
        return {

        }
    }
}
</script>

<style>

</style>
