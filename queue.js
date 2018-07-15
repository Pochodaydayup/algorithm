function transQueue (arr) {
  const len = arr.length
  let start = 0
  const res = []
  while (start < arr.length) {
    const delItem = arr.splice(start, 1)
    res.push(delItem[0])

    if (res.length === len) break

    arr.push(arr[start])
    start++
  }
  return res
}

console.log(transQueue([6, 3, 1, 7, 5, 8, 9, 2, 4]))