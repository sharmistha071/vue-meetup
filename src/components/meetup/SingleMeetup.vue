<template>
    <div class="container">
        <div class="panel-body single-card">
            <div class="card-img">
                <img class="img-responsive" :src="meetup.imageUrl" alt="meetup-img">
            </div>
            <div class="card-body">
                <h2>{{meetup.title}}</h2>
                <p>{{meetup.description}}</p>
                <div class="card-extras">
                    <span class="glyphicon glyphicon-time" aria-hidden="true">12pm</span>
                    <span class="glyphicon glyphicon-calendar" aria-hidden="true">{{meetup.date}}</span>
                </div>
                <div class="card-action pull-right">
                    <button class="btn btn-sm btn-primary">Register Now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
}
</script>

<style scoped>
    .single-card{
        border: 1px solid #eee;
        padding: 0px;
    }
    .card-body{
        padding: 15px;
    }
    .card-action{
        padding-bottom: 10px;
    }
</style>
