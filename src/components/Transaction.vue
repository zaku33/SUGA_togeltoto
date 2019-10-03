<template>
  <div class="container">
    <div class="row centered-form">
      <div class="col">
        <iframe
          :src="`http://m.togeltoto.com/cocos2d_games/Report/TransListDetail.html?token=${userinfo.token}&user=${userinfo.name}&poolId=1`"
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
  name: "transaction",
  data() {
    return {
      userinfo: {
        token: KEY.getToken,
        name: KEY.getUser
      }
    };
  }
};
</script>
<style scoped src="../css/IFrame.css"></style>
