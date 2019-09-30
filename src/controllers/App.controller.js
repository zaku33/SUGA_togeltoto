/* eslint-disable */
import apiServices from "@/services/apiServices.js";
import moment from "moment";
import CheckError from "@/helper/checkError.js";
import { mdbCard, mdbCardTitle, mdbCardText } from "mdbvue";
import { Chat } from 'vue-chat-widget'
import incomingMessageSound from '../assets/sound/light.mp3' // pick an audio file for chat response

export default {
    name: "app",
    data() {
        return {
            username: "",
            password: "",
            isAuthenticate: false,
            user: {},
            messageList: [],
            initOpen: false,
            toggledOpen: false
        };
    },
    components: {
        mdbCard,
        mdbCardTitle,
        mdbCardText,
        Chat
    },
    mounted() {
        this.getUserInfo();
        this.messageList.push({ body: `Welcome to the chat, I\'m David!`, author: 'them' })
    },
    methods: {
        async logIn() {
            var service = "WapAuthService";
            var method = "login";
            var secretKey = moment(new Date()).format("YYYY-MM-DD");
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
            }
        },
        async logOut() {
            var service = "WapAuthService";
            var method = "logout";
            var secretKey = moment(new Date()).format("YYYY-MM-DD");

            var token = localStorage.getItem('access_token');
            var user_info = localStorage.getItem('user_info');
            var params = {
                uName: user_info,
                token: token
            };
            var sendingData = await apiServices.CallAPI(
                service,
                method,
                params,
                secretKey
            )
            var check = await CheckError.CheckingErrorCode(
                sendingData.data.errorCode
            );
            if (check.errCode != 0) {
                alert(`${check.message}`);
            } else {
                this.isAuthenticate = false;
                localStorage.removeItem('access_token');
                localStorage.removeItem('user_info');
            }
            this.$router.go({ path: '/home' })
        },
        async getUserInfo() {
            var service = "WsColokNaga";
            var method = "getGameInfo";
            var secretKey = moment(new Date()).format("YYYY-MM-DD");
            var params = {
                uName: localStorage.getItem('user_info'),
                token: localStorage.getItem('access_token'),
                poolId: 2
            };
            var sendingData = await apiServices.CallAPI(
                service,
                method,
                params,
                secretKey
            )
            var check = await CheckError.CheckingErrorCode(
                sendingData.data.errorCode
            );
            if (check.errCode != 0) {
                this.isAuthenticate = false
            } else {
                this.isAuthenticate = true;
                this.user = sendingData.data.data.userInfo;
            }
        },

        // Send message from you
        handleMessageReceived(message) {
            this.messageList.push(message)
        },
        // Receive message from them (handled by you with your backend)
        handleMessageResponse(message) {
            if (message.length > 0) {
                this.messageList.push({ body: message, author: 'them' })
            }
        },
        // Chat toggled open event emitted
        handleToggleOpen(open) {
            this.toggledOpen = open
                // connect/disconnect websocket or something
        },
        // Audible chat response noise, use whatever noise you want
        handleMessageResponseSound() {
            const audio = new Audio(incomingMessageSound)
            audio.addEventListener('loadeddata', () => {
                audio.play()
            })
        },
    },
    // init chat with a message
    watch: {
        messageList: function(newList) {
            const nextMessage = newList[newList.length - 1]
            const isIncoming = (nextMessage || {}).author !== 'you'
            if (isIncoming && this.toggledOpen) {
                this.handleMessageResponseSound()
            }
        }
    }
}