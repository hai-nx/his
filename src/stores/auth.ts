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
        workplace: {
            branch: '' as string,
            department: '' as string,
            rooms: [] as string[]
        },
        error: '' as string
    }),
    actions: {
        async login(username: string, password: string, remember: boolean) {
            this.loading = true;
            await authService.login(username, password)
                .then(response => {
                    console.log(response.data)
                    if (response.data.isSucceeded) {
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

                        console.log('pust' + this.isAuthenticated)

                        router.push({ name: 'workplace-option' });

                        // xử lý lưu tài khoản
                        if (remember)
                            console.log(remember)
                    } else {
                        this.error = response.data.message
                    }
                })
                .catch(error => {
                    this.error = error.message;
                })
                .finally(() => {
                    this.loading = false;
                })
        },
        logout() {
            this.isAuthenticated = false;
        },
        updateWorkplate(branch: string, department: string, rooms: string[]) {
            this.workplace = {
                branch: branch,
                department: department,
                rooms: rooms
            }
        }
    },
    getters: {
        getAuthenticated: (state) => state.isAuthenticated,
        getUser: (state) => state.user,
        getWorkplace: (state) => state.workplace
    },
})