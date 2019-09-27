/* eslint-disable */
export default {
    CheckingErrorCode(e) {
        var respond = {
            message: '',
            errCode: null
        }
        switch (e) {
            case (0):
                {
                    respond = {
                        message: 'Success!',
                        errCode: 0
                    }
                    return respond;
                };
            case (-12):
                {
                    respond = {
                        message: 'Username or Password wrong!',
                        errCode: -12
                    }
                    return respond;
                };
            case (-17):
                {
                    respond = {
                        message: 'Invalid Input!',
                        errCode: -17
                    }
                    return respond;
                };
            case (-23):
                {
                    respond = {
                        message: 'Invalid captcha!',
                        errCode: -23
                    }
                    return respond;
                };
            case (-24):
                {
                    respond = {
                        message: 'Invalid username length!',
                        errCode: -24
                    }
                    return respond;
                };
            case (-25):
                {
                    respond = {
                        message: 'Invalid password length!',
                        errCode: -25
                    }
                    return respond;
                };
            case (-26):
                {
                    respond = {
                        message: 'Username has already existed!',
                        errCode: -26
                    }
                    return respond;
                };
            case (-27):
                {
                    respond = {
                        message: 'Email has already existed!',
                        errCode: -27
                    }
                    return respond;
                }
            case (-28):
                {
                    respond = {
                        message: 'No.Bank has already existed!',
                        errCode: -28
                    }
                    return respond;
                }
            case (-30):
                {
                    respond = {
                        message: 'User Id must be lowercase!',
                        errCode: -30
                    }
                    return respond;
                }
            case (-1000):
                {
                    respond = {
                        message: 'Invalid username or password!',
                        errCode: -1000
                    }
                    return respond;
                }
            default:
                {
                    respond = {
                        message: 'Internal Error!',
                        errCode: 500
                    }
                    return respond;
                }
        }
    }
}