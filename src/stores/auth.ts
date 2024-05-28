import { defineStore } from "pinia";
import router from "@/router";
import authService from "@/services/auth-service";
import moment from "moment"

export const useAuth = defineStore("auth", {
  state: () => ({
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
  }),
  /* eslint-disable */
  actions: {
    async loginAsync(username: string, password: string, remember: boolean) {
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
            this.user.remember = remember;

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

            // lưu tài khoản đăng nhập
            if (remember) {
              localStorage.setItem("username", username);
            } else {
              localStorage.setItem("username", "");
            }

            router.push({ name: "dashboard" });
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
    async login(username: string, password: string, remember: boolean) {
      debugger
      this.loading = true;
      await authService
        .login(username, password)
        .then((response) => {
          if (response.data.isSucceeded) {
            this.error = "";
            this.user = {
              id: "",
              username: username,
              firstname: "",
              lastname: "",
              fullname: "",
              userId: "",
              employeeId: "",
              branchId: "",
              lastWorkingBranchId: "",
              password: "",
              passwordMd5: "",
              remember: true
            };

            sessionStorage.setItem("user", JSON.stringify(this.user));

            if (remember) {
              localStorage.setItem("username", username);
            } else {
              localStorage.setItem("username", "");
            }

            router.push({ name: "dashboard" });

            // xử lý lưu tài khoản
            if (remember) console.log(remember);
          } else {
            this.error = response.data.message;
          }
        })
        .catch((error) => {
          this.error = error.message;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async reLoginAsync(username: string, password: string, remember: boolean) {
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
            this.user.remember = remember;

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

            // lưu tài khoản đăng nhập
            if (remember) {
              localStorage.setItem("username", username);
            } else {
              localStorage.setItem("username", "");
            }
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
    updateWorkplate(branch: string, department: string, rooms: string[]) { },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getAuthenticated(state) {

      //console.log(moment(new Date()).format("YYYYMMDDHHmmss"))
      //console.log(moment("20220428235959", "YYYYMMDDHHmmss").toDate())

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
  },
});
