/* eslint-disable */
<template>
  <div class="row" style="text-align: center">
    <mdb-card style="width:100%">
      <mdb-card-header
        color="deep-orange lighten-1"
      >Please fill in the form below to register to TogelToto.com for free</mdb-card-header>
      <mdb-card-body style="background-color:green">
        <b-container fluid>
          <b-row class="form-group">
            <b-col sm="4">
              <label for="input-none">Username :</label>
            </b-col>
            <b-col sm="8">
              <b-form-input
                name="input-live"
                v-model="uName"
                :state="(uName.length>=strLength?true:false)"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Enter your name"
                trim
              ></b-form-input>
              <b-form-invalid-feedback
                id="input-live-feedback"
              >Enter at least {{strLength}} letters</b-form-invalid-feedback>
              <b-form-text id="input-live-help"></b-form-text>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col sm="4">
              <label for="input-none">Password :</label>
            </b-col>
            <b-col sm="8">
              <b-form-input
                name="input-live"
                type="password"
                v-model="password"
                aria-describedby="input-live-help input-live-feedback"
                trim
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col sm="4">
              <label for="input-none">Confirm Password :</label>
            </b-col>
            <b-col sm="8">
              <b-form-input
                name="input-live"
                type="password"
                v-model="cPassword"
                :state="(cPassword == password)?true:false"
                aria-describedby="input-live-help input-live-feedback"
                trim
              ></b-form-input>
              <b-form-invalid-feedback
                id="input-live-feedback"
              >Password not match!</b-form-invalid-feedback>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col sm="4">
              <label for="input-none">Email :</label>
            </b-col>
            <b-col sm="8">
              <b-form-input
                name="input-live"
                type="email"
                v-model="email"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Enter your email"
                trim
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col sm="4">
              <label for="input-none">Your Refferal :</label>
            </b-col>
            <b-col sm="8">
              <b-form-input
                name="input-live"
                v-model="refferalId"
                aria-describedby="input-live-help input-live-feedback"
                trim
              ></b-form-input>
            </b-col>
          </b-row>
          <hr />
          <b-row class="form-group">
            <b-col sm="4">
              <label for="input-none">Banking Name :</label>
            </b-col>
            <b-col sm="8">
              <b-form-input
                name="input-live"
                v-model="bankName"
                aria-describedby="input-live-help input-live-feedback"
                trim
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col sm="4">
              <label for="input-none">Banking Number :</label>
            </b-col>
            <b-col sm="8">
              <b-form-input
                name="input-live"
                type="number"
                v-model="accNum"
                aria-describedby="input-live-help input-live-feedback"
                trim
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col sm="4">
              <label for="input-none">Player Name :</label>
            </b-col>
            <b-col sm="8">
              <b-form-input
                name="input-live"
                v-model="playerName"
                aria-describedby="input-live-help input-live-feedback"
                trim
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col sm="4">
              <label for="input-none">Phone Number :</label>
            </b-col>
            <b-col sm="8">
              <b-form-input
                name="input-live"
                type="number"
                v-model="phoneNum"
                aria-describedby="input-live-help input-live-feedback"
                trim
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col sm="6">
              <button class="btn btn-success" @click.prevent="Register()">Register</button>
            </b-col>
            <b-col sm="6">
              <button class="btn btn-danger" @click="$router.go(-1)">Cancel</button>
            </b-col>
          </b-row>
        </b-container>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>
<script>
/* eslint-disable */
import RegisterServices from "@/services/register.js";
import CheckError from "@/helper/checkError.js";
import moment from "moment";
import {
  mdbCard,
  mdbCardBody,
  mdbCardHeader,
  mdbCardTitle,
  mdbCardText,
  mdbBtn
} from "mdbvue";

export default {
  name: "register",
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardTitle,
    mdbCardText,
    mdbBtn
  },
  data() {
    return {
      uName: "",
      password: "",
      cPassword: "",
      email: "",
      refferalId: "A",
      bankName: "",
      playerName: "",
      accNum: 0,
      phoneNum: 0,
      toastMess: "",
      checking: "",

      strLength: 6
    };
  },
  // computed: {

  //   LengthState() {
  //     return this.uName.length>2 ?true:false
  //   }
  // },
  methods: {
    async Register() {
      var service = "WapServiceBase";
      var method = "createNewMember";
      var secretKey = moment(new Date()).format("YYYY-MM-DD");
      var params = {
        uName: this.uName,
        playerName: this.playerName,
        email: this.email,
        password: this.password,
        confirmPassword: this.cPassword,
        nameBank: this.bankName,
        noAccBank: Number(this.accNum),
        noHandPhone: Number(this.phoneNum),
        referalId: this.refferalId
      };
      var registerSending = await RegisterServices._Register(
        service,
        method,
        params,
        secretKey
      );
      // CheckError.CheckingErrorCode(registerSending.data.errorCode);
      var check = await CheckError.CheckingErrorCode(
        registerSending.data.errorCode
      );
      if (check.errCode == 0) {
        this.checking = check.message;
        this.toastMess = `<b-button variant="success" ${this.makeToast(
          "success"
        )} class="mb-2">${check.message}</b-button>`;
      } else {
        this.checking = check.message;
        this.toastMess = `<b-button variant="success" ${this.makeToast(
          "danger"
        )} class="mb-2">${check.message}</b-button>`;
      }
    },
    makeToast(variant = null) {
      this.$bvToast.toast(this.checking, {
        title: `Notification`,
        variant: variant,
        solid: true
      });
    }
  }
};
</script>
<style scoped>
/* eslint-disable */
label {
  margin: auto;
  padding-right: 10px;
  width: auto;
  color: blue;
  text-align: right;
  font-size: 150%;
}
.btn {
  width: auto;
}
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 1px;
}
#lb {
  color: red;
}
#BodyInner {
  max-width: 100%;
  margin: 0 auto;
  border-radius: 25px;
  border: 1px solid black;
}
input[name="inout"] {
  border-radius: 5px;
  border: 1px solid black;
}
hr{
  height: 1px;
  width: 100%;
  margin: 0;
  background: white;
  border: none;
  /* transition: .3s ease-in-out; */
}
</style>
