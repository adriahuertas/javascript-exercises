import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"

import fixLetter from "./ex16"

describe("fixLetter", () => {
  it("should be a function", () => {
    expect(typeof fixLetter).toBe("function")
  })

  it("should delete leading and trailing spaces", () => {
    expect(fixLetter(" A ")).toBe("A.")
  })

  it("should remove leading spaces before dot, comma, question mark or exclamation", () => {
    expect(fixLetter(" A .")).toBe("A.")
    expect(fixLetter(" A ?")).toBe("A?")
    expect(fixLetter(" A !")).toBe("A!")
  })

  it("should not end with a comma", () => {
    expect(fixLetter(" Asd ,")).toBe("Asd.")
  })

  it("should replace any amount of spaces with a single space", () => {
    expect(fixLetter(" A  B ")).toBe("A B.")
  })

  it("questions should end with only one question mark", () => {
    expect(fixLetter(" A???? ")).toBe("A?")
  })

  it("should let one space after comma", () => {
    expect(fixLetter(" A,B ")).toBe("A, B.")
  })

  it("each sentence should start with a capital letter", () => {
    expect(fixLetter("a b? adios! nos vemos? claro!")).toBe(
      "A b? Adios! Nos vemos? Claro!"
    )
  })

  it("santa claus/Santa claus/santa Claus/SaNTa ClAuS should be Santa Claus", () => {
    expect(fixLetter("Anything saNta cLaUs anything")).toBe(
      "Anything Santa Claus anything."
    )
  })

  it("should end with a dot if it doesn't end with a question/interrogation mark", () => {
    expect(fixLetter("a b")).toBe("A b.")
  })

  it("should not add a dot if the sentence ends with a question mark", () => {
    expect(fixLetter("a basdasd?")).toBe("A basdasd?")
  })

  it("shoud not add a final dot if the sentence ends with exclamation mark", () => {
    expect(fixLetter("a basdasd!")).toBe("A basdasd!")
  })
})
