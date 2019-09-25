<template>
<!-- eslint-disable -->
    <div>
        <!-- <script src="../node_modules/swiper/css/swiper.min.css"></script>
        <script src="../node_modules/swiper/js/swiper.min.js"></script> -->
        <!-- SLIDER OK -->
        <slider animation="fade" class ="slider-image row">
            <slider-item v-for="n in items" :key="n.id">
                <p style="line-height: 280px; font-size: 5rem; text-align: center; color:red">{{n.first_name}}</p>
            </slider-item>
        </slider>
        <!-- END SLIDER -->
        
        <div class="row">
            <div class="col-md-4">
                <table style="background-color:white;width:100%">
                    <tr>
                        <td style="float:left;background-color:yellow;max-width: 100%;">Schedule</td>
                        <td style="float:right;background-color:red;max-width: 100%;">
                            <button class="fa fa-angle-up"/>
                            <button class="fa fa-angle-down"/>
                        </td>
                    </tr>
                    <tr>
                        <div style="max-height:100px;background-color:green">
                            <hooper :vertical="true" style="max-height:100px" :itemsToShow="1" :itemsToSlide="3" :centerMode="true" :autoPlay="true" :playSpeed="1000" :hoverPause="false">
                                <slide v-for="x in items" :key="x.id"><a>{{x.age}}</a>&emsp;&emsp;<span>{{x.first_name}}</span></slide>
                            </hooper>
                        </div>
                    </tr>
                </table>
            </div>
            <div class="col-md-8">
                            <table style="background-color:red;width:100%">
                    <tr>
                        <td style="float:left;background-color:yellow;max-width: 100%;">Schedule</td>
                        <td style="float:right;background-color:red;max-width: 100%;">
                            <button class="fa fa-angle-up"/>
                            <button class="fa fa-angle-down"/>
                        </td>
                        <template>
                            <div>
                                <b-table striped hover :items="items">
                                    <colgroup><col><col></colgroup>
                                    <colgroup><col><col><col></colgroup>
                                    <colgroup><col><col></colgroup>
                                </b-table>
                            </div>
                        </template>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import moment from 'moment';
import { Slider, SliderItem } from 'vue-easy-slider'
import { Hooper, Slide } from 'hooper';

export default {
    name: 'home',
    components: {
        Slider,
        SliderItem,
        Hooper,
        Slide
    },
    data(){
        return{
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }
            ]
        }
    },
    methods:{

    }
}
</script>
<style scoped>
.slider-image{
    background-image: url("https://c.wallhere.com/photos/63/91/1230x768_px_clouds_Colorful_forest_lake_landscape_mountain_nature-697398.jpg!d");
    background-size: cover;
    background-repeat: no-repeat;
}
</style>