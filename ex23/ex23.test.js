import { describe, expect, it } from "vitest"

import { executeCommands } from "./ex23"

describe("executeCommands", () => {
  it("should be a function", () => {
    expect(typeof executeCommands).toBe("function")
  })

  it("should return an array of 8 numeric values when no commands", () => {
    expect(executeCommands()).toEqual([0, 0, 0, 0, 0, 0, 0, 0])
  })

  it("should return [5, 0, 0, 0, 0, 0, 0, 0] when command is 'MOV 5,V00'", () => {
    expect(executeCommands(["MOV 5,V00"])).toEqual([5, 0, 0, 0, 0, 0, 0, 0])
  })

  it("should return [0, 5, 0, 0, 0, 0, 0, 0] when command is 'MOV 5,V01'", () => {
    expect(executeCommands(["MOV 5,V01"])).toEqual([0, 5, 0, 0, 0, 0, 0, 0])
  })

  it("should return [5, 5, 0, 0, 0, 0, 0, 0] when command is 'MOV 5,V01', 'MOV V01,V00'", () => {
    expect(executeCommands(["MOV 5,V01", "MOV V01,V00"])).toEqual([
      5, 5, 0, 0, 0, 0, 0, 0,
    ])
  })

  it("should return [10, 5, 0, 0, 0, 0, 0, 0] when command is 'MOV 5,V01','MOV 10,V00'", () => {
    expect(executeCommands(["MOV 5,V01", "MOV 10,V00"])).toEqual([
      10, 5, 0, 0, 0, 0, 0, 0,
    ])
  })

  it("should return [10, 10, 0 ,0 ,0 ,0 ,0 ,0] when command is 'MOV 10,V00','ADD V01,V00'", () => {
    expect(executeCommands(["MOV 10,V00", "ADD V01,V00"])).toEqual([
      10, 10, 0, 0, 0, 0, 0, 0,
    ])
  })

  it("should return [14, 10, 0, 0, 0, 0, 0]", () => {
    expect(
      executeCommands([
        "MOV 5,V00", // V00 es 5
        "MOV 10,V01", // V01 es 10
        "DEC V00", // V00 ahora es 4
        "ADD V00,V01", // V00 = V00 + V01 = 14
      ])
    ).toEqual([14, 10, 0, 0, 0, 0, 0, 0])
  })

  it("should return [0, 254, 0, 0, 0, 0, 0]", () => {
    expect(
      executeCommands([
        "MOV 255,V00", // V00 es 255
        "INC V00", // V00 es 256, desborda a 0
        "DEC V01", // V01 es -1, desborda a 255
        "DEC V01", // V01 es 254
      ])
    ).toEqual([0, 254, 0, 0, 0, 0, 0, 0])
  })

  it("should return [ 0, 10, 0, 0, 0, 0, 1, 0 ]", () => {
    expect(
      executeCommands([
        "MOV 10,V00", // V00 es 10
        "DEC V00", // decrementa V00 en 1  <---┐
        "INC V01", // incrementa V01 en 1      |
        "JMP 1", // bucle hasta que V00 sea 0 ----┘
        "INC V06", // incrementa V06 en 1
      ])
    ).toEqual([0, 10, 0, 0, 0, 0, 1, 0])
  })
})
