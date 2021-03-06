import Vue from 'vue'
import Router from 'vue-router'
import TopListView from '@/views/TopListView'
import NewListView from '@/views/NewListView'
import PostDetailsView from '@/views/PostDetailsView'
import LoginView from '@/views/LoginView'
import SubscribeView from '@/views/SubscribeView.vue'
import RegisterView from '@/views/RegisterView'
import RecomendationListView from '@/views/RecomendationListView'
import EditProfile from '@/views/EditProfileView'
import FeedView from '@/views/FeedView'
import ProfileView from '@/views/ProfileView'
import ForgotPassword from '@/views/ForgotPassword'
import RegainAccount from '@/views/RegainAccount'
import PremiumChoices from '@/views/PremiumChoices'
import JobsBoardView from '@/views/JobsBoardView'
import JobView from '@/views/JobView'
import AddJobView from '@/views/AddJobView'
import EditJobView from '@/views/EditJobView'
import { apiConfig } from '../../config/apiConfig'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewListView',
      component: NewListView
    },
    { path: '/regain-account/:secretKey/:resetUID', component: RegainAccount },
    { path: '/top/:page(\\d+)?', component: TopListView },
    { path: '/new/:page(\\d+)?', component: NewListView },
    { path: '/recommendations/:page(\\d+)?', component: RecomendationListView },
    { path: '/feed', component: FeedView },
    { path: '/post/:id([A-Za-z0-9-_]+)?/:postTitle([A-Za-z0-9-_]+)?', component: PostDetailsView },
    { path: '/subscribe', component: SubscribeView, props: { stripePublicKey: apiConfig.STRIPE_PUBLIC_KEY }},
    { path: '/premium', component: PremiumChoices },
    { path: '/login', component: LoginView },
    { path: '/edit-profile', component: EditProfile },
    { path: '/register', component: RegisterView },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/profile', component: ProfileView },
    { path: '/jobs', component: JobsBoardView },
    { path: '/jobs/:id([A-Za-z0-9-_]+)?', component: JobView },
    { path: '/add-job', component: AddJobView },
    { path: '/edit-job/:id([A-Za-z0-9-_]+)?', component: EditJobView }
  ]
})
