let fibonacci_series = function (n) {
  if (n===1) {
    return [0, 1]
  } else {
    let s = fibonacci_series(n - 1)
    s.push(s[s.length - 1] + s[s.length - 2]) //sum of the previous two terms
    return s
  }
}

function sum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] < 4000000) {
      sum += arr[i]
    }
  }
  console.log(sum)
}

sum(fibonacci_series(8000))
