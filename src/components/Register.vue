/* eslint-disable */
<template>
  <div class="container">
    <div class="row centered-form">
      <div class="col-xs-12 col-md-12 col-sm-12">
        <mdb-card>
          <mdb-card-header
            color="deep-orange lighten-1"
          >Please fill in the form below to register to TogelToto.com for free</mdb-card-header>
          <mdb-card-body style="background-color:green">
            <b-container fluid>
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Username *</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    v-model="uName"
                    :state="(uName.length>=strLength?true:false)"
                    aria-describedby="input-live-help input-live-feedback"
                    placeholder="Enter your name"
                    trim
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback
                    id="input-live-feedback"
                  >Enter at least {{strLength}} letters</b-form-invalid-feedback>
                  <b-form-text id="input-live-help"></b-form-text>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Password *</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    type="password"
                    v-model="password"
                    aria-describedby="input-live-help input-live-feedback"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Confirm Password *</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    type="password"
                    v-model="cPassword"
                    :state="(cPassword == password && cPassword!=0)?true:false"
                    aria-describedby="input-live-help input-live-feedback"
                    trim
                    required
                  ></b-form-input>
                  <b-form-invalid-feedback id="input-live-feedback">Password not match!</b-form-invalid-feedback>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Email *</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    type="email"
                    v-model="email"
                    aria-describedby="input-live-help input-live-feedback"
                    placeholder="Enter your email"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Your Refferal *</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    v-model="refferalId"
                    :disabled="true"
                    aria-describedby="input-live-help input-live-feedback"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <hr />
              <br />
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Banking Name *</label>
                </b-col>
                <b-col sm="8">
                  <b-form-select v-model="bankName" :options="options" class="mb-3" required>
                    <!-- This slot appears above the options from 'options' prop -->
                    <template v-slot:first>
                      <option :value="''" disabled>-- Please select bank --</option>
                    </template>
                  </b-form-select>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Banking Number *</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    type="number"
                    v-model="accNum"
                    aria-describedby="input-live-help input-live-feedback"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Player Name *</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    v-model="playerName"
                    aria-describedby="input-live-help input-live-feedback"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Phone Number *</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    type="number"
                    v-model="phoneNum"
                    aria-describedby="input-live-help input-live-feedback"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="6">
                  <button
                    class="btn btn-success"
                    @click.prevent="Register()"
                    :disabled="isDisabled"
                  >Register</button>
                </b-col>
                <b-col sm="6">
                  <button class="btn btn-danger" @click="$router.go(-1)">Back</button>
                </b-col>
              </b-row>
            </b-container>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>
<script src="../controllers/Register.controller.js"></script>
<style scoped src="../css/Register.vue.css"></style>
