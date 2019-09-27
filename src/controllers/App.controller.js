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
                this.isAuthenticate = false;
                alert(`${check.message}`);
            } else {
                this.isAuthenticate = true;
                this.user = sendingData.data.data.userInfo;
                localStorage.setItem("access_token", sendingData.data.data.token);
            }
        },
        async logOut() {

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
    mounted() {
        this.messageList.push({ body: `Welcome to the chat, I\'m David!`, author: 'them' })
    },
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