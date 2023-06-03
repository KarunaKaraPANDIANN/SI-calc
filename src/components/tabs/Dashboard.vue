<template>
<div id="dashboard">
  <div class="container">
    <h2>Number of loans</h2>
    <label> {{ this.numberofloans }}</label>
  </div>
  <div class="container">
    <h2>Number of Borrowers</h2>
    <label> {{ this.numberofborrowers }}</label>
  </div>
  <div class="container">
    <h2>pending amount</h2>
    <p>54</p>
  </div>
  <div class="container">
    <h2>pending loans</h2>
    <p>0</p>
  </div>
  <div class="container">
    <h2>profit</h2>
    <p>00</p>
  </div>
  <div class="container">
    <h2>Chart</h2>
    <div>
    <div ref="chartContainer"></div>
  </div>
    </div>
</div>

  
</template>
<script>
import ApexCharts from 'apexcharts';

export default {
  data(){
    return{
      Loans:[],
      numberofloans:'',

      borrowers:[],
      numberofborrowers:''

    };
  },
  mounted() {
    const storedValue = localStorage.getItem('Loans');
    const storedBorrowers = localStorage.getItem("Borrowers");
    
      this.Loans = JSON.parse(storedValue);
      this.numberofloans=this.Loans.length

      this.borrowers = JSON.parse(storedBorrowers);
      this.numberofborrowers = this.borrowers.length
    
    this.createChart();
  },
  methods: {
   
    createChart() {
      
      const chartContainer = this.$refs.chartContainer;

      const options = {
        series: [30, 40, 50],
        labels: ['active', 'inactive', 'pending'],
        chart: {
          type: 'donut',
        },
        colors: ['#FF6384', '#36A2EB', '#FFCE56'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      };

      const chart = new ApexCharts(chartContainer, options);
      chart.render();
    },
  },
};
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

.widget {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.widget-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.widget-data {
  font-size: 24px;
  margin: 0;
}

.chart {
  width: 100%;
  height: 150px;
  background-color: #eaeaea;
  border-radius: 8px;
}

#chartContainer {
  max-width: 400px;
  margin: 0 auto;
}
</style>
