function bucketSort (arr) {
  if (!Array.isArray(arr)) throw new Error('arguements is not arr')
  const max = Math.max(...arr)
  const array = Array(max + 1).fill(0)

  arr.forEach(a => {
    array[a]++
  })
  const res = []
  array.forEach((a, index) => {
    while(a--) {
      res.push(index)
    }
  })
  return res
}

console.log(bucketSort([2, 1, 0, 4]))
