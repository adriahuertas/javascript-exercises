import { describe, it, expect } from "vitest"
import wrapping from "./ex1"

describe("wrapping", () => {
  it("should be a function", () => {
    expect(typeof wrapping).toBe("function")
  })

  it("should return an empty array when no gifts are passed", () => {
    expect(wrapping()).toEqual([])
  })

  it("should return the strings wrapped in asterisks", () => {
    expect(wrapping(["cat", "game"])).toEqual([
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
    ])
  })
})

console.log("LOG:" + wrapping(["cat"]))
