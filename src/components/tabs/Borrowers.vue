<template>
  <div class="container animated-bg">
    <div class="search-bar">
      <input class="search-input" placeholder="Search..." />
      <button class="search-button">Search</button>
    </div>
    <div class="status-buttons">
      <button class="status-button">Actives</button>
      <button class="status-button">InActives</button>
      <button class="status-button">Pendings</button>
    </div>
    <div v-for="(borrower, index) in Borrowers" :key="index" class="container animated-b">
      <div @click="navigate(index)">
        <b>
        <label class="borrower-phone">Borrower name:{{ borrower.borrowername }}</label></b>
        <br>
        <label class="borrower-phone">Phone: {{ borrower.phone }}</label>
      </div>
      <label class="borrower-label">Pending: {{ 'pending' }}</label>
      <label class="borrower-label">Total due paid: {{ 'paid' }}</label>
      <button @click="remove(index)" class="remove-button">➖</button>
      <hr class="divider">
    </div>
  </div>
  <nav>
    <button @click="add" class="add-button">+</button>
  </nav>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: 'LoanTypes',
  
  data() {
    return {
      Borrowers: [],
    };
  },

  mounted() {
    const getData = localStorage.getItem('Borrowers');
    this.Borrowers = JSON.parse(getData);
  },
  methods: {
    add() {
      this.$router.push('/Borrowers/addnew');
    },
    remove(index) {
      this.Borrowers.splice(index, 1);
      localStorage.setItem('Borrowers', JSON.stringify(this.Borrowers));
    },
    navigate(index) {
      toast(index, {
        autoClose: 2000,
      });
      this.$router.push({
        path: '/Borrowers/checkdetails',
        query: {
          index: index,
        },
      });
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #ace8af;
  padding: 20px;
  border-radius: 5px;
  margin: 6%;
  height: -160;
  margin-bottom: 10%;
}

.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.search-input {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.search-button {
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #0056b3;
  cursor: pointer;
}

.status-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.status-button {
  padding: 5px 10px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.status-button:hover {
  background-color: #495057;
  cursor: pointer;
}

.borrower-item {
  margin-bottom: 10px;
}

.borrower-name {
  margin-bottom: 5px;
}

.borrower-phone {
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
}

.borrower-label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
}

.remove-button {
  padding: 3px 8px;
  background-color: #dcdcdc;
  color: #fff;
  border: none;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #c82333;
  cursor: pointer;
}

.divider {
  border: none;
  border-top: 1px solid #ccc;
  margin: 10px 0;
}

.add-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #218838;
  cursor: pointer;
}

.animated-bg {
  background-image: linear-gradient(to right, #a8ecac, #fbdb9e, #fdf2b4);
  background-size: 200% auto;
  animation: gradientAnimation 5s linear infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
}
.animated-b {
  background-image: linear-gradient(rgb(199, 238, 199), rgb(198, 255, 255), rgb(218, 164, 218) );
  background-size: 200% auto;
  animation: gradientAnimation 5s linear infinite;
}

@keyframes gradientAnimation {
  100% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
}
</style>
