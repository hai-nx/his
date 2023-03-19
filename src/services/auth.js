function login(username, password) {
    // fetch data from api
    if (username && password) {
        return {
            username: 'tmp_USERNAME',
            firstname: 'tmp_FIRSTNAME',
            lastname: 'tmp_LASTNAME',
            token: 'tmp_TOKEN'
        };
    }
    else {
        return {}
    }

    
}

function resetPassword(email) {
    console.log(email)
}

export const authService = {
    login,
    resetPassword
}