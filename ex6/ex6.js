export default function createCube(size) {
  let result = ""
  for (let i = 0; i < size; i++) {
    result +=
      " ".repeat(size - 1 - i) + "/\\".repeat(i + 1) + "_\\".repeat(size) + "\n"
  }
  for (let i = size - 1; i >= 0; i--) {
    result +=
      " ".repeat(size - 1 - i) + "\\/".repeat(i + 1) + "_/".repeat(size) + "\n"
  }
  const cube = result.substring(0, result.length - 1)
  return cube
}
