<template>
    <div class="login-vue" :style="bg">
        <div class="container">
            <p class="title">汽车美护系统</p>
            <div class="input-c">
                <Input prefix="ios-contact" v-model="account" placeholder="用户名" clearable @on-blur="verifyAccount" />
                <p class="error">{{ accountError }}</p>
            </div>
            <div class="input-c">
                <Input
                    type="password"
                    v-model="pwd"
                    prefix="md-lock"
                    placeholder="密码"
                    clearable
                    @on-blur="verifyPwd"
                    @keyup.enter.native="submit"
                />
                <p class="error">{{ pwdError }}</p>
            </div>
            <Button :loading="isShowLoading" class="submit" type="primary" @click="submit">登陆</Button>
            <p class="account"><span @click="register">去注册成为会员？</span></p>
        </div>
    </div>
</template>

<script>
import { login } from "@/api";
import {mapMutations} from 'vuex'
export default {
    name: "login",
    data() {
        return {
            account: "",
            pwd: "",
            accountError: "",
            pwdError: "",
            isShowLoading: false,
            bg: {}
        };
    },
    created() {
        this.bg.backgroundImage = "url(" + require("../assets/imgs/bg0" + new Date().getDay() + ".jpg") + ")";
    },
    watch: {
        $route: {
            handler(route) {
                this.redirect = route.query && route.query.redirect;
            },
            immediate: true
        }
    },
    methods: {
        ...mapMutations(['setMenus']),
        verifyAccount() {
            if (!this.account) {
                this.accountError = "请先填写用户名";
                return false;
            }
        },
        verifyPwd() {
            if (!this.pwd) {
                this.pwdError = "请输入正确的密码";
                return false;
            }
        },
        register() {
            this.$router.push({ path: "/register" });
        },
        submit() {
            if (this.account && this.pwd) {
                this.isShowLoading = true;
                // 登陆成功 设置用户信息
                login({ username: this.account, password: this.pwd }).then(res => {
                    this.isShowLoading = false;
                    if (res.code == 200 && res.data) {
                        localStorage.setItem("userImg", "https://avatars3.githubusercontent.com/u/22117876?s=460&v=4");
                        localStorage.setItem("userName", res.data.nickName);
                        // 登陆成功 假设这里是后台返回的 token
                        localStorage.setItem("token", "i_am_token");
                        localStorage.setItem("userinfo", JSON.stringify(res.data));
                        this.$store.commit("setNickName");
                        this.$store.commit('setMenus')
                        this.$router.push({ path: this.redirect || "/" });
                    } else {
                        this.$message.error(res.msg);
                    }
                });
            }
        },
    }
};
</script>

<style>
.login-vue {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.login-vue .container {
    background: rgba(255, 255, 255, 0.5);
    width: 500px;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
}
.login-vue .ivu-input {
    background-color: transparent;
    color: #fff;
    outline: #fff;
    border-color: #fff;
}
.login-vue ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: rgba(255, 255, 255, 0.8);
}
.login-vue :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: rgba(255, 255, 255, 0.8);
}
.login-vue ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: rgba(255, 255, 255, 0.8);
}
.login-vue :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, 0.8);
}
.login-vue .title {
    font-size: 16px;
    margin-bottom: 20px;
}
.login-vue .input-c {
    margin: auto;
    width: 400px;
}
.login-vue .error {
    color: red;
    text-align: left;
    margin: 5px auto;
    font-size: 12px;
    padding-left: 30px;
    height: 20px;
}
.login-vue .submit {
    width: 400px;
}
.login-vue .account {
    display: block;
    text-align: right;
    margin-top: 30px;
}
.login-vue .account span {
    cursor: pointer;
}
.login-vue .account span:hover {
    color: #2d8cf0;
}
.login-vue .ivu-icon {
    color: #eee;
}
.login-vue .ivu-icon-ios-close-circle {
    color: #777;
}
</style>
