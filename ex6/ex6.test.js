import { expect, it, describe } from "vitest"

import createCube from "./ex6"

describe("createCube", () => {
  it("should be a function", () => {
    expect(typeof createCube).toBe("function")
  })

  it("should return a cube of size 2", () => {
    expect(createCube(2)).toBe(" /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/")
  })
})
