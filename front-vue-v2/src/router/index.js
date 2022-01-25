import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/pages/home/home.vue'),
  },
  {
    path: '/create-user',
    name: 'create',
    component: () => import('../components/pages/create-user/CreateUserComponent.vue'),
  },
  {
    path: '/list-user',
    name: 'list',
    component: () => import('../components/pages/list-user/ListUserComponent.vue'),
  },
  {
    path: '/edit-user/:id',
    name: 'update',
    component: () => import('../components/pages/edit-user/EditUserComponent.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    // Quando houver carregamento de uma página inicial, então usar o NProgress:
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Completando a animação da rota do NProgress
  NProgress.done();
});

export default router;
