import { defineStore } from "pinia";
import router from "@/router";
import authService from "@/services/auth-service";
import moment from "moment"

// các thông tin dùng chung
export const useAuth = defineStore('auth', {
    state: () => {
        return {
            loading: false as boolean,
            accessToken: "" as string,
            refreshToken: "" as string,
            expireDate: 0 as number,
            user: {
                id: "" as string,
                username: "" as string,
                firstname: "" as string,
                lastname: "" as string,
                fullname: "" as string,
                userId: "" as string,
                employeeId: "" as string,
                branchId: "" as string,
                lastWorkingBranchId: "" as string,
                passwordMd5: "" as string,
                password: "" as string,
                remember: true
            },
            error: "" as string,
        }
    },
    /* eslint-disable */
    actions: {
        async login(username: string, password: string) {
            this.loading = true
            
            await authService
                .login2(username, password)
                .then(res => {
                    console.log(res)
                    var result = res.data;
                    if (result.isSucceeded) {
                        var item = result.result;
                        this.error = "";
                        this.accessToken = item.accessToken;
                        this.refreshToken = item.refreshToken;
                        this.expireDate = item.expireDate;
                        this.user.id = item.user.id;
                        this.user.username = item.user.username;
                        this.user.employeeId = item.user.employeeId;
                        this.user.branchId = item.user.branchId;
                        this.user.lastWorkingBranchId = item.user.lastWorkingBranchId;
                        this.user.passwordMd5 = item.user.password;
                        this.user.password = password;

                        // lưu thông tin người dùng
                        sessionStorage.setItem(
                            "auth",
                            JSON.stringify({
                                accessToken: this.accessToken,
                                refreshToken: this.refreshToken,
                                expireDate: this.expireDate,
                                user: this.user,
                            })
                        );

                        this.error = ""
                        router.push({ name: "dashboard" });
                    } else {
                        this.error = result.message;
                    }
                })
                .catch(err => {
                    console.log(err)
                    this.error = err.message;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        async reLogin(username: string, password: string) {
            this.loading = true;
            await authService
                .login2(username, password)
                .then((res: any) => {
                    var result = res.data;
                    if (result.isSucceeded) {
                        var item = result.result;
                        this.error = "";
                        this.accessToken = item.accessToken;
                        this.refreshToken = item.refreshToken;
                        this.expireDate = item.expireDate;
                        this.user.id = item.user.id;
                        this.user.username = item.user.username;
                        this.user.employeeId = item.user.employeeId;
                        this.user.branchId = item.user.branchId;
                        this.user.lastWorkingBranchId = item.user.lastWorkingBranchId;
                        this.user.passwordMd5 = item.user.password;
                        this.user.password = password;

                        // lưu thông tin người dùng
                        sessionStorage.setItem(
                            "auth",
                            JSON.stringify({
                                accessToken: this.accessToken,
                                refreshToken: this.refreshToken,
                                expireDate: this.expireDate,
                                user: this.user,
                            })
                        );
                        
                    } else {
                        this.error = result.message;
                    }
                })
                .catch((err: any) => {
                    this.error = err.message;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        logout() {
            sessionStorage.removeItem("auth");
        },
        forgotPassword() { },
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getAuthenticated(state) {

            const now = parseInt(moment(new Date()).format("YYYYMMDDHHmmss"));

            // nếu ko có token hoặc thời gian hết hạn token chưa tồn tại thì lấy trong session (trường hợp refresh trang sẽ mất dữ liệu trong store)
            if (state.accessToken === "" || state.expireDate === 0) {
                var auth = sessionStorage.getItem("auth");
                if (auth !== null) {
                    console.log(auth)
                    var x = JSON.parse(auth);
                    state.accessToken = x.accessToken;
                    state.refreshToken = x.refreshToken;
                    state.expireDate = x.expireDate;
                    state.user = x.user;
                }
            }

            // kiểm tra xem đã đăng nhập chưa
            if (state.accessToken !== "" && now <= state.expireDate) {
                return true;
            }

            return false;
        },
    }
})