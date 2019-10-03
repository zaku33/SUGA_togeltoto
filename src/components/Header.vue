<template>
  <div class="header-top">
    <div class="row">
      <!-- ***************LOGO**************** -->
      <div class="col-md-3" style="float:right;">
        <div id="logo" style="max-width: 50%;">
          <a href="/" class="standard-logo">
            <img src="../assets/lg1.png" />
          </a>
        </div>
      </div>

      <!-- ***********LOGIN&REGISTER********** -->
      <!-- LOGIN FORM -->
      <div v-if="!isAuthenticate" class="col-md-9" id="notLogIn" style="float:left;">
        <form>
          <div class="padding-top">
            <div class="form-row">
              <div class="form-group col-md-4 col-sm-4 col-6">
                <input
                  type="text"
                  v-model="username"
                  id="username"
                  class="form-control form-control-sm"
                  placeholder="USER ID"
                  tabindex="1"
                />
              </div>
              <div class="form-group col-md-4 col-sm-6 col-6">
                <input
                  type="password"
                  v-model="password"
                  id="password"
                  class="form-control form-control-sm"
                  placeholder="PASSWORD"
                  tabindex="2"
                />
              </div>
              <div class="form-group col-md-4">
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
      <!-- LOGGEDIN FORM  -->
      <div v-else class="col-md-9" id="loggedIn" style="float:left;">
        <mdb-card class="card-body row">
          <mdb-card-title>
            {{user.uName }}
            <span>
              <a class="fa fa-home"></a>
            </span>
            <br />
            <a class="btn btn-outline-primary">
              <a class="fas fa-sign-out-alt" id="logout" @click="logOut()">Logout</a>
            </a>
            <span></span>
            <a class="btn btn-outline-primary">
              <router-link :to="{path :'/changePassword'}">
                <a class="fas fa-key" id="changePass">Change Password</a>
              </router-link>
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
            <router-link :to="{path :'/deposit'}">
              <a class="btn btn-info">Deposit</a>
            </router-link>
            <router-link :to="{path :'/withdraw'}">
              <a class="btn btn-info">Withdraw</a>
            </router-link>
          </div>
        </mdb-card>
      </div>
    </div>

    <!-- **************MENUBAR***************** -->
    <div class="row" v-if="!isAuthenticate">
      <b-navbar toggleable="lg" type="dark" variant="warning" id="navBars">
        <b-navbar-brand href="/"></b-navbar-brand>
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
      <b-navbar toggleable="lg" type="dark" variant="warning" id="navBars">
        <b-navbar-brand href="/"></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link class="asize alert text-dark" :to="{path :'/home'}">
                <li class="fa fa-home">Home</li>
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="asize alert text-dark" :to="{path :'/sportBook'}">
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
          <!-- Right aligned nav items -->
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<style scoped>
ul.navbar-nav {
  width:auto;
  margin: auto;
}
#navBars {
  text-align: center;
}
</style>
<script src="../controllers/Header.controller.js"></script>
