function quickSort (arr) {
  if (!arr.length) return []
  if (arr.length === 1) return arr
  const left = []
  const right = []

  arr.slice(1).forEach(a => {
    if (a < arr[1]) {
      left.push(a)
    } else {
      right.push(a)
    }
  })

  return quickSort(left).concat(arr[0], ...quickSort(right))
}

console.log(quickSort2([1, 0, -1, -2, -4, 8]))
