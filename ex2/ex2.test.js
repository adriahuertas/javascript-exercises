import { it, describe, expect } from "vitest"
import countHours from "./ex2"

describe("countHours", () => {
  it("should be a function", () => {
    expect(typeof countHours).toBe("function")
  })

  it("should return 0 when no holidays or year are passed", () => {
    expect(countHours(2018)).toBe(0)
    expect(countHours()).toBe(0)
    expect(countHours(2018, [])).toBe(0)
  })

  it("should return 0 when one day is passed if it's not holiday", () => {
    expect(countHours(2023, ["01/01"])).toBe(0)
  })

  it("should return 2 when one day is passed if it's holiday", () => {
    expect(countHours(2023, ["01/06"])).toBe(2)
  })

  it("should return 4 when 2 days are passed if they are holidays", () => {
    expect(countHours(2023, ["01/06", "01/05"])).toBe(4)
  })

  it("should return 4 when 3 days are passed but only 2 are holidays", () => {
    expect(countHours(2023, ["01/06", "01/05", "07/01"])).toBe(4)
  })
})
