function Test() {
  for (i = 1; i <= 50; i++) {
    if (i%3 === 0 && i%5 === 0) {
      console.log("Frontend Backend")
    }
    else if (i%3 === 0) {
      console.log("Frontend")
    } else if (i%5 === 0) {
      console.log("Backend")
    }
    else {
      console.log(i)
    }
  }
}

console.log(Test())