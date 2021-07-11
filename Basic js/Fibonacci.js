const fib = (n) => {
  const fibonacci = [0, 1];
  for (var i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }
  console.log(fibonacci);
};
fib(10);
