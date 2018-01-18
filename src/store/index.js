import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as firebase from 'firebase'

Vue.use(Vuex);
Vue.use(axios);

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl: 'http://via.placeholder.com/3500x950',
                id:1,
                title: 'title One',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                date: '2018-07-12'
            },
            {
                imageUrl: 'http://via.placeholder.com/3500x950',
                id:2,
                title: 'title two',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                date: '2018-07-13'
            },
            {
                imageUrl: 'http://via.placeholder.com/3500x950',
                id:3,
                title: 'title three',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                date: '2018-07-14'}
        ],
        user: null
    },
    mutations: {
        createMeetup(state, payload){
            state.loadedMeetups.push(payload)
        },
        setUser(state, payload){
            state.user = payload
        }
    },
    actions: {
        createMeetup: (context, payload) => {
            axios.post('https://vue-mmetup.firebaseio.com/posts.json', payload).then(response => {
                console.log(response);
            }).catch(error => {
                this.errors.push(error);
            })
            context.commit("createMeetup", payload)
        },
        signupUser: (context, payload) => {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user =>{
                const newUser = {
                    id: user.uid,
                    registeredMeetups: []
                }
                context.commit('setUser', newUser)
            }).catch(error =>{
                console.log(error);
            })
        },
        signinUser: (context, payload) => {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user =>{
                const newUser = {
                    id: user.uid,
                    registeredMeetups: []
                }
                context.commit('setUser', newUser)
            }).catch(error =>{
                console.log(error);
            })
        }
    },
    getters:{
        loadedMeetups(state){
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        loadedMeetup(state, id){
            return (id) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id == id
                })
            }
        },
        user(state){
            return state.user
        }
    }
})
