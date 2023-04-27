console.log('javascript running')

function count() {
  const total = document.querySelectorAll('.total')
  let sum = 0;
  total.forEach(function(x) {
    sum += parseInt(x.value) || 0;
  })
  document.getElementById('countTotal').innerHTML = sum;
}

function loadData() {
  
}

function addToScore() {
  let scoreInput = document.getElementById('hole-score');
  let score = parseInt(scoreInput.value);
  let sum = score + 1;
  scoreInput.value = sum;
  if (sum <= 1) {
    document.getElementById('subtractFromScore').disabled = true;
  } else {
    document.getElementById('subtractFromScore').disabled = false;
  }
  if (sum >= 10) {
    document.getElementById('addToScore').disabled = true
  }
}


function subtractFromScore() {
  let scoreInput = document.getElementById('hole-score');
  let score = parseInt(scoreInput.value);
  if (score == 2) {
    document.getElementById('subtractFromScore').disabled = true;
  }
  if (score >= 10) {
    document.getElementById('addToScore').disabled = false
  }
  let difference = score - 1;
  scoreInput.value = difference;
}



