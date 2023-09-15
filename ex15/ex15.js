export default function decorateTree(base) {
  if (!base) return []

  const baseArray = base.split(" ")

  const result = []
  result[0] = [...baseArray]

  for (let i = baseArray.length - 1; i > 0; i--) {
    result[baseArray.length - i] = new Array(i)
  }

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result[i].length - 1; j++) {
      const firstElement = result[i][j]
      const secondElement = result[i][j + 1]

      const candidate =
        firstElement === secondElement
          ? firstElement
          : "BPR".replace(firstElement, "").replace(secondElement, "")
      console.log(candidate)
      result[i + 1][j] = candidate
    }
  }

  const resultToString = result.map((arr) => arr.join(" "))
  return resultToString.reverse()
}
