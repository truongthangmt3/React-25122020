// example of fibonanci recusion

function fibonanci(a) {
    if (a==0) return 0
     else if (a==1) return 1
      else return fibonanci(a-1) + fibonanci(a-2)
}

console.log("The fibonanci of 10 is: %d", fibonanci(10))

