import { defineStore } from 'pinia'
import router from '@/router'
import authService from '@/services/auth-service'

export const useAuth = defineStore('auth', {
    state: () => ({
        loading: false as boolean,
        isAuthenticated: false as boolean,
        user: {
            username: '' as string,
            firstname: '' as string,
            lastname: '' as string,
            fullname: '' as string,
            token: '' as string,
            refreshToken: '' as string
        },
        error: '' as string
    }),
    actions: {
        async login(username: string, password: string, remember: boolean) {
            this.loading = true;
            console.log('loadfing')
            await authService.login(username, password)
                .then(response => {
                    if (response.data.isSuccessed) {
                        this.error = '';
                        this.isAuthenticated = true;
                        this.user = {
                            username: username,
                            firstname: '',
                            lastname: '',
                            fullname: '',
                            token: '',
                            refreshToken: ''
                        }
                        console.log(response)
                        router.push({ name: 'workplace' });

                        // xử lý lưu tài khoản
                        if (remember)
                            console.log(remember)
                    } else {
                        this.error = response.data.message
                        console.log('aaaa')
                    }
                })
                .catch(error => {
                    console.log('error')
                    this.error = error.message;
                })
                .finally(() => {
                    this.loading = false;
                })
        },
        logout() {
            this.isAuthenticated = false;
        }
    },
    getters: {
        getAuthenticated: (state) => state.isAuthenticated,
        getUser: (state) => state.user
    },
})