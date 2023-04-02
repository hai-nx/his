import axiosClient from '@/utils/axiosClient'
import security from '../utils/security';

const authApi = {
    authenticate: (username, password, rememberMe) => {
        const url = "api/Login/Authenticate";
        const obj = {
            UserName: username,
            Password: security.encodeMd5(password),
            RememberMe: rememberMe
        };

        return axiosClient.post(url, obj);
    }
}
export default authApi;