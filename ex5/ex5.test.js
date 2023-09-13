import { expect, it, describe } from "vitest"
import getMaxGifts from "./ex5"

describe("getMaxGifts", () => {
  it("should be a function", () => {
    expect(typeof getMaxGifts).toBe("function")
  })

  it("should return 0 when no giftsCities, maxGifts or maxCities are passed", () => {
    expect(getMaxGifts()).toBe(0)
  })

  it("should return giftsCities when there's only one giftCity and maxGifts is bigger than maxGifts and maxCities equals one", () => {
    expect(getMaxGifts([50], 100, 1)).toBe(50)
  })

  it("should return 150", () => {
    expect(getMaxGifts([50, 70, 30], 5000, 4)).toBe(150)
  })

  it("should return 20", () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toBe(20)
  })
})
