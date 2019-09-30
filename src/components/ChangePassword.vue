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
                  <label for="input-none">Old password *</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    type="password"
                    v-model="oldPass"
                    aria-describedby="input-live-help input-live-feedback"
                    placeholder="Old password"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">New Password *</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    type="password"
                    v-model="newPass"
                    aria-describedby="input-live-help input-live-feedback"
                    placeholder="New Password"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Confirm New Password *</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    type="password"
                    v-model="cNewPass"
                    aria-describedby="input-live-help input-live-feedback"
                    placeholder="Confirm New Password"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="6">
                  <button
                    class="btn btn-success"
                    @click="ChangePassword()"
                  >Confirm</button>
                </b-col>
              </b-row>
            </b-container>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>
<script src="../controllers/ChangePassword.controller.js"></script>
<style scoped src="../css/ChangePassword.vue.css"></style>
