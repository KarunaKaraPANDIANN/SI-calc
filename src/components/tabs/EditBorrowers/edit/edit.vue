<template>
          <button @click="back();" class="back-button">🔙</button>
      <div class="container animated-bg">
        <label><b>Borrower Name:</b></label>
        <input id="borrowee" v-model="borrowername" placeholder="Borrower's name" />
        <label>Aadhar:</label>
        <input id="aadhar" v-model="aadhar" placeholder="Aadhar number..." />
        <label>Phone:</label>
        <input class="ph" v-model="ph" placeholder="Phone" />
        <label>Type of Loan:</label>
        <select aria-placeholder="Select" v-model="loantype" @change="updateDueCycle()">
          <option disabled value="">Loan Types</option>
          <option v-for="(Loan, index) in Loans" :key="index">{{ Loan.loantype }}</option>
        </select>
        <label>Principle Amt:</label>
        <input id="principle" v-model="principle" placeholder="Principle amount" />
        <label>Due: {{ due }}</label>
        <label>Interest: {{ interest }}</label>
        <label><b>{{ total }}</b></label>
        <input v-model="ETA"/>
        <br>
        <div>
          <nav>
            <button id="add" @click="addborrower" class="btn">Update</button>
          </nav>
        </div>
      </div>
  </template>

  <script>
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css'
  /* eslint-disable */  
  export default {
    name: 'Dashboar',
    data() {
      return {
        index: '',
        Loans: [],
        loantype: '',
        borrowername: '',
        aadhar: '',
        ph: '',
        principle: '',
        due: '',
        interest: '',
        borrower: null,
        borrowers: [],
        Numberofloans: 0,
        total:'',
        ETA: '',
      };
    },
  
    mounted() {
      this.index = this.$route.query.index;
      this.retrieve();
    },
  
    methods: {
      retrieve() {
        const storedValue = localStorage.getItem("Loans");
        this.Loans = JSON.parse(storedValue);
  
        const storedBorrowers = localStorage.getItem("Borrowers");
        this.borrowers = JSON.parse(storedBorrowers);
  
        this.borrower = this.borrowers[this.index];
        if (this.borrower) {
          this.borrowername = this.borrower.borrowername;
          this.aadhar = this.borrower.aadhar;
          this.ph = this.borrower.phone;
          this.loantype = this.borrower.loantype;
          this.principle = this.borrower.principle;
          this.due = this.borrower.duecycle;
          this.interest = this.borrower.interest;
          this.ETA= this.borrower.no_of_years
          
        }
        //SI
        const Total = this.principle * this.interest * this.ETA
        this.total = Total/100
  
        // Calculate the number of loans that the borrower has
        this.Numberofloans = this.borrowers.filter(borrower => borrower.aadhar === this.aadhar).length;
      },
  
      addborrower() {
        if (this.borrowername) {
          const updatedBorrower = {
            borrowername: this.borrowername,
            aadhar: parseInt(this.aadhar),
            phone: parseInt(this.ph),
            loantype: this.loantype,
            principle: parseInt(this.principle),
            duecycle: this.due,
            interest: parseInt(this.interest),
            no_of_years:parseInt(this.ETA)
          };
  
          const i = this.borrowers.findIndex(borrower => borrower.borrowername === this.index);
          this.borrowers.splice(i, 1, updatedBorrower);
  
          this.borrowername = "";
          this.aadhar = "";
          this.ph = "";
          this.loantype = "";
          this.principle = "";
          this.due = "";
          this.interest = "";
  
          this.saveItems();
        } else {
          this.back();
        }
      },
  
      back() {
        this.$router.push('/Borrowers');
      },
  
      saveItems() {
        localStorage.setItem("Borrowers", JSON.stringify(this.borrowers));
        toast('Updated', {
          autoClose: 1000,
        });
      },
    }
  }
  </script>
  
  <style scoped>
  
  label,
  button,
  select
  {
    display: block;
  }
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
  background-image: linear-gradient(to right, #ff7f50, #ffa500, #ffd700);
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
  