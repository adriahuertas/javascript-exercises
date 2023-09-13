import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"
import Fraction from "fraction.js"

import getCompleted from "./ex11"

describe("getCompleted", () => {
  it("should be a function", () => {
    expect(typeof getCompleted).toBe("function")
  })

  it("should return 0 when no part nor total are passed", () => {
    expect(getCompleted()).toBe("0")
  })

  it("should return 1/2 when part is 01:00:00 and total is 02:00:00", () => {
    expect(getCompleted("01:00:00", "02:00:00")).toBe("1/2")
  })

  it("should return 1/2 when part is 02:00:00 and total is 04:00:00", () => {
    expect(getCompleted("02:00:00", "04:00:00")).toBe("1/2")
  })
  it("should return 1/6 when part is 00:10:00 and total is 01:00:00", () => {
    expect(getCompleted("00:10:00", "01:00:00")).toBe("1/6")
  })
})
