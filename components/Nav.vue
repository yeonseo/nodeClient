<template>
    <div class="links">
        <NuxtLink to="/" class="button--grey">Home</NuxtLink>
        <NuxtLink to="/about" class="button--grey">About</NuxtLink>
        <NuxtLink to="/join" class="button--grey">Join</NuxtLink>
        <NuxtLink to="/login/" class="button--grey">Login</NuxtLink>
    </div>
</template>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>