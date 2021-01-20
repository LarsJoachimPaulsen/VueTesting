<template>
    <div class="login_wrapper">
        <form>
            <div>
                <label for="email">Email address</label>
                <input type="email" id="email" placeholder="enter Email" v-model="email"/>
            </div>
            <div>
                <label for="passowrd">Password</label>
                <input type="password" id="password" placeholder="password" v-model="password">
            </div>

            <button type="button" class="btn_green" @click.prevent="signIn">Sign in</button>
        </form>
    </div>
</template>

<script>
import { store } from '../../store/store';

export default {
    name: "login", 
    date(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        signIn(){
            const user = {
                email: this.email,
                password: this.password
            }
            store.dispatch('signIn', user)
        }
    },
}
</script>