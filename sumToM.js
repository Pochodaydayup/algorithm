// 在一个每个数不相等的数组中，取n个数使其为M

const book = {}
const items = []
const itemsArr = []
let key = 0
const arr = [1, 4, 0, 2, 3, 5, 6]
const n = 4
const m = 10
function dfs (step) {
  if (step === n) {
    if (items.reduce((p, c) => p + c) === m) {
      let isExist = itemsArr.some(i => i.every(a => items.includes(a)))
      if (!isExist) {
        itemsArr.push(items.slice())
      }
    }
    return
  }
  for (let i = 0; i < arr.length; i++) {
    if (!book[arr[i]]) {
      items[step] = arr[i]
      book[arr[i]] = 1
      dfs(step + 1)
      book[arr[i]] = 0
    }
  }
}

dfs(0)

console.log(itemsArr)