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

            strLength: 6,
            options: [
                "CIMB", "BCA", "MANDIRI", "BRI", "BNI"
            ],
            condition: false
        };
    },
    computed: {
        isDisabled() {
            return this.condition = (
                this.uName != '' && this.password.length >= 6 &&
                this.cPassword == this.password && this.email != '' &&
                this.accNum.length >= 8 && this.phoneNum.length >= 10 &&
                this.playerName.length != ''
            ) ? false : true;
        }
    },
    methods: {
        async Register() {
            var service = "WapServiceBase";
            var method = "createNewMember";
            var secretKey = KEY.key
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
            var registerSending = await apiServices.CallAPI(
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