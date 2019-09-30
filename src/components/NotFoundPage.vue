<template>
  <div>
    <h1 style="color:red">404 NOT FOUND!</h1>
    <h3>The request to this url was not found on this server</h3>
    <router-link :to="{path :'/home'}">
        <h2 style="color:blue">Back to HomePage</h2>
    </router-link>
  </div>
</template>
