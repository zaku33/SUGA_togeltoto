<template>
  <div>
    <slider animation="fade" class="slider-image row" v-if="!access_token">
      <slider-item v-for="n in items" :key="n.id">
        <p
          style="line-height: 280px; font-size: 5rem; text-align: center; color:red"
        >{{n.first_name}}</p>
      </slider-item>
    </slider>
    <br />
    <div class="container">
      <div class="row" style="width:110%">
        <div class="col-xs-12 col-sm-12 col-md-4">
          <table style="background-color:white;width:100%">
            <tr>
              <td style="text-align:center;">
                <div class="progress-bar progress-bar-striped bg-success">Hasil Terakhir</div>
              </td>
            </tr>
            <el-carousel height="200px" direction="vertical" :autoplay="true" :interval="2000">
              <el-carousel-item v-for="x in items" :key="x.id">
                &emsp;
                <a>{{x.age}}</a>&emsp;&emsp;&emsp;&emsp;
                <span>{{x.first_name}}</span>&emsp;&emsp;&emsp;&emsp;
                <span>{{x.last_name}}</span>
              </el-carousel-item>
            </el-carousel>
          </table>
          <br />

          <div class="progress-bar progress-bar-striped bg-success">JADWAL BUKA TUTUP PASARAN</div>
          <el-table :data="listLives" stripe style="width: 100%">
            <el-table-column prop="name" label="Pasaran" fit="true"></el-table-column>
            <el-table-column prop="openTime" label="Buka" fit="true"></el-table-column>
            <el-table-column prop="closeTime" label="Tutup" fit="true"></el-table-column>
          </el-table>
          <br />

          <div class="progress-bar progress-bar-striped bg-success">KONTAK KAMI</div>
          <b-card-group deck>
            <b-card>
              <b-card-text>
                <b-container class="bv-example-row">
                  <b-row>
                    <b-col lg="6" md="6" cols="6" sm="6">
                      <a href="https://facebook.com/togeltotoofficial/" target="_blank">
                        <img src="../assets/img/kontak-new-tt-04.png" class="img-responsive" />
                      </a>
                    </b-col>
                    <b-col lg="6" md="6" cols="6" sm="6">
                      <a href="https://facebook.com/togeltotoofficial/" target="_blank">
                        <img src="../assets/img/kontak-new-tt-03.png" class="img-responsive" />
                      </a>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col lg="6" md="6" cols="6" sm="6">
                      <a href="https://facebook.com/togeltotoofficial/" target="_blank">
                        <img src="../assets/img/kontak-new-tt-05.png" class="img-responsive" />
                      </a>
                    </b-col>
                    <b-col lg="6" md="6" cols="6" sm="6">
                      <a href="https://facebook.com/togeltotoofficial/" target="_blank">
                        <img src="../assets/img/kontak-new-tt-06.png" class="img-responsive" />
                      </a>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col lg="6" md="6" cols="6" sm="6">
                      <a href="https://facebook.com/togeltotoofficial/" target="_blank">
                        <img src="../assets/img/kontak-new-tt-07.png" class="img-responsive" />
                      </a>
                    </b-col>
                    <b-col lg="6" md="6" cols="6" sm="6">
                      <a href="https://facebook.com/togeltotoofficial/" target="_blank">
                        <img src="../assets/img/livechat.png" class="img-responsive" />
                      </a>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card-text>
            </b-card>
          </b-card-group>
          <br />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8">
          <table v-if="access_token" id="tableContent">
            <tr>
              <td style="text-align:center;">
                <div class="progress-bar progress-bar-striped bg-success">POOLS</div>
              </td>
            </tr>
            <tr>CONTENT</tr>
          </table>
          <br />
          <table v-if="access_token" id="tableContent">
            <tr>
              <td style="text-align:center;">
                <div class="progress-bar progress-bar-striped bg-success">LIVE GAMES</div>
              </td>
            </tr>
            <tr>CONTENT</tr>
          </table>
          <br />

          <table id="tableContent">
            <tr>
              <td style="text-align:center;">
                <div class="progress-bar progress-bar-striped bg-success">PEMENANG LUCKYDRAW</div>
              </td>
            </tr>
            <tr>
              <el-carousel
                height="100px"
                direction="horizontal"
                :autoplay="true"
                :interval="2000"
                indicator-position="none"
              >
                <el-carousel-item v-for="x in winersLuckyDraw[0]" :key="x.id">
                  <a id="luckydrawTxtLeft">{{x.date}}</a><a id="luckydrawTxtRight">{{x.uName}}</a>
                  
                  
                </el-carousel-item>
              </el-carousel>
            </tr>
          </table>
          <br />
          <table id="tableContent">
            <tr>
              <td style="text-align:center;">
                <div
                  class="progress-bar progress-bar-striped bg-success"
                >OFFICIAL PARTNER ARENA GROUP</div>
              </td>
            </tr>
            <tr>
              <div class="row">
                <div class="col-xs-2 col-sm-2 col-md-2">
                  <img class="img-responsive" src="../assets/partners/agenliga.png" />
                  <span class="partnerlink">
                    <!--<a target="_blank" href="https://agenliga.com">-->
                    <a>AgenLiga.com</a>
                  </span>
                </div>
                <div class="col-xs-2 col-sm-2 col-md-2">
                  <img class="img-responsive" src="../assets/partners/agentaruhan.png" />
                  <span class="partnerlink">
                    <!--<a target="_blank" href="http://agentaruhan.com">-->
                    <a>AgenTaruhan.com</a>
                  </span>
                </div>
                <div class="col-xs-2 col-sm-2 col-md-2">
                  <img class="img-responsive" src="../assets/partners/areabola.png" />
                  <span class="partnerlink">
                    <!--<a target="_blank" href="http://areabola.com">-->
                    <a>AreaBola.com</a>
                  </span>
                </div>
                <div class="col-xs-2 col-sm-2 col-md-2">
                  <img class="img-responsive" src="../assets/partners/arenabetting.png" />
                  <span class="partnerlink">
                    <!--<a target="_blank" href="https://arenabetting.com">-->
                    <a>ArenaBetting.com</a>
                  </span>
                </div>
                <div class="col-xs-2 col-sm-2 col-md-2">
                  <img class="img-responsive" src="../assets/partners/livetogel.png" />
                  <span class="partnerlink">
                    <!--<a target="_blank" href="https://livetogel.com">-->
                    <a>Livetogel.com</a>
                  </span>
                </div>
                <div class="col-xs-2 col-sm-2 col-md-2">
                  <img class="img-responsive" src="../assets/partners/togeltoto.png" />
                  <span class="partnerlink">
                    <a target="_blank" href="https://togel777.com">Togeltoto.com</a>
                  </span>
                </div>
              </div>
            </tr>
          </table>
          <br />
          <table id="tableContent">
            <tr>
              <div class="progress-bar progress-bar-striped bg-success">JADWAL BANK OFFLINE</div>
            </tr>
            <br />
            <tr>
              <span class="col-xs-6 col-md-3">
                <img
                  style="width:143px;height:auto;"
                  class="img-responsive"
                  src="../assets/bank/TT_BCA.jpg"
                />
              </span>
              <span class="col-xs-6 col-md-3">
                <img
                  style="width:143px;height:auto"
                  class="img-responsive"
                  src="../assets/bank/TT_MANDIRI.jpg"
                />
              </span>
              <span class="col-xs-6 col-md-3">
                <img
                  style="width:143px;height:auto;"
                  class="img-responsive"
                  src="../assets/bank/TT_BRI.jpg"
                />
              </span>
              <span class="col-xs-6 col-md-3">
                <img
                  style="width:143px;height:auto;"
                  class="img-responsive"
                  src="../assets/bank/TT_BNI.jpg"
                />
              </span>
              <span class="col-xs-6 col-md-3">
                <img
                  style="width:143px;height:auto;"
                  class="img-responsive"
                  src="../assets/bank/TT_CIMB.jpg"
                />
              </span>
            </tr>
          </table>
          <br />
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6">
              <table id="tableContent">
                <tr>
                  <div class="progress-bar progress-bar-striped bg-success">PEMENANG SINGAPORE</div>
                </tr>
                <tr>
                  <el-carousel
                    height="100px"
                    direction="horizontal"
                    :autoplay="true"
                    :interval="3000"
                    indicator-position="none"
                  >
                    <el-carousel-item v-for="x in winersSingapore[0]" :key="x.id">
                      <h3 id="winnerName">Id : {{x.uName}}</h3>
                      <br />
                      <hr id="winnerLine" />
                      <h3 id="winnerTotal">Total :{{x.totalWin}}</h3>
                    </el-carousel-item>
                  </el-carousel>
                </tr>
              </table>
              <br />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6">
              <table id="tableContent">
                <tr>
                  <td>
                    <div class="progress-bar progress-bar-striped bg-success">PEMENANG ROULETTE</div>
                  </td>
                </tr>
                <tr>
                  <el-carousel
                    height="100px"
                    direction="horizontal"
                    :autoplay="true"
                    :interval="3000"
                    indicator-position="none"
                  >
                    <el-carousel-item v-for="x in winersRoulette[0]" :key="x.id">
                      <h3 id="winnerName">Id : {{x.uName}}</h3>
                      <br />
                      <hr id="winnerLine" />
                      <h3 id="winnerTotal">Total :{{x.totalWin}}</h3>
                    </el-carousel-item>
                  </el-carousel>
                </tr>
              </table>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../controllers/HomePage.controller.js"></script>
<style scoped src="../css/HomePage.vue.css"></style>
