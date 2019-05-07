
const factorial = {

  /**
   * @function recursive
   */
  recursive(n) {
    return n === 0 ? 1 : (n * this.recursive(n - 1));
  },

  /**
   * @function iterative1
   */
  iterative1(n) {
    let factrl = 1;
    for(let i = 2; i <= n; i++) factrl *= i;
    return factrl;
  },

  /**
   * @function iterative2
   */
  iterative2(n) {
    for (let i = n - 1; i >= 1; i--) n *= i;
    return n;
  }
};

console.info(factorial.recursive(6));
console.info(factorial.iterative1(6));
console.info(factorial.iterative2(6));
