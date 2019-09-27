/* eslint-disable */
import moment from 'moment';
import { Slider, SliderItem } from 'vue-easy-slider'
import { Hooper, Slide } from 'hooper';
import apiServices from "@/services/apiServices.js";
import CheckError from "@/helper/checkError.js";

export default {
    name: 'home',
    components: {
        Slider,
        SliderItem,
        Hooper,
        Slide
    },
    data() {
        return {
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }
            ],

            winersSingapore: [],
            winersLuckyDraw: [],
            winersRoulette: [],
            listPools: [{
                    name: "Singapore",
                    route: "/singapore",
                    idx: 1,
                    type: 1,
                    enable: true,
                    openTime: "19:20:00",
                    closeTime: "17:20:00"
                },
                {
                    name: "Sydney",
                    route: "/sydney",
                    idx: 2,
                    type: 1,
                    enable: true,
                    openTime: "14:30:00",
                    closeTime: "13:00:00"
                },
                {
                    name: "Taiwan",
                    route: "/taiwan",
                    idx: 3,
                    type: 1,
                    enable: true,
                    openTime: "00:15:00",
                    closeTime: "23:15:00"
                },
                {
                    name: "Macau",
                    route: "/macau",
                    idx: 4,
                    type: 1,
                    enable: true,
                    openTime: "21:40:00",
                    closeTime: "20:40:00"
                },
                {
                    name: "Hongkong",
                    route: "/hongkong",
                    idx: 5,
                    type: 1,
                    enable: true,
                    openTime: "23:30:00",
                    closeTime: "21:30:00"
                },
                {
                    name: "Osaka",
                    route: "/osaka",
                    idx: 6,
                    type: 1,
                    enable: false,
                    openTime: "19:20:00",
                    closeTime: "17:20:00"
                },
                {
                    name: "Israel",
                    route: "/israel",
                    idx: 7,
                    type: 1,
                    enable: false,
                    openTime: "19:20:00",
                    closeTime: "17:20:00"
                },
                {
                    name: "Khmer",
                    route: "/khmer",
                    idx: 8,
                    type: 1,
                    enable: false,
                    openTime: "19:20:00",
                    closeTime: "17:20:00"
                },
                {
                    name: "Siam",
                    route: "/siam",
                    idx: 9,
                    type: 1,
                    enable: false,
                    openTime: "19:20:00",
                    closeTime: "17:20:00"
                },
                {
                    name: "Atlanta",
                    route: "/atlanta",
                    idx: 10,
                    type: 1,
                    enable: false,
                    openTime: "19:20:00",
                    closeTime: "17:20:00"
                },
                {
                    name: "Sakura",
                    route: "/sakura",
                    idx: 40,
                    type: 1,
                    enable: false,
                    openTime: "19:20:00",
                    closeTime: "17:20:00"
                },
                {
                    name: "Thailand",
                    route: "/thailand",
                    idx: 40,
                    type: 1,
                    enable: false,
                    openTime: "19:20:00",
                    closeTime: "17:20:00"
                },
                {
                    name: "Canada",
                    route: "/canada",
                    idx: 40,
                    type: 1,
                    enable: false,
                    openTime: "19:20:00",
                    closeTime: "17:20:00"
                },
                {
                    name: "Saigon",
                    route: "/saigon",
                    idx: 6,
                    type: 1,
                    enable: true,
                    openTime: "20:55:00",
                    closeTime: "19:55:00"
                },
                {
                    name: "Dallas",
                    route: "/dallas",
                    idx: 40,
                    type: 1,
                    enable: false,
                    openTime: "19:20:00",
                    closeTime: "17:20:00"
                },
                {
                    name: "Miami",
                    route: "/miami",
                    idx: 40,
                    type: 1,
                    enable: false,
                    openTime: "19:20:00",
                    closeTime: "17:20:00"
                },
                {
                    name: "Sg45toto",
                    route: "/sg45toto",
                    idx: 7,
                    type: 1,
                    enable: true,
                    openTime: "19:20:00",
                    closeTime: "17:20:00"
                },
                {
                    name: "Lugano",
                    route: "/lugano",
                    idx: 8,
                    type: 1,
                    enable: true,
                    openTime: "01:00:00",
                    closeTime: "00:00:00"
                },
                {
                    name: "Bullseye",
                    route: "/bullseye",
                    idx: 10,
                    type: 1,
                    enable: true,
                    openTime: "13:15:00",
                    closeTime: "12:45:00"
                },
                {
                    name: "Magnum",
                    route: "/magnum",
                    idx: 9,
                    type: 1,
                    enable: true,
                    openTime: "18:45:00",
                    closeTime: "18:10:00"
                },
                {
                    name: "Koprok",
                    route: "/koprok",
                    idx: 100,
                    type: 2,
                    enable: true,
                    openTime: "19:20:00",
                    closeTime: "17:20:00",
                    key: 'Koprok'
                },
                {
                    name: "Live 50D",
                    route: "/live50d",
                    idx: 200,
                    type: 2,
                    enable: true,
                    openTime: "19:20:00",
                    closeTime: "17:20:00",
                    key: '50d'
                },
                {
                    name: "Live 24D",
                    route: "/live24d",
                    idx: 200,
                    type: 2,
                    enable: true,
                    openTime: "19:20:00",
                    closeTime: "17:20:00",
                    key: '24d'
                },
                {
                    name: "Live 12D",
                    route: "/live12d",
                    idx: 200,
                    type: 2,
                    enable: false,
                    openTime: "19:20:00",
                    closeTime: "17:20:00",
                    key: '12d'
                },
                {
                    name: "Bola Gelinding",
                    route: "/bola",
                    idx: 200,
                    type: 2,
                    enable: true,
                    openTime: "19:20:00",
                    closeTime: "17:20:00",
                    key: 'Bola'
                },
                {
                    name: "DragonTiger",
                    route: "/dragon",
                    idx: 200,
                    type: 2,
                    enable: true,
                    openTime: "19:20:00",
                    closeTime: "17:20:00",
                    key: 'Dragon'
                },
                {
                    name: "Sicbo Bola",
                    route: "/bola",
                    idx: 200,
                    type: 2,
                    enable: false,
                    openTime: "19:20:00",
                    closeTime: "17:20:00",
                    key: 'SicboDice'
                },
                {
                    name: "Roulette",
                    route: "/roullete",
                    idx: 200,
                    type: 2,
                    enable: true,
                    openTime: "19:20:00",
                    closeTime: "17:20:00",
                    key: 'Roulette'
                },
                {
                    name: "Sicbo Dice",
                    route: "/sicbo",
                    idx: 200,
                    type: 2,
                    enable: true,
                    openTime: "19:20:00",
                    closeTime: "17:20:00",
                    key: 'SicboDice'
                },
                {
                    name: "Merah Putih",
                    route: "/merah",
                    idx: 200,
                    type: 2,
                    enable: true,
                    openTime: "19:20:00",
                    closeTime: "17:20:00",
                    key: 'Sedie'
                }
            ],
            listLives: [],
        }
    },
    mounted() {
        this.LuckyWiners();
        this.CheckListLive();
    },
    methods: {
        async LuckyWiners() {
            var service = "WapServiceBase";
            var method = "getLuckyAndLastWiners";
            var secretKey = moment(new Date()).format("YYYY-MM-DD");
            var params = {};
            var sendingData = await apiServices.CallAPI(
                service,
                method,
                params,
                secretKey
            );
            var check = await CheckError.CheckingErrorCode(
                sendingData.data.errorCode
            );
            if (check.errCode != 0) {
                alert(`Error`)
            } else {
                this.winersSingapore.push(sendingData.data.data.winersSingapore)
                this.winersLuckyDraw.push(sendingData.data.data.winersLuckyDraw)
                this.winersRoulette.push(sendingData.data.data.winersRoulette)
            }
        },
        async CheckListLive() {
            for (var i = 0; i < this.listPools.length; i++) {
                if (this.listPools[i].enable && this.listPools[i].type == 1) {
                    this.listLives.push({
                        name: this.listPools[i].name,
                        route: this.listPools[i].route,
                        idx: this.listPools[i].idx,
                        type: this.listPools[i].type,
                        enable: this.listPools[i].enable,
                        openTime: this.listPools[i].openTime,
                        closeTime: this.listPools[i].closeTime,
                        key: this.listPools[i].key
                    })
                }
            }
        }
    }
}