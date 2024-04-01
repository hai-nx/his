import { defineStore } from "pinia";
import router from "@/router";
import authService from "@/services/auth-service";

export const useAuth = defineStore("auth", {
  state: () => ({
    loading: false as boolean,
    user: {
      username: "" as string,
      firstname: "" as string,
      lastname: "" as string,
      fullname: "" as string,
      token: "" as string,
      refreshToken: "" as string,
      userId: "" as string,
      employeeId: "" as string,
      branchId: "" as string,
      lastWorkingBranchId: "" as string,
    },
    error: "" as string,
  }),
  /* eslint-disable */
  actions: {
    async login(username: string, password: string, remember: boolean) {
      this.loading = true;
      await authService
        .login(username, password)
        .then((response) => {
          if (response.data.isSucceeded) {
            this.error = "";
            this.user = {
              username: username,
              firstname: "",
              lastname: "",
              fullname: "",
              token: response.data.result.acceptToken,
              refreshToken: response.data.result.refreshToken,
              userId: "",
              employeeId: "",
              branchId: "",
              lastWorkingBranchId: "",
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
    logout() {
      sessionStorage.removeItem("user");
    },
    updateWorkplate(branch: string, department: string, rooms: string[]) {},
  },
  getters: {
    getUser(state) {
      if (!state.user || !state.user.username) {
        state.user = JSON.parse(sessionStorage.getItem("user") ?? "");
      }

      return state.user;
    },
    getAuthenticated(state) {
      const user = this.getUser;
      if (user && user.token) {
        return true;
      }
      return false;
    },
  },
});
