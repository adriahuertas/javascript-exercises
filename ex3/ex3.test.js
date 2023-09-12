import { expect, it, describe } from "vitest"
import distributeGifts from "./ex3"

describe("distributeGifts", () => {
  it("should be a function", () => {
    expect(typeof distributeGifts).toBe("function")
  })

  it("should return 0 when no pack of gifts or reindeers are passed", () => {
    expect(distributeGifts()).toBe(0)
  })

  it("should return 0 when no pack of gifts are passed", () => {
    expect(distributeGifts(null, [])).toBe(0)
  })

  it("should return 1 when the pack of gifts weight is the same than the reindeers weight", () => {
    expect(distributeGifts(["book"], ["di"])).toBe(1)
  })

  it("should return 0 when the pack of gifts weight is bigger than the reindeers weight", () => {
    expect(distributeGifts(["book", "ball", "Potato"], ["di", "di"])).toBe(0)
  })

  it("should return 4 when the pack of gifts weight is 4 times the reindeers weight", () => {
    expect(distributeGifts(["book", "ball"], ["dididadu", "didadadu"])).toBe(4)
  })

  it("should return 1 when the pack of gifts weight is between 1 and 2 times the reindeers weight", () => {
    expect(distributeGifts(["book", "ball"], ["didid"])).toBe(1)
  })
})
