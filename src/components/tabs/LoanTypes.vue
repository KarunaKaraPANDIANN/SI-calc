<template>
  <div v-if="button !== 'modify'" >
  <div class="container animated-bg">
    <div class="search-bar">
      <input v-model="button" class="search-input" placeholder="search..." />
      <button @click="k" class="search-button">Search</button>
    </div>
    <div v-show="Loans" class="containe" v-for="(Loan, index) in Loans" :key="index">
      <ul>
        <li>
          <b>LoanType:{{ Loan.loantype }}</b> <br />
          Maximum amount:{{ Loan.maxamt }}<br />
          Minimum amount:{{ Loan.minamt }}<br />
          Interest:{{ Loan.interest }}%<br />
          DueCycle:{{ Loan.duecycle }} <br>
          <button @click="removeLoanType(index)" class="remove-button">➖</button>
          <hr />
        </li>
      </ul>
    </div>
  </div>
  <button @click="addbtn" id="btn" class="add-button">+</button>
</div>
  
  <div v-if="button === 'modify'" >
    <div>
      <button @click="back();" class="back-button">🔙</button>
    </div>
    <div class="container animated-bg">
    <div class="set-cord">
      <label>Loan Type</label>
      <input v-model="loantype" placeholder="Loan Type..." />
      <label>Maximum Loan Amount</label>
      <input v-model="maxamt" placeholder="Maximum Loan..." />
      <label>Minimum Loan Amount</label>
      <input v-model="minamt" id="kk" placeholder="Minimum Loan..." />
      <label>Rate of Interest (in number)</label>
      <input v-model="interest" placeholder="Interest amount..." />
      <select v-model="duecycle">
        <option disabled value="">Payment Circle</option>
        <option value="week">Week</option>
        <option value="monthly">Month</option>
        <option value="halfyear">Half Year</option>
        <option value="quarteryear">Quarter Year</option>
        <option value="yearly">Yearly</option>
      </select>
      <input v-model="duecycle" placeholder="If multiple years..." />
    </div>
    <div>
      <nav>
        <button @click="finishup(); back();" class="finish">Finish</button>
      </nav>
    </div>
  </div>
  <button @click="finishup" id="btn" class="add-button">+</button>
</div>
</template>

<script>
export default {
  name: 'LoanTypes',

  data() {
    return {
      Loans: [],
      loantype: '',
      maxamt: '',
      minamt: '',
      interest: '',
      duecycle: '',
      button: '',
    };
  },

  mounted() {
    const storedValue = localStorage.getItem('Loans');
    if (storedValue) {
      this.Loans = JSON.parse(storedValue);
    }
  },

  methods: {
    addbtn() {
      this.button = 'modify';
    },

    back() {
      this.button = '';
    },

    finishup() {
      if (this.loantype) {
        const newItem = {
          loantype: this.loantype,
          maxamt: parseInt(this.maxamt),
          minamt: parseInt(this.minamt),
          interest: parseInt(this.interest),
          duecycle: this.duecycle,
        };

        if (this.interest < 50) {
          this.Loans.push(newItem);
        } else {
          alert('Interest percentage should be less than 50');
        }

        this.loantype = '';
        this.maxamt = null;
        this.minamt = '';
        this.interest = '';
        this.duecycle = '';
        this.saveItems();
      } else {
        this.back();
      }
    },

    saveItems() {
      localStorage.setItem('Loans', JSON.stringify(this.Loans));
    },

    removeLoanType(index) {
      this.Loans.splice(index, 1);
      this.saveItems();
    },
  },
};
</script>

<style>
#btn{
  vertical-align: bottom;
  left: 1%;
  bottom: 80%;
}
.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}
.containe {
  background: lightcyan;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}
.search-bar {
  display: flex;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 5px 0 0 5px;
}

.search-button {
  margin-top: 12px;
  margin-left: 10px; 
  background-color: #007bff;
  height: 30px;
  color: #fff;
  border: none;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #0056b3;
  cursor: pointer;
}

.set-cord {
  margin-bottom: 20px;
  align-items: center;
  margin-right: 5%;
}

.remove-button {
  padding: 3px 8px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #c82333;
  cursor: pointer;
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

.back-button {
  padding: 10px 20px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 3px;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
}

.back-button:hover {
  background-color: #5a6268;
  cursor: pointer;
}

.finish {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.finish:hover {
  background-color: #0069d9;
  cursor: pointer;
}

hr {
  margin: 10px 0;
  border: none;
  border-top: 1px solid #ccc;
}
.animated-bg {
  background-image: linear-gradient(to right, #81C784, #fbdb9e, #fdf2b4);
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
label,input,select {
  display: block;
}
</style>
