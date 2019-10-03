import apiServices from "@/services/apiServices.js";
import KEY from "../helper/secretKey";
import CheckError from "@/helper/checkError.js";
import { mdbCardHeader, mdbCardBody, mdbCard, mdbCardTitle, mdbCardText } from "mdbvue";
// import app from './App.controller'
export default {
    name: "change-password",
    data() {
        return {
            oldPass: "",
            newPass: "",
            cNewPass: "",
        }
    },
    components: {
        mdbCard,
        mdbCardTitle,
        mdbCardText,
        mdbCardBody,
        mdbCardHeader,
    },
    methods: {
        async ChangePassword() {
            var service = "WapAuthService";
            var method = "changePassword";
            var secretKey = KEY.key
            var params = {
                uName: KEY.getUser,
                token: KEY.getToken,
                oldPass: this.oldPass,
                newPass: this.newPass,
                newPassConfirm: this.cNewPass
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
                alert(`Change password ${check.message}! Please login again!`);
                KEY.deleteUser;
                KEY.deleteToken;
                this.$router.go('/home')
            }
        }
    },
}