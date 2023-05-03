import request from '@/utils/request'
import security from '@/utils/security'

const authService = {
    login(username: string, password: string) {
        const url = "api/Login/Authenticate";
        const data = {
            UserName: username,
            Password: security.encodeMd5(password),
            RememberMe: false
        };
    
        return request.post(url, data);
    }
}

export default authService