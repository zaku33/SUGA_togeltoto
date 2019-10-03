<template>
  <div style="text-align:center">
    <div><h1 style="color:red;">404 PAGE NOT FOUND!</h1></div>
      <div><h3 style="color:white">The request to <strong style="color:red">{{currentRouteName}}</strong> cannot found on this server</h3></div>
      <div><router-link :to="{path :'/home'}">
        <h2 style="color:greenyellow">Back to Home Page</h2>
      </router-link></div>
  </div>
</template>
<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.path;
    }
  }
};
</script>
