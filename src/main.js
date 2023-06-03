import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Settings from './components/tabs/Settings.vue';
import LoanTypes from './components/tabs/LoanTypes.vue';
import Borrowers from './components/tabs/Borrowers.vue';
import Dash from './components/tabs/Dashboard.vue';

import add from './components/tabs/EditBorrowers/AddBorrowers.vue';
import check from './components/tabs/EditBorrowers/Borrowerdetail.vue'; 
import edit from './components/tabs/EditBorrowers/edit/edit.vue';
import Appz from './components/startup/App.vue';
import login from './components/startup/loginscreen.vue';
import signin from './components/startup/signin.vue';
import finish from './components/startup/Finishup.vue';


/* eslint-disable */

const Loginstatus = localStorage.getItem("LoginStatus");
const status = JSON.parse(Loginstatus);

if(status === 'enabled') {
  const routes = [
    { path: '/', component: Dash },
    { path: '/Borrowers', component: Borrowers },
    { path: '/Loans', component: LoanTypes },
    { path: '/Settings', component: Settings },
    { path: '/signup', component: signin},
    { path: '/Borrowers/addnew', component: add},
    { path: '/Borrowers/checkdetails', component: check},
    {path:'/Borrowers/checkdetails/editor', component:edit}
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });

const app = createApp(App);
app.use(router);
app.mount('#app');
}


else {
  const routes = [
    { path: '/', component: login },
    { path: '/signup', component: signin},
    { path: '/signup/finishup', component: finish}
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  const app = createApp(Appz);
  app.use(router);
  app.mount('#app');
}
