<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxtClientTest
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Doc
        </a>
        <NuxtLink to="/about" class="button--grey">About</NuxtLink>
        <NuxtLink to="/join" class="button--grey">Join</NuxtLink>
        <NuxtLink to="/login/" class="button--grey">Login</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

