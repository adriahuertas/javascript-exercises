import { expect, it, describe } from "vitest"
import fitsInOneBox from "./ex4"

describe("fitsInOneBox", () => {
  it("should be a function", () => {
    expect(typeof fitsInOneBox).toBe("function")
  })

  it("should return false when no boxes are passed", () => {
    expect(fitsInOneBox()).toBe(false)
  })

  it("should return true when there's only one box", () => {
    expect(fitsInOneBox([1])).toBe(true)
  })

  it("should return true when there are two boxes and the values of the smallest box are all smaller than the values of the biggest box", () => {
    expect(
      fitsInOneBox([
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 },
      ])
    ).toBe(true)
  })

  it("should return false when there are two boxes and some of the values of the smallest box are bigger than some the values of the biggest box", () => {
    expect(
      fitsInOneBox([
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 14 },
      ])
    ).toBe(false)
  })

  it("should return false when there are 3 boxes and some of the values of the smallest box are bigger than some the values of the biggest box", () => {
    expect(
      fitsInOneBox([
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 4 },
        { l: 1, w: 1, h: 1 },
      ])
    ).toBe(false)
  })

  it("should return false when there're 3 boxes and can fit ", () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 },
      ])
    ).toBe(false)
  })

  it("should return true when there're 3 boxes and can fit, even if they are unsorted ", () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 },
      ])
    ).toBe(true)
  })
})
