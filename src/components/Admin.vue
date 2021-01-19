<template>
    <div class="admin_wrapper">
        <div class="current_user_wrapper">
            <span>Logged in as: </span>

            <button type="button" class="btn_red" @click.prevent="signOut">Sign out</button>
        </div>
        <NewPizza/>
        <div class="menu_wrapper">
            <h3>Menu</h3>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Remove from menu</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.id">
                    <tr>
                        <td>{{item.name}}</td>
                        <td><button type="button" class="btn_red">&times;</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="orders_wrapper">
            <h3>Current orders (5)</h3>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="order_number">
                        <th colspan="4">
                            <strong>Order number: 4</strong>
                            <button type="button" class="btn_red">&times;</button>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Margharita
                        </td>
                        <td>
                            9"
                        </td>
                        <td>quantity</td>
                        <td>price</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Login />
    </div>
</template>

<script>

import NewPizza from './NewPizza.vue';
import Login from './Login.vue';
import {firebaseAuth} from '../firebase';

export default {
    name: "admin", 
    components: {
        NewPizza,
        Login
    },
    computed:{
        getMenuItems(){
            return this.$store.state.menuItems;
        }
    },
    methods: {
        async signOut(){
            try{
                await firebaseAuth.signOut(); 
            }
            catch(error){
                alert(`Error signing out, ${error}`);
            }
        }
    },
}
</script>

<style scoped>
    .admin_wrapper{
        margin: 10px; 

    }

    .current_user_wrapper,
    .oreder_wrapper, 
    .menu_wrapper {
        margin: 10px 0; 
        padding: 10px; 
        border: solid 1 #f79e38;  
    }

    table{
        text-align: left;
        width: 70vw;
    }

    .order_number th{
        background: #ddd;
    }
    
    .order_number button {
        margin: 0 10px; 
    }
    </style>