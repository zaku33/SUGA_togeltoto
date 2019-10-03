import KEY from "../helper/secretKey";
import DEFINE from '../helper/define';
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
            access_token: KEY.getToken,
            winersSingapore: [],
            winersLuckyDraw: [],
            winersRoulette: [],
            listPools: DEFINE.listPools,
            listLives: [],
        }
    },
    mounted() {
        this.access_token;
        this.LuckyWiners();
        this.CheckListLive();
    },
    methods: {
        async LuckyWiners() {
            var service = "WapServiceBase";
            var method = "getLuckyAndLastWiners";
            var secretKey = KEY.key
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