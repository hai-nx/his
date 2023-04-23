import axiosClient from '@/utils/axiosClient'
import security from '../utils/security';


const authService = {
    login(username, password) {
        const url = "api/Login/Authenticate";
        const obj = {
            UserName: username,
            Password: security.encodeMd5(password),
            RememberMe: false
        };
    
        return axiosClient.post(url, obj);
    },
    resetPassword(email) {
        console.log(email)
    }
}

export default authService