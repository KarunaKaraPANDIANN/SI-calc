<template>
  <div id="container">
    <h2>Borrower Name:</h2>
    <input id="borrowee" v-model="borrowername" placeholder="Borrower's name" />
    <h3>Aadhar:</h3>
    <input id="aadhar" v-model="aadhar" placeholder="Aadhar number..." />
    <h4>Phone:</h4>
    <input class="ph" v-model="ph" placeholder="Phone" />
    <h4>Type of Loan:</h4>
    <select aria-placeholder="Select" v-model="loantype" @change="updateDueCycle()">
      <option disabled value="">Loan Types</option>
      <option v-for="(Loan, index) in Loans" :key="index">{{ Loan.loantype }}</option>
    </select>
    <h4>Principle Amt:</h4>
    <input id="principle" v-model="principle" placeholder="Principle amount" /><br>
    <input id="principle" v-model="no_of_years" placeholder="for...(year)" /><br>
    <label>Due: {{ due }}</label><br>
    <label>Interest: {{ interest }}</label>
    <br>
    <div>
      <nav>
        <button id="add" @click="addborrower(); back();" class="btn">Finish</button>&nbsp;&nbsp;&nbsp;
        <button id="add" @click="addborrower" class="btn">Add Another</button>
      </nav>
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
import moment from 'moment';
/* eslint-disable */
export default {
  name: 'Dashboard',
  data() {
    return {
      // for retrieve loans
      Loans: [],
      // user input
      borrowername: '',
      aadhar: '',
      ph: '',
      // for getting the details again
      loantype: '',
      //
      principle: 0,
      no_of_years: '',
      due: '',
      interest: '',
      //
      borrowers: [],
      SI: 0,
      interest_amount:'',
      total:'',
      part_of_principle:'',

     
    };
  },
  mounted() {
    this.retrieveLoanType();
  },
  methods: {
 
    retrieveLoanType() {
      const storedValue = localStorage.getItem("Loans");
      this.Loans = JSON.parse(storedValue);
    },
    // code to update due details
    updateDueCycle() {
      const selectedLoan = this.Loans.find(loan => loan.loantype === this.loantype);
      if (selectedLoan) {
        this.due = selectedLoan.duecycle;
        this.interest = selectedLoan.interest;
      } else {
        this.due = '';
      }
    },
    addborrower() {
      if (this.borrowername || (this.no_of_years !== 0)) {
        let SI = this.principle * this.interest * this.no_of_years
      this.SI = SI/100
//for find interest amt
      let interest_amount = (this.interest/100)*this.principle
    
      switch (this.due) {
  case 'yearly':
    this.interest_amount = interest_amount;
    this.part_of_principle=this.principle/this.no_of_years
    break;
  case 'halfyear':
  this.interest_amount = interest_amount/2;
  this.part_of_principle=(this.principle/this.no_of_years)/2;
    break;
  case 'quarteryear':
  this.interest_amount = interest_amount/4;
  this.part_of_principle=(this.principle/this.no_of_years)/4;
    break;
  case 'monthly':
  this.interest_amount = interest_amount/12;
  this.part_of_principle=(this.principle/this.no_of_years)/12;
    break;
  case 'week':
  this.interest_amount = interest_amount/(12*4);
  this.part_of_principle=(this.principle/this.no_of_years)/(12*4);
    break;
  default:
  this.interest_amount = interest_amount * this.parseInt(due);
  this.part_of_principle=this.principle/this.no_of_years;
}

this.total=parseInt(this.SI) + parseInt(this.principle)

        const newborrower = {
          borrowername: this.borrowername,
          aadhar: parseInt(this.aadhar),
          phone: parseInt(this.ph),
          loantype: this.loantype,
          principle: parseInt(this.principle),
          duecycle: this.due,
          interest: parseFloat(this.interest),
          interest_amt:(this.interest_amount),
          part_of_principle:parseInt(this.part_of_principle),
          no_of_years:parseInt(this.no_of_years),
          SI:parseInt(this.SI),
          total:parseInt(this.total),
          established_date: moment().format('YYYY-MM-DD')
        };

        // Retrieve the existing borrowers array from localStorage
        const storedBorrowers = localStorage.getItem("Borrowers");

        if (storedBorrowers) {
          this.borrowers = JSON.parse(storedBorrowers);
        }

        // Add the new borrower to the array
        this.borrowers.push(newborrower);

        // Clear the input fields
        this.borrowername = "";
        this.aadhar = "";
        this.ph = "";
        this.loantype = "";
        this.principle = "";
        this.due = "";
        this.interest = "";
        this.no_of_years="";

        // Save the updated borrowers array to localStorage
        this.saveItems();
      } else {
        if(this.no_of_years === 0 || this.borrowername === ''){
        toast('check weather you set the name or principle year', {
        autoClose: 2000,
      });
    }
    else{
      this.back();
    }
      }
    },
    back() {
      this.$router.push('/Borrowers');
    },
    saveItems() {
      // Store items in local storage
      localStorage.setItem("Borrowers", JSON.stringify(this.borrowers));
    },
  },
};
</script>

<style scoped>
.calc {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.calculator-popup {
  position: fixed;
  right: 0%;
  z-index: 999;
  bottom: 20px;
  right: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.calculator-popup form {
  margin-top: 10px;
}

.calculator-popup form div {
  margin-bottom: 5px;
}

.calculator-popup form button {
  margin-right: 5px;
}

#container {
  margin-top: 20px;
}

#container h2,
h3,
h4 {
  margin-top: 10px;
}

.ph {
  width: 150px;
}

.btn {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}

#add {
  margin-top: 20px;
}
</style>
