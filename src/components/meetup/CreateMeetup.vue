<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-offset-2 col-md-6">
                <h4>Create a New meetup</h4>
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" required v-model="title">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Description</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" required v-model="description"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Date</label>
                        <div class="col-sm-10">
                            <input type="date" class="form-control" required v-model="date">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Image Url</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" required v-model="imageUrl">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary pull-right" @click.prevent="createMeetup">Create Meetup</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            title: '',
            description: '',
            date: '',
            imageUrl: ''
        }
    },
    methods: {
        createMeetup(){
            var meetupData = {
                title: this.title,
                description: this.description,
                imageUrl: this.imageUrl,
                date: this.date,
                id: 4
            };
            this.$store.dispatch('createMeetup', meetupData);
            this.$router.push('/meetups');
        }
    }
}
</script>

<style>

</style>
