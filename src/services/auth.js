//import axiosClient from '@/utils/axiosClient'

//import axios from "axios";

function login(username, password) {

    // console.log(process.env.VUE_APP_API_BASE_URL)
    // console.log(axiosClient)
    // const userApi = {
    //     gets: () => {
    //         const url = "/WeatherForecast";
    //         return axiosClient.get(url);
    //     }
    // }

    // var res = userApi.gets();
    // console.log(res)


    // const xxxx = axiosClient();
    // const url = "/api/Login/Authenticate";
    // var x = xxxx.get(url);
    // console.log(x)

    //axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    // this.axios
    // .get('https://localhost:7128/WeatherForecast')
    // .then(function (response) {
    //     console.log(response)
    // })
    // .catch(function(error) {
    //     console.log(error)
    // });


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