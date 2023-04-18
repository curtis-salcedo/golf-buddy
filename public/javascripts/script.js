console.log('javascript running')

function count() {
  const total = document.querySelectorAll('.total')
  let sum = 0;
  total.forEach(function(x) {
    sum += parseInt(x.value) || 0;
  })
  console.log(sum)
  document.getElementById('countTotal').innerHTML = sum;
}

function loadData() {
  
}
