<template>
  <div class="container">
    <div class="row centered-form">
      <div class="col-xs-12 col-md-12 col-sm-12">
        <mdb-card>
          <mdb-card-header color="rgb(84, 88, 14)">DEPOSIT (SIMPAN DANA)</mdb-card-header>
          <mdb-card-body style="background-color:rgb(167, 176, 0)">
            <b-container fluid>
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">User ID (userId)</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    v-model="userId"
                    :disabled="true"
                    aria-describedby="input-live-help input-live-feedback"
                    :placeholder="userId"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>

              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Nama Bank Penerima (fromBank)</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    :disabled="true"
                    v-model="fromBank"
                    aria-describedby="input-live-help input-live-feedback"
                    :placeholder="fromBank"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>

              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">No Rekening (fromAccno)</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    v-model="fromAccno"
                    aria-describedby="input-live-help input-live-feedback"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>

              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Nama Pemilik Rekening (fromAccname)</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    :disabled="true"
                    v-model="fromAccname"
                    aria-describedby="input-live-help input-live-feedback"
                    :placeholder="fromAccname"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>

              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Jumlah Deposit Rp (amount)</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    v-model="amount"
                    aria-describedby="input-live-help input-live-feedback"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>

              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Kirim Ke Bank (toBank)</label>
                </b-col>
                <b-col sm="8">
                  <b-form-select
                    v-model="selected"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                  ></b-form-select>
                </b-col>
                <br />
                <b-col sm="4">
                  <label for="input-none">Nama Rekening Deposit (toAccname)</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    :v-if="selected"
                    name="input-live"
                    :disabled="true"
                    v-model="selected.toAccname"
                    aria-describedby="input-live-help input-live-feedback"
                    :placeholder="selected.toAccname"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">No Rekening Deposit (toAccno)</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input
                    name="input-live"
                    :disabled="true"
                    v-model="selected.toAccno"
                    aria-describedby="input-live-help input-live-feedback"
                    :placeholder="selected.toAccno"
                    trim
                    required
                  ></b-form-input>
                </b-col>
              </b-row>

              <b-row class="form-group">
                <b-col sm="4">
                  <label for="input-none">Catatan (notes)</label>
                </b-col>
                <b-col sm="8">
                  <b-form-textarea
                    name="input-live"
                    v-model="notes"
                    aria-describedby="input-live-help input-live-feedback"
                    trim
                    required
                  ></b-form-textarea>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="6">
                  <router-link :to="{path :'/home'}">
                    <a class="btn btn-danger col-md-12">Back</a>
                  </router-link>
                </b-col>
                <b-col sm="6">
                  <button
                    id="registerBtn"
                    class="btn btn-success col-md-12"
                    @click.prevent="Deposit()"
                  >Deposit</button>
                </b-col>
              </b-row>
            </b-container>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>
<script src="../controllers/Deposit.controller.js"></script>
