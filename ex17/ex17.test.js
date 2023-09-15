import { expect, it, describe } from "vitest"

import carryGifts from "./ex17"

describe("carryGifts", () => {
  it("should be a function", () => {
    expect(typeof carryGifts).toBe("function")
  })

  it("should return the gifts that can be carried", () => {
    expect(carryGifts(["game"], 10)).toEqual(["game"])
  })

  it("should return the gifts that can be carried", () => {
    expect(carryGifts(["game", "ball"], 10)).toEqual(["game ball"])
  })

  it("should return the gifts that can be carried", () => {
    expect(carryGifts(["game", "ball"], 5)).toEqual(["game", "ball"])
  })

  it("should return the gifts that can be carried", () => {
    expect(carryGifts(["game", "ball", "bike"], 10)).toEqual([
      "game ball",
      "bike",
    ])
  })

  it("should return the gifts that can be carried", () => {
    expect(carryGifts(["game", "ball", "bike"], 5)).toEqual([
      "game",
      "ball",
      "bike",
    ])
  })
})
