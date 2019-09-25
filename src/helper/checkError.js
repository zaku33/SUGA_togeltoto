/* eslint-disable */
export default {
    CheckingErrorCode(e) {
        var respond = {
            message: '',
            errCode: null
        }
        switch (e) {
            case (0): {
                respond = {
                    message: 'Register Successful!',
                    errCode: 0
                }
                // alert("Register Successful!");
                return respond;
            };
            case (-12): {
                respond = {
                    message: 'Username or Password wrong!',
                    errCode: -12
                }
                // alert("Invalid Input!");
                return respond;
            };
            case (-17): {
                respond = {
                    message: 'Invalid Input!',
                    errCode: -17
                }
                // alert("Invalid Input!");
                return respond;
            };
            case (-23): {
                respond = {
                    message: 'Invalid captcha!',
                    errCode: -23
                }
                // alert("Invalid captcha!");
                return respond;
            };
            case (-24): {
                respond = {
                    message: 'Invalid username length!',
                    errCode: -24
                }
                // alert("Invalid username length!");
                return respond;
            };
            case (-25): {
                respond = {
                    message: 'Invalid password length!',
                    errCode: -25
                }
                // alert("Invalid password length!");
                return respond;
            };
            case (-26): {
                respond = {
                    message: 'Username has already existed!',
                    errCode: -26
                }
                // alert("Username has already existed!");
                return respond;
            };
            case (-27): {
                respond = {
                    message: 'Email has already existed!',
                    errCode: -27
                }
                // alert("Email has already existed!");
                return respond;
            }
            case (-28): {
                respond = {
                    message: 'No.Bank has already existed!',
                    errCode: -28
                }
                // alert("No.Bank has already existed!");
                return respond;
            }
            case (-30): {
                respond = {
                    message: 'User Id must be lowercase!',
                    errCode: -30
                }
                // alert("User Id must be lowercase");
                return respond;
            }
            case (-1000): {
                respond = {
                    message: 'Invalid username or password!',
                    errCode: -1000
                }
                // alert("User Id must be lowercase");
                return respond;
            }
            default: {
                respond = {
                    message: 'Internal Error!',
                    errCode: 500
                }
                // alert("Internal Error!");
                return respond;
            }
        }
    }
}