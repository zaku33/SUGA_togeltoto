import apiServices from "@/services/apiServices.js";
import KEY from "../helper/secretKey";
import CheckError from "@/helper/checkError.js";
import { mdbCard, mdbCardTitle, mdbCardText } from "mdbvue";

export default {
    name: "app",
    data() {
        return {
            username: "",
            password: "",
            isAuthenticate: false,
            user: {}
        };
    },
    components: {
        mdbCard,
        mdbCardTitle,
        mdbCardText
    },
    mounted() {
        this.getUserInfo();
    },
    methods: {
        async logIn() {
            var service = "WapAuthService";
            var method = "login";
            var secretKey = KEY.key;
            var params = {
                uName: this.username,
                password: this.password
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
                this.isAuthenticate = true;
                this.user = sendingData.data.data.userInfo;
                localStorage.setItem("access_token", sendingData.data.data.token);
                localStorage.setItem("user_info", sendingData.data.data.userInfo.uName);
                this.$router.go({ path: "/home" });
            }
        },
        async logOut() {
            var service = "WapAuthService";
            var method = "logout";
            var secretKey = KEY.key;
            var token = KEY.getToken
            var user_info = KEY.getUser

            var params = {
                uName: user_info,
                token: token
            };
            var sendingData = await apiServices.CallAPI(
                service,
                method,
                params,
                secretKey
            );
            this.isAuthenticate = false;
            KEY.deleteUser;
            KEY.deleteToken
            this.$router.go({ path: "/home" });
        },
        async getUserInfo() {
            var service = "WsColokNaga";
            var method = "getGameInfo";
            var secretKey = KEY.key;
            var params = {
                uName: KEY.getUser,
                token: KEY.getToken,
                poolId: 2
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
                this.isAuthenticate = false;
                KEY.deleteToken;
                KEY.deleteUser;
            } else {
                this.isAuthenticate = true;
                this.user = sendingData.data.data.userInfo;
            }
        }
    }
};