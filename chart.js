let categories = [];
let amounts = [];

const ctx = document.getElementById('expense-chart').getContext('2d');
let pieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: categories,
    datasets: [{
      data: amounts,
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56',
        '#66bb6a', '#ab47bc', '#ffa726', '#26a69a'
      ],
    }]
  },
  options: {
    responsive: true
  }
});

document.getElementById('expense-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const category = document.getElementById('category').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);

  if (category && !isNaN(amount)) {
    categories.push(category);
    amounts.push(amount);
    pieChart.data.labels = categories;
    pieChart.data.datasets[0].data = amounts;
    pieChart.update();
    this.reset();
  }
});
