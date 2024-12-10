// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Sales Chart
    const salesData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Sales in $',
        data: [15000, 18000, 12000, 21000, 25000, 30000],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
    
    const salesConfig = {
      type: 'bar',
      data: salesData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
    
    // Profits Chart
    const profitsData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Profit Percentage',
        data: [10, 15, 20, 25, 30, 35],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };
    
    const profitsConfig = {
      type: 'line',
      data: profitsData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 50
          }
        }
      }
    };
  
    // Render the charts
    const salesChart = new Chart(document.getElementById('salesChart'), salesConfig);
    const profitsChart = new Chart(document.getElementById('profitsChart'), profitsConfig);
  });
  
