<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <h1>filter</h1>
            </div>
            <div class="col-md-9">
                <ul class="meetup-list">
                    <li class="meetup-list-item" v-for="item in meetups">
                        <div class="row">
                            <div class="col-md-4 item-img">
                                <img class="img-responsive" :src="item.imageUrl" alt="meetup-image">
                            </div>
                            <div class="col-md-8 item-body">
                                <h3 class="item-title">{{item.title}}</h3>
                                <p class="item-desc">
                                    {{item.description}}
                                </p>
                                <p class="item-schedule">
                                    <span class="glyphicon glyphicon-time" aria-hidden="true">12pm</span><span class="blank-space"></span>
                                    <span class="glyphicon glyphicon-calendar" aria-hidden="true">{{item.date}}</span>
                                </p>
                                <div>
                                    <button class="btn btn-sm btn-primary pull-left">Register Now</button>
                                    <router-link :to="'/meetup/'+item.id" class="pull-right">->View Meetup</router-link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        meetups(){
            return this.$store.getters.loadedMeetups;
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    padding-left: 0px;
}
li{
    background-color: #eee;
    margin-bottom: 20px;
}
.register-btn{
    position: absolute;
    right: 31px;
}
.blank-space{
    margin-left: 5px;
}

</style>
