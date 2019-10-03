<template>
<div id="app">
  <!-- THIRD PARTY -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <!-- HEADER -->
  <mainHead></mainHead>
  <br />
  <!-- BODY -->
  <body>
    <!-- Router-view is using for get all component and display all code below the code above -->
    <router-view />
  </body>
  <br />
  <!-- FOOTER -->
  <footer>
    <div class="footer" style="max-width: 100%;">
      <div class="row">
        <div class="col-xs-12 col-md-12 col-sm-12 bg-success">
          <p id="copyright">
            Togeltoto is an agent site or can also be called an online lottery dealer specifically for helping maniacs,
            communities or all members of the online lottery and also as an updated media portal for lottery gambling players to find out
            information about accurate accurate predictions and about dreams that are accurate available in the dream book on this website.
          </p>
        </div>
      </div>
    </div>
  </footer>
  <!-- COPYRIGHT -->
  <div class="copyright" style="max-width: 100%;">
    <div class="row bg-dark text-white">
      <div class="col-md-4 col-sm-12" style="float:left;">
        <p>© 2014 - All Rights with Togeltoto</p>
      </div>
      <div class="col-md-8 col-sm-12" style="float:right;">
        <ul style="touch-action: pan-y; text-align:center; max-width:100%">
          <router-link class="asize alert text-white" :to="{path :'/home'}">Home</router-link>
          <router-link class="asize alert text-white" :to="{path :'/register'}">Register</router-link>
          <router-link class="asize alert text-white" :to="{path :'/howToPlay'}">How to play</router-link>
          <router-link class="asize alert text-white" :to="{path :'/referral'}">Referral</router-link>
          <router-link class="asize alert text-white" :to="{path :'/about'}">About Us</router-link>
          <router-link class="asize alert text-white" :to="{path :'/android'}">Android</router-link>
          <router-link class="asize alert text-white" :to="{path :'/solution'}">Solution</router-link>
        </ul>
      </div>
    </div>
  </div>
  <Chat
    iconColorProp="#e6e6e6"
    messageOutColorProp="#4d9e93"
    messageInColorProp="#f1f0f0"
    :messageListProp="messageList"
    :initOpenProp="initOpen"
    @onToggleOpen="handleToggleOpen"
    @onMessageWasSent="handleMessageReceived"
  />
</div>
</template>
<script src="./controllers/App.controller.js"></script>
<style src="./css/App.vue.css"></style>
