<template>
  <header class="header">
    <nav class="inner">
      <router-link to="/"
        exact>
        <img class="logo" src="./../assets/sedaily-logo.png" alt="logo">
      </router-link>

      <router-link
        to="/jobs"
        name="jobs-nav-link">Jobs Board</router-link>

      <router-link to="/feed"
        name="feed-nav-link"
        exact
        >Feed</router-link>

      <span class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="podcastMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Podcast
        </button>
        <div
          class="dropdown-menu"
          aria-labelledby="podcastMenuButton">
          <router-link to="/new"
            class="dropdown-item"
            name="feed-nav-link"
            exact
            >New</router-link>
          <router-link to="/top"
            class="dropdown-item"
            name="feed-nav-link"
            exact
            >Top</router-link>
          <router-link to="/recommendations"
            class="dropdown-item"
            name="feed-nav-link"
            exact
            >Recommended</router-link>
        </div>
      </span>

      <span class="pull-right">
        <span v-if="isLoggedIn">
          <a href='/'
            name="logouts-nav-link"
            @click.prevent='logoutHandler'>Logout</a>
          <router-link to="/profile"
            name="top-nav-link">Profile</router-link>
        </span>
        <span v-else>
          <router-link to="/login"
            name="login-nav-link">Login</router-link>

          <router-link to="/register"
            name="register-nav-link"
            class="register-nav-link">Register</router-link>
        </span>

        <router-link v-if='alreadySubscribed'
          to="/subscribe"
          name="top-nav-link"
          class="subscribed">Subscribed</router-link>

        <router-link v-else
          to="/premium"
          name="subscribe-nav-link"
          class="call-to-action">Subscribe</router-link>
      </span>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'navigation-bar',

  computed: {
    ...mapGetters(['isLoggedIn']),
    ...mapState({
      alreadySubscribed (state) {
        if (!this.isLoggedIn) return false
        if (state.me && state.me.subscription && state.me.subscription.active) {
          return true
        } else {
          return false
        }
      }
    })
  },

  beforeMount () {
    if (this.isLoggedIn) {
      this.fetchMyProfileData()
        .then((myData) => {
        })
        .catch((error) => {
          console.log('Error loading my data', error)
        })
    }
  },

  methods: {
    ...mapActions([
      'logout',
      'fetchMyProfileData'
    ]),
    logoutHandler () {
      this.logout()
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped lang="stylus">
@import './../css/variables'

.btn-secondary
  font-size 14px
  color primary-color
  box-shadow none
  &:hover
    border-color white
    color white
    background-color primary-color
  &:focus
    box-shadow none

.show
  .btn-secondary
    &.dropdown-toggle
      border-color white
      color white
      background-color primary-color

.header
  .call-to-action
    color white
    text-decoration none
    margin-right 1em
  .register-nav-link
    margin-right 1em
  a.router-link-active
    text-decoration none
</style>
