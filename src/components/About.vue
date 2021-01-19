<template>
    <div>
        <h3>~ Click on the links below for more info ~</h3>
        <nav>
            <ul>
                <router-link :to="{name: 'history'}" tag="li" >
                    <a class="nav-link"> History </a>
                </router-link>
                <span>~</span>
                  <router-link :to="{name: 'orderingGuide'}" tag="li" >
                    <a class="nav-link"> Ordering guide </a>
                </router-link>
                 <span>~</span>
                  <router-link :to="{name: 'delivery'}" tag="li" >
                    <a class="nav-link"> Delivery </a>
                </router-link>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "about"
}
</script>

<style scoped>
    h3{
        text-align: center;
    }
</style>