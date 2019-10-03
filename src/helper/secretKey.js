import moment from "moment";
export default {
    key: moment(new Date()).format("YYYY-MM-DD"),
    getUser: localStorage.getItem('user_info'),
    getToken: localStorage.getItem('access_token'),
    deleteUser: localStorage.removeItem('user_info'),
    deleteToken: localStorage.removeItem('access_token'),

}