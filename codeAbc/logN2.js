function logN2(n) {
  if (n <= 1) {
    console.log(`Done`);
    return;
  }

  console.log(`Main number of : ${n}`);
  logN2(n / 2);
}

logN2(8);
