// console.log("kambing");
// a = 20
// b = 20
// console.log("=== ", (a+b));

const penambahan = (num1, num2) => {
    let a = num1 + num2;
    let b = a.toString();
    return b;
  }

  console.log(penambahan(5, 2));

  const testCase = (value, expectedValue) => {
      return console.log(value === expectedValue ? 'Passed! Test successfully!' : 'Failed! Please try again!');
  }
  
  testCase(penambahan(8, 3), "11");
  
  /**
   * The function should be multiply num1 & num2
   * The return of the function should be integer
   */

  const multiply = (num1, num2) => {
    let a = num1 * num2;
    let b = parseInt(a);
    // let c = parseInt(b)
    return b;
  }
//   console.log(typeof multiply(5, 2));
    console.log(multiply(5, 2));

    /**
   * The function should be substraction num1 & num2
   * The return of the function should be integer
   */

     const substraction = (num1, num2) => {
        let a = num1 - num2;
        let b = parseInt(a);
        // let c = parseInt(b)
        return b;
    }

    /**
   * The function should be divide num1 & num2
   * The return of the function should be integer
   */

  const devide = (num1, num2) => {
    let a = num1 / num2;
    let b = parseInt(a);
    // let c = parseInt(b)
    return b;
}

  /**
   * The function should be mod num1 & num2
   * The return of the function should be integer
   */

   const mod = (num1, num2) => {
    let a = num1 % num2;
    let b = parseInt(a);
    // let c = parseInt(b)
    return b;
}