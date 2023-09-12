import { expect, it, describe } from "vitest"

function createCube(size) {
  let result = ""
  for (let i = 0; i < size; i++) {
    result +=
      " ".repeat(size - 1 - i) +
      "/\\".repeat(size - 1) +
      "_\\".repeat(size) +
      "\n"
  }
  for (let i = 0; i < size; i++) {
    result +=
      " ".repeat(size - 1) + "\\/".repeat(size) + "_/".repeat(size - 1) + "\n"
  }
  console.log(result)
  return result
}

describe("createCube", () => {
  it("should be a function", () => {
    expect(typeof createCube).toBe("function")
  })

  it("should return a string", () => {
    expect(typeof createCube(1)).toContain("/\\_\\")
  })
})
