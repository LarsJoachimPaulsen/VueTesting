<template>
    <div class="menu_wrapper">
        <!--Menu-->

       
        <div class="menu">
            <h3>~ Authentic handmade pizza ~</h3>
            <table v-for="item in getMenuItems" :key="item.name">
                <tbody>
                    <tr>
                        <td>
                            <strong>~ {{item.name}} ~</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <small>{{item.description}}</small>
                        </td>
                    </tr>
                    <tr v-for="(option, index) in item.options" :key="index">
                        <td>
                            {{option.size}}"
                        </td>
                        <td>
                            ${{option.price}}
                        </td>
                        <td>
                            <button type="button" class="btn_green" @click="addToBasket(item, option)">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Basket -->
        <div class="basket">
            <h3>~ Basket ~</h3>
            <div v-if="basket.length>0">
                <table v-for="(item, index) in basket" :key="index">
                    <tbody>
                        <tr>
                            <td>
                                <button class="btn_green" @click="decreaseQuantity(item)">&#8722;</button>
                                <span>{{item.quantity}}</span>
                                <button class="btn_green" @click="increaseQuantity(item)">&#43;</button>
                            </td>
                            <td> {{item.name}} {{item.size}}"</td>
                            <td> ${{item.price * item.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order total: </p>
                <button class ="btn_green" @click="addNewOrder">Place Order</button>
            </div>
            <div v-else>
                <p>{{basketText}}</p> 
            </div>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    name: "menu",
    data(){
        return{
            basketText: "your basket is empty",
            basket: [],
        }
    }, 
    computed: {
        ...mapGetters([
            'getMenuItems'
        ])
    },
    methods: {
        async addToBasket(item, option){
            const pizzaExists = await this.basket.find(
                pizza => pizza.name === item.name && pizza.size === option.size
            );

            if(pizzaExists){
                pizzaExists.quantity++
                return
            }
            this.basket.push({
                name: item.name, 
                price: option.price, 
                size: option.size, 
                quantity: 1
            })
        }, 
        removeFromBasket(item){
            this.basket.splice(this.basket.indexOf(item), 1);
        },
        increaseQuantity(item){
            item.quantity++;
        }, 
        decreaseQuantity(item){
            if(item.quantity === 1){
                this.removeFromBasket(item); 
                return;
            }
            item.quantity--;
        }, 
        addNewOrder(){
            this.$store.commit('addOrder', this.basket);
            this.basket=[]; 
            this.basketText = 'Thank you! Your order has been placed'
        }
    },
}
</script>


<style scoped>
    h3{
        text-align: center;

    }

    .menu-wrapper{
        display: flex;
        flex-direction: column;
    }

    .menu, .basket{
        background: #f1e6da; 
        border-radius: 3px;
        height: 100vh;
        margin: 10px; 
        padding: 10px; 
    }



    @media screen and (min-width: 900px){
        .menu-wrapper{
            flex-direction: row;
            justify-content: space-between;
        }

        .menu{
            width: 55%;
        }

        .basket{
            width: 35%;
        }

    }
</style>