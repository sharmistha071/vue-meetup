<template>
    <header>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link class="navbar-brand" to="/">Meetup</router-link>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li v-for="item in menuItems">
                            <router-link :to="item.path">{{item.title}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data () {
        return {
            // menuItems: [
            //     {path:'/meetups', title: 'View Meetups'},
            //     {path:'/meetup/create', title: 'Create meetup'},
            //     {path:'/profile', title: 'Profile'},
            //
            // ]
        }
    },
    computed: {
        menuItems(){
            let menuItems = [
                {path:'/meetups', title: 'View Meetups'},
                {path:'/signup', title: 'Sign up'},
                {path:'/login', title: 'Sign in'},
            ]
            if(this.userIsAuthenticated){
                menuItems = [
                    {path:'/meetups', title: 'View Meetups'},
                    {path:'/meetup/create', title: 'Create meetup'},
                    {path:'/profile', title: 'Profile'},
                    {path:'/signup', title: 'Sign up'},
                    {path:'/login', title: 'Sign in'},
                ]
            }
            return menuItems
        },
        userIsAuthenticated(){
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        }
    }
}
</script>

<style>

</style>
