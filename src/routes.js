import Home from './components/website/Home.vue'
import Meetups from './components/meetup/Meetups.vue'
import CreateMeetup from './components/meetup/CreateMeetup.vue'
import SingleMeetup from './components/meetup/SingleMeetup.vue'
import Profile from './components/user/Profile.vue'
import Login from './components/user/Login.vue'
import Signup from './components/user/Signup.vue'


export default[
    {path: '/', component: Home},
    {path: '/meetups', component: Meetups},
    {path: '/meetup/create', component: CreateMeetup},
    {path: '/meetup/:id', props:true, component: SingleMeetup},
    {path: '/profile', component: Profile},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup}
]
