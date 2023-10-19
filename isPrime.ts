/* 判断数字是否是质数 */
const isPrime = (num: number): boolean => {
    if(num===0) return false
    //假设变量  值为true 是素数
    let flag: boolean = true;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        //满足这个条件  说明有因子了  不是素数
        flag = false; //不是素数
        break;
      }
    }
    return flag;
};
console.log('isPrime(1):', isPrime(1));
console.log('isPrime(2):', isPrime(2));
console.log('isPrime(3):', isPrime(3));
console.log('isPrime(4):', isPrime(4));
console.log('isPrime(57):', isPrime(57));
