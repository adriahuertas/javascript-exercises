import { printTable } from "./ex21"
import { describe, expect, it } from "vitest"

describe("printTable", () => {
  it("should be a function", () => {
    expect(typeof printTable).toBe("function")
  })

  it("should print the table", () => {
    expect(
      printTable([
        { name: "Game", quantity: 2 },
        { name: "Bike", quantity: 1 },
        { name: "Book", quantity: 3 },
      ])
    ).toBe(
      `+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************`
    )
  })

  it("", () => {
    expect(
      printTable([
        { name: "PlayStation 5", quantity: 9234782374892 },
        { name: "Book Learn Web Dev", quantity: 23531 },
      ])
    ).toBe(
      `++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************`
    )
  })
})
