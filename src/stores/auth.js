import { defineStore } from 'pinia'
import { authService } from '@/services/auth'

export const useAuth = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: {
            username: '',
            firstname: '',
            lastname: '',
            fullname: '',
            token: ''
        }
    }),
    getters: {
        getAuthenticated: (state) => state.isAuthenticated,
        getUser: (state) => state.user
    },
    actions: {
        login(payload) {

            var res = authService.login(payload.username, payload.password);
            if (res) {
                this.isAuthenticated = true;
                this.user.username = res.username;
                this.user.firstname = res.firstname;
                this.user.lastname = res.lastname;
                this.user.fullname = res.lastname + ' ' + res.firstname;
                this.user.token = res.token;
            }
        },
        logout() {
            this.isAuthenticated = false;
            this.user = {
                username: '',
                firstname: '',
                lastname: '',
                fullname: '',
                token: ''
            };
        },
        resetPassword(payload) {
            authService.resetPassword(payload);
        }
    }
});