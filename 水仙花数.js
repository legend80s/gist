/**
 * 
 * @param {number} n
 * @returns {number[]} 
 */
function listDaffodilNumbers(n) {
  const begin = 10 ** (n - 1)
  const end = 10 ** n - 1

  const list = []

  for (let num = begin; num <= end; num++) {
    if (isDaffodilNumber(num, n)) {
      list.push(num)
    }    
  }

  return list
}

/**
 * 
 * @param {number} num 
 * @returns {boolean}
 */
function isDaffodilNumber(num, n) {
  // 153 = 1 ** 3 + 5 ** 3 + 3 ** 3
  // 153 / 10**0 % 10 = 3 
  // 153 / 10**1 % 10 = 5
  // 153 / 10**2 % 10 = 1

  const digits = [];

  for (let index = 0; index < n; index++) {
    digits.push(parseInt(num / (10 ** index)) % 10)
  }

  const sum = digits.reduce((acc, cur) => acc + cur ** n, 0)

  return sum === num;
}
