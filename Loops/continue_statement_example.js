for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Output:
// 0
// 1
// 3
// 4

// When i is 2, the continue statement skips that iteration and moves to the next.
