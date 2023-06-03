<template>
  <div class="container">
    <ul>
      <input v-model="email" placeholder="email..." />
    </ul>
    <ul>
      <input v-model="password" placeholder="password..." />
    </ul>
    <ul>
      <button type="submit">submit</button>
    </ul>
    <p></p>
    <ul class="signin">
      <router-link to="/signup">create new account...</router-link>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import signin from './signin.vue';
import { createApp } from 'vue';
export default {
  name: 'App',
  data() {
    return {
      email: '',
      password: '',
      rePassword: '',
    };
  },
  methods:{
    navigateToOtherComponent(){
 const app = createApp(signin);
app.mount('#app');
alert("ok") 
   }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fadbc5ae;
  /* Add background image if desired */
  /* background-image: url('path-to-image.jpg'); */
  /* Add additional background styles as needed */
}

input {
  border-radius: 50px;
  padding: 10px 15px;
  margin: 10px 0;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #e57373;
  color: #fff;
  border: none;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(229, 115, 115, 0.5);
}

button[type="submit"]:hover {
  filter: drop-shadow(0 0 10px rgba(229, 115, 115, 0.8));
}
</style>
