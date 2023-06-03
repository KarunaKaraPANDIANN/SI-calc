<template>
    <div class="container">
      <button @click="goBack"> 🢨</button>
      <ul>
        <p>{{ email }}</p>
        <input v-model="username" placeholder="username..." />
      </ul>
      <ul>
        <input v-model="phone" placeholder="mobile number..." />
      </ul>
      <ul>
        <button @click="enabled" type="submit">Finish</button>
      </ul>
      <p></p>
    </div>
  </template>
    
    <script>
    /* eslint-disable */ 
    export default {
      name: 'Dashboard',
      data() {
        return{
          email: '',
          username: '',
          phone: ''
        };
        // Component logic here
      },
      methods:{
     goBack() {
     window.history.back(-1); // Navigates back to the previous page
    },
    enabled() {
      localStorage.setItem("LoginStatus", JSON.stringify("enabled"));
      window.location.reload();
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
    