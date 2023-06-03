<template>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'Settings',
  data() {
    // Component logic here
  },
  methods:{
    logout(){
      const empty = [];
      const value = '';
      localStorage.setItem("Borrowers", JSON.stringify(empty));
      localStorage.setItem("Loans", JSON.stringify(empty));
      localStorage.setItem("LoginStatus", JSON.stringify(value));
      this.$router.push('/')
      try{
        App.restart();
      }
      catch{
        console.error('An error occurred:', error);
      }
      try{
        window.location.reload();
            }
      catch{
        console.error('An error occurred:', error);
      }
    
    }
  }
}
</script>
<style scoped>
button {
background-color: red;
}
.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: paleturquoise;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

</style>
