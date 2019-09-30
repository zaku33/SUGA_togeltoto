import apiServices from "@/services/apiServices.js";
import moment from "moment";
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
            var secretKey = moment(new Date()).format("YYYY-MM-DD");
            var params = {
                uName: localStorage.getItem('user_info'),
                token: localStorage.getItem('access_token'),
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
                localStorage.removeItem('user_info');
                localStorage.removeItem('access_token');
                this.$router.go('/home')
            }
        }
    },
}