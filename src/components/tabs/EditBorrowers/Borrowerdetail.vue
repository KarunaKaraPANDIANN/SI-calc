<template>
  <div>
    <header class="kk">
      <div v-if="borrower">
        <label><b>Name: {{ borrower.borrowername }}</b></label>
        <label>Phone: {{ borrower.phone }}</label>
        <label>Aadhar: {{ borrower.aadhar }}</label>        
        <label>No. of Loans: {{ Numberofloans }}</label>
        <label>Pending: {{ "pending" }}</label>
        <label>Total Due Paid: {{ "paid" }}</label>
      </div>
    </header>
    <hr>
    <hr>
    <div v-for="(borrower,index) in borrowers" :key="index">
      <div v-if="borrower.aadhar === this.borrower.aadhar" @click="navigate(index)" class="container animated-bg">
      <label><b>Borrower Name:{{ borrower.borrowername }}</b></label>
      <label>Type of Loan:{{ borrower.loantype }}</label>
      <label><b>established_on:{{ borrower.established_date }}</b></label>
      <label><b>Principle Amt:{{ borrower.principle }}</b></label>
      <label>DueCycle: {{ borrower.duecycle }}</label>
      <label>Rate_of_Interest: {{ borrower.interest }}%</label>
      <lable>cost_of_interest:{{ borrower.interest_amt }}</lable>
      <label>Part_Of_Principle:{{ borrower.part_of_principle }}</label>
      <label><b>{{ borrower.duecycle }} due:{{ borrower.interest_amt }} + {{ borrower.part_of_principle }} = {{ borrower.interest_amt + borrower.part_of_principle }}</b></label>
      <label>total SI for {{borrower.no_of_years}} years: {{ borrower.SI }}</label>
      <label><b>Total: SI ({{borrower.SI}})+ Principle ({{borrower.principle}}) = {{ borrower.total}}</b></label>
      <label><b>number_of_years:{{ borrower.no_of_years}} </b> </label>
    </div>
    </div>
  </div> 
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'

export default {
  name: 'Dashboard',
  data() {
    return {
      //for process on the script
      index: 0,
      borrowername: '',
      aadhar: '',
      ph: '',
      interest: '',
      borrower: null,
      borrowers: [],

      //will return to template
      Numberofloans: 0,
      //
    };
  },

  mounted() {
    this.index = this.$route.query.index;
    this.retrieve();
  },

  methods: {
    retrieve() {
     
      const storedBorrowers = localStorage.getItem("Borrowers");
      this.borrowers = JSON.parse(storedBorrowers);
      alert(this.index)
      this.index= this.$route.query.index;
      this.borrower = this.borrowers[this.index];
      
      if (this.borrower) {
        this.borrowername = this.borrower.borrowername;
        this.ph = this.borrower.phone;
        this.aadhar = this.borrower.aadhar;
      }
      this.Numberofloans = this.borrowers.filter(borrower => borrower.aadhar === this.aadhar).length;
      
      //SI
   

      // Calculate the number of loans that the borrower has
    },

    navigate(index) {
      toast(index, {
        autoClose: 2000,
      });
      this.$router.push({
        path: '/Borrowers/checkdetails/editor',
        query: {
          index: index
        },
      });
    },
    
    back() {
      this.$router.push('/Borrowers');
    },

    saveItems() {
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

.container {
  background-color: #f5f5f5;
  margin-bottom: 80px;

}
.kk{
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  margin: 6%;
  height: -160;
  margin-left: 26%;
  text-justify: center;
}

  .animated-bg {
    background-image: linear-gradient(to right, #81C784, #fbdb9e, #fdf2b4);
 
  animation: gradientAnimation 4s linear infinite;
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

</style>
