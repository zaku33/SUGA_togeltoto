import apiServices from "@/services/apiServices.js";
import CheckError from "@/helper/checkError.js";
import KEY from "../helper/secretKey";
import {
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardTitle,
    mdbCardText,
    mdbBtn
} from "mdbvue";

export default {
    name: "deposit",
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
            userId: "",
            fromBank: "",
            fromAccno: "",
            fromAccname: "",
            amount: "",
            toBank: "",
            toAccname: "",
            toAccno: "",
            notes: "",
            password: ""
        };
    },
    mounted() {
        this.getBankInfo();
    },
    methods: {
        async Deposit() {
            var service = "WapServiceBase";
            var method = "deposit";
            var secretKey = KEY.key
            var params = {
                userId: this.userId,
                fromBank: this.fromBank,
                fromAccno: this.fromAccno,
                fromAccname: this.fromAccname,
                toBank: this.toBank,
                toAccno: this.toAccno,
                toAccname: this.toAccname,
                notes: this.notes,
                amount: this.amount,
                uName: this.userId,
                password: this.password,
                token: KEY.getToken
            };
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
                alert(`${check.message}`);
            } else {
                alert(`Withdraw ${check.message}`);
            }
        },
        async getBankInfo() {
            var service = "WapServiceBase";
            var method = "getBankInfo";
            var secretKey = KEY.key
            var params = {
                uName: KEY.getUser,
                token: KEY.getToken
            };
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
                alert(`${check.message}`);
                this.$router.push({ path: "/home" });
            } else {
                this.userId = sendingData.data.data.accname;
                this.fromBank = sendingData.data.data.bank;
                this.fromAccno = sendingData.data.data.accno;
                this.fromAccname = sendingData.data.data.accname;
            }
        }
    }
};