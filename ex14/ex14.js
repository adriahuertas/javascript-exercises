export default function getOptimalPath(path) {
  if (!path || path.length === 0) return 0

  const newPath = path.map((arr) => [...arr])

  for (let i = newPath.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const first = newPath[i][j]
      const second = newPath[i][j + 1]

      newPath[i - 1][j] += first < second ? first : second
    }
  }
  return newPath[0][0]
}
