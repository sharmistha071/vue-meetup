<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" required v-model="email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" required v-model="password">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary pull-right" @click.prevent="onSignin">Sign in</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        user(){
            return this.$store.getters.user
        }
    },
    watch: {
        user(value){
            if(value !=null && value !== undefined){
                this.$router.push('/');
            }
        }
    },
    data () {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        onSignin(){
            this.$store.dispatch('signinUser', {
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>

<style>

</style>
