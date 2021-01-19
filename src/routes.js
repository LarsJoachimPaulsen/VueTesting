import Home from './components/Home.vue'; 
import Menu from './components/Menu.vue';
import Admin from './components/Admin.vue'; 
import About from './components/About.vue';
import Contact from './components/Contact.vue'; 
import Delivery from './components/Delivery.vue';
import OrderingGuide from './components/OrderingGuide.vue'; 
import History from './components/History.vue';

export const routes = [
    {
      path: '/', 
      name: 'home',
      components: {
          default: Home,
          'ordering-guide': OrderingGuide, 
          'delivery': Delivery, 
          'history': History
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    }, 
    {
      path: '/contacnt', 
      name: 'contact',
      component: Contact
    },
    {
      path: '/admin',
      name: 'admin', 
      component: Admin, 
      beforeEnter: (to, from, next) =>{
        alert('This area is for authorized users only, please log in to continue'); 
        next(); 
      }
    },
    {
      path: '/about', 
      name: 'about',
      component: About,
      children: [
        {
          path: '/history', 
          name: 'history',
          component: History
        },
        {
          path: '/delivery', 
          name: 'delivery',
          component: Delivery
        }, 
        {
          path: '/ordering-guide', 
          name: 'orderingGuide',
          component: OrderingGuide
        }  
      ]},
    {
      path: '*', 
      redirect: '/'
    }
]