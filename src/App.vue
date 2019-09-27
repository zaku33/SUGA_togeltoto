<template>
<div id="app">
  <!-- THIRD PARTY -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <!-- SCRIPT -->
  <!-- HEADER -->
  <header id="header">
    <div class="header-top" style="width:100%">
      <div class="row">
        <!-- #START logo ******************************* -->
        <div class="col-md-3" style="float:right;">
          <div id="logo" style="max-width: 50%;">
            <a href="/" class="standard-logo">
              <img :src=" 'http://bisnistoto.com/web/public/images/lg1.png' " />
            </a>
          </div>
        </div>
        <!-- #END logo ------------------------------- -->
        <!-- #START l&r  ******************************* -->
        <!-- LOGIN FORM -->
        <div v-if="!isAuthenticate" class="col-md-9" id="notLogIn" style="float:left;">
          <form>
            <div class="padding-top">
              <div class="form-row" style="justify-content: flex-end">
                <div class="form-group col-md-3 col-sm-6 col-6">
                  <input
                    type="text"
                    v-model="username"
                    id="username"
                    class="form-control form-control-sm"
                    placeholder="USER ID"
                    tabindex="1"
                  />
                </div>
                <div class="form-group col-md-3 col-sm-6 col-6">
                  <input
                    type="password"
                    v-model="password"
                    id="password"
                    class="form-control form-control-sm"
                    placeholder="PASSWORD"
                    tabindex="2"
                  />
                </div>
                <div class="form-group col-md-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-primary form-group float-xs-right"
                    title="Sign In"
                    @click="logIn()"
                  >Sign In</button>
                  <button type="button" class="btn btn-sm btn-danger form-group float-xs-right">
                    <router-link v-bind:to="{name : 'register'}">Register</router-link>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h5>Please Login to start</h5>
              <a href="http://m.togel777.com/">Server 1</a> |
              <a href="http://m.togeltoto.org/">Server 2</a>
            </div>
          </form>
        </div>
        <!-- ALREADY LOGGED IN  -->
        <div v-else class="col-md-9" id="loggedIn" style="float:left;">
          <mdb-card class="card-body row" style="margin-top: 1rem; margin-bot : 1rem">
            <mdb-card-title>
              {{user.uName}}
              <span>
                <a class="fa fa-home"></a>
              </span>
              <br />
              <a class="btn btn-outline-primary">
                <a class="fas fa-sign-out-alt" id="logout">Logout</a>
              </a>
              <span></span>
              <a class="btn btn-outline-primary">
                <a class="fas fa-key" id="changePass">Change pass</a>
              </a>
            </mdb-card-title>
            <mdb-card-text>
              <p>
                - Bet Credit:
                <b>{{ user.betCredit }}</b>
              </p>
              <p>
                - Given Credit:
                <b>{{ user.givenCredit }}</b>
              </p>
              <p>
                - Outstanding:
                <b>{{ user.outstanding }}</b>
              </p>
            </mdb-card-text>
            <div class="flex-row">
              <a class="btn btn-info">Deposit</a>
              <a class="btn btn-danger">Withdraw</a>
            </div>
          </mdb-card>
        </div>
      </div>
      <!-- #END l&r ------------------------------- -->

      <!-- #START menubar ******************************* -->
      <div class="row" v-if="!isAuthenticate">
        <b-navbar toggleable="lg" type="dark" variant="info" id="navBars">
          <b-navbar-brand href="#"></b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav style="height:30px">
            <b-navbar-nav>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/home'}">
                  <li class="fa fa-home">Home</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/register'}">
                  <li class="fa fa-info-circle">Register</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/howToPlay'}">
                  <li class="fa fa-play-circle-o">How to play</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/referral'}">
                  <li class="fa fa-list">Referral</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/about'}">
                  <li class="fa fa-ship">About Us</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/android'}">
                  <li class="fa fa-android">Android</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/solution'}">
                  <li class="fa fa-times">Solution</li>
                </router-link>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="row" v-else>
        <b-navbar toggleable="lg" type="dark" variant="info" id="navBars">
          <b-navbar-brand href="#"></b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/home'}">
                  <li class="fa fa-home">Home</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/sport'}">
                  <li class="fa fa-globe">Sport</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/betList'}">
                  <li class="fa fa-list">Bet list</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/transaction'}">
                  <li class="fa fa-usd">Transaction</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/howToPlay'}">
                  <li class="fa fa-play-circle-o">How to play</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/refferal'}">
                  <li class="fa fa-list">Refferal</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/about'}">
                  <li class="fa fa-ship">About Us</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/android'}">
                  <li class="fa fa-android">Android</li>
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="asize alert text-dark" :to="{path :'/solution'}">
                  <li class="fa fa-times">Solution</li>
                </router-link>
              </b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
          </b-collapse>
        </b-navbar>
      </div>
      <!-- #END menubar --------------------------------->
    </div>
  </header>
  <!-- BODY -->
  <body>
    <!-- Router-view is using for get all component and display all code below the code above -->
    <br>
      <router-view />
  </body>
  <br>
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
