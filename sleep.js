function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  }

console.log('hello');
sleep(2000);
console.log('bye');
