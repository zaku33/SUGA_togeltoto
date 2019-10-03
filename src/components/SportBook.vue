<template>
  <div class="container">
    <div class="row centered-form">
      <div class="col">
        <iframe
          :src="`http://154.16.244.166/sb-web-ui/faces/m8main.jsf?s=${userinfo.token}&type=mobile`"
          allowfullscreen
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import KEY from '../helper/secretKey'
export default {
  name: "sportbook",
  data() {
    return {
      userinfo: {
        token: KEY.getToken
      }
    };
  }
};
</script>
<style scoped src="../css/IFrame.css"></style>
