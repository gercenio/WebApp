const API_LOGIN_URL = process.env.API_URL + '/Authetication'

import net from '../util/net';
import axios from 'axios';

export default {
    data: {
        authenticated: false
    },
    apiauth(){
       var data = {
            "UserCode":process.env.API_CODE,
            "AccessKey":process.env.API_KEY
       };
       axios.post(API_LOGIN_URL,data).then(response => {
            this.setbasetoken(response.data.accessToken);
            this.authenticated = true
       }).catch(error => {
        console.log(error)
        this.errored = true
        this.authenticated = true
        this.$router.push('home')
      })
      .finally(() => this.loading = false);
    },
    setbasetoken(token){
        localStorage.setItem('token', token);
    },
    login(context, info) {
        net.postJson('/user/login', info, function (token) {
            localStorage.setItem('token', token);
            this.$router.push('home');
        })
        context.$http.post(LOGIN_URL, info).then(function (data) {
            console.log(data)
            var re = data.body;
            console.log(re.ok);
            if (re.ok) {
                localStorage.setItem('token', re.data);
                this.authenticated = true
                this.$router.push('home')
            } else {
                console.log(re)
            }
        }, function (err) {
            console.log(err + "," + err.body.message)
            context.error = err.body.message
        })
    },
    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    },
    checkAuth(context) {
        var token = localStorage.getItem('token')
        if (token) {
            this.authenticated = true
        } else {
            this.apiauth()
        }
    }
}