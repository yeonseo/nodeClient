<template>
  <div class="container">
    <div>
      <Nav />
      <h1 class="title">Welcome Join!!! 😁</h1>
      <form v-if="!$store.state.authUser" @submit.prevent="join">
        <p v-if="formError" class="error">
          {{ formError }}
        </p>
        <p><i>To Join, input username and password.</i></p>
        <p>Username: <input v-model="formUsername" type="text" name="username"></p>
        <p>Password: <input v-model="formPassword" type="password" name="password"></p>
        <button type="submit">
          Join
        </button>
      </form>
      <div v-else>
        Hello {{ $store.state.authUser.username }}!
        <pre>I am the secret content, I am shown only when the user is connected.</pre>
        <p><i>You can also refresh this page, you'll still be connected!</i></p>
        <button @click="logout">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async join () {
      try {
        await this.$store.dispatch('join', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

