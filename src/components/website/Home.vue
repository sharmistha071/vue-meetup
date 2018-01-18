<template>
    <div class="container-fluid carousal-container">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item" :class="{active: item.id==1}" v-for="item in meetups" @click="onLoadMeetup(item.id)">
                    <img :src="item.imageUrl" alt="">
                    <div class="carousel-caption">{{item.title}}</div>
                </div>
            </div>
            <!-- Controls -->
            <!-- <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a> -->
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
    // data () {
    //     return {
    //
    //     }
    // },
    methods: {
        onLoadMeetup: function(id){
            this.$router.push('/meetup/' +id);
        }
    }
}
</script>

<style scoped>
.carousal-container{
    padding: 0px;
}
.item:hover{
    cursor: pointer;
}
</style>
