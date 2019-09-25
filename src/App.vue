<template>
<div id="app">
  <!-- THIRD PARTY -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
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
                    @click="login()"
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
          <div id="profile_" style="color:#fff;">
            <table style="margin-bottom:5px;">
              <tr>
                <td>
                  <p
                    style="font-size: 16px;  font-weight: bold;  padding: 5px;margin: 5px;"
                  >{{ user.uName }}</p>
                </td>
                <td align="right">
                  <a href="/refresh" style="padding:5px;">
                    <span class="glyphicon glyphicon-refresh" style="color:#ff0;"></span>
                  </a> [
                  <a href="/" style="color: #ff0">Log out</a>]
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #C79F7F;">
                <td colspan="2" align="left" style="padding-left: 8px;padding-bottom:5px;">
                  <a href="/user/change-password" style="color: #ffbd00;font-size:14px;">
                    <span class="glyphicon glyphicon-lock"></span> Change Password
                  </a>
                </td>
              </tr>
            </table>
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
            <table style="margin-top: 5px;border-collapse: inherit;border-spacing: 2px;">
              <tr style>
                <td class="ashuiv" align="center" width="50%">
                  <a href="/user/deposit" style="color: #333">Deposit</a>
                </td>
                <td class="ashuiv" align="center">
                  <a href="/user/withdraw" style="color: #333">Withdraw</a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <!-- #END l&r ------------------------------- -->

      <!-- #START menubar ******************************* -->
      <div class="row" v-if="!isAuthenticate">
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
            <b-navbar-nav style="touch-action: pan-y; text-align:center;">
              <router-link class="asize alert text-dark" :to="{path :'/home'}">
                <li class="fa fa-home">Home</li>
              </router-link>
              <router-link class="asize alert text-dark" :to="{path :'/sport'}">
                <li class="fa fa-globe">Sport</li>
              </router-link>
              <router-link class="asize alert text-dark" :to="{path :'/betList'}">
                <li class="fa fa-list">Bet list</li>
              </router-link>
              <router-link class="asize alert text-dark" :to="{path :'/transaction'}">
                <li class="fa fa-usd">Transaction</li>
              </router-link>
              <router-link class="asize alert text-dark" :to="{path :'/howToPlay'}">
                <li class="fa fa-play-circle-o">How to play</li>
              </router-link>
              <router-link class="asize alert text-dark" :to="{path :'/refferal'}">
                <li class="fa fa-list">Refferal</li>
              </router-link>
              <router-link class="asize alert text-dark" :to="{path :'/about'}">
                <li class="fa fa-ship">About Us</li>
              </router-link>
              <router-link class="asize alert text-dark" :to="{path :'/android'}">
                <li class="fa fa-android">Android</li>
              </router-link>
              <router-link class="asize alert text-dark" :to="{path :'/solution'}">
                <li class="fa fa-times">Solution</li>
              </router-link>
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
    <router-view />
  </body>
  <!-- FOOTER -->
  <footer>
    <div class="container" style="max-width: 100%;">
      <div class="row">
        <div class="container-fluid bg bg-success">
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
</div>
</template>
<script>
/* eslint-disable */
import _Login from "@/services/login.js";
import moment from "moment";
import CheckError from "@/helper/checkError.js";
import { resolve } from "url";
export default {
  name: "app",
  data() {
    return {
      username: "",
      password: "",
      isAuthenticate: false,
      user: {}
    };
  },
  methods: {
    async login() {
      var service = "WapAuthService";
      var method = "login";
      var secretKey = moment(new Date()).format("YYYY-MM-DD");
      var params = {
        uName: this.username,
        password: this.password
      };
      var sendingData = await _Login.uLogin(service, method, params, secretKey);
      var check = await CheckError.CheckingErrorCode(
        sendingData.data.errorCode
      );
      if (check.errCode != 0) {
        this.isAuthenticate = false;
        alert(`${check.message}`);
      } else {
        this.isAuthenticate = true;
        this.user = sendingData.data.data.userInfo;
        localStorage.setItem("access_token", sendingData.data.data.token);
      }
    }
  }
};
</script>
<style>
body {
  background-image: url("https://wallpaperplay.com/walls/full/8/8/a/78866.jpg#.XYRT2_nWtJs.link");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.btn-fb {
  color: #fff;
  background-color: #3b5998;
}
.btn-fb:hover {
  color: #fff;
  background-color: #496ebc;
}
.btn-tw {
  color: #fff;
  background-color: #55acee;
}
.btn-tw:hover {
  color: #fff;
  background-color: #59b5fa;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1px;
}
.asize {
  margin-top: 1%;
  color: white;
  display: inline-block;
}
.asize:hover ~ hr {
  display: inline;
  text-decoration: none;
  opacity: 0.7;
  cursor: pointer;
}
.asize:visited {
  color: red;
}
#copyright {
  color: black;
}
#navBars {
  width: 100%;
}
</style>
