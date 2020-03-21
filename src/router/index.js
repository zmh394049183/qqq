import VueRouter from 'vue-router'
import Vue from 'vue'



const Home = () => import('../components/Home')

const About = () => import('../components/About')
const B = () => import('../components/B');
const C = () => import('../components/C');

Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: Home,
  children: [{
    path: 'c',
    component: C
  }, {
    path: 'b',
    component: B
  }]
}, {
  path: '/about',
  component: About
}]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router