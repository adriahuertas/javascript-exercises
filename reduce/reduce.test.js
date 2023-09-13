import { describe, it, expect } from "vitest"
import {
  total,
  stringConcat,
  totalVotes,
  shoppingSpree,
  flatten,
  voterResults,
  getNumberOfWatchers,
} from "./reduce.js"

describe("total", () => {
  it("should return the total of an array of numbers", () => {
    const actual = total([1, 2, 3])
    const expected = 6
    expect(actual).toBe(expected)
  })

  it("should return 0 when given an empty array", () => {
    const actual = total([])
    const expected = 0
    expect(actual).toBe(expected)
  })
})

describe("stringConcat", () => {
  it("should return an empty string when given an empty array", () => {
    const actual = stringConcat([])
    const expected = ""
    expect(actual).toBe(expected)
  })

  it(" should return a string of numbers", () => {
    const actual = stringConcat([1, 2, 3])
    const expected = "123"
    expect(actual).toBe(expected)
  })
})

describe("totalVotes", () => {
  it("should return 0 when given an empty array", () => {
    const actual = totalVotes([])
    const expected = 0
    expect(actual).toBe(expected)
  })

  it("should return the total number of voters", () => {
    const voters = [
      { name: "Bob", age: 30, voted: true },
      { name: "Jake", age: 32, voted: true },
      { name: "Kate", age: 25, voted: false },
      { name: "Sam", age: 20, voted: false },
      { name: "Phil", age: 21, voted: true },
      { name: "Ed", age: 55, voted: true },
      { name: "Tami", age: 54, voted: true },
      { name: "Mary", age: 31, voted: false },
      { name: "Becky", age: 43, voted: false },
      { name: "Joey", age: 41, voted: true },
      { name: "Jeff", age: 30, voted: true },
      { name: "Zack", age: 19, voted: false },
    ]
    const actual = totalVotes(voters)
    const expected = 7
    expect(actual).toBe(expected)
  })
})

describe("shoppingSpree", () => {
  it("should return 0 when given an empty array", () => {
    const actual = shoppingSpree([])
    const expected = 0
    expect(actual).toBe(expected)
  })

  it("should return the total price of the items in the array", () => {
    const wishlist = [
      { title: "Tesla Model S", price: 90000 },
      { title: "4 carat diamond ring", price: 45000 },
      { title: "Fancy hacky Sack", price: 5 },
      { title: "Gold fidgit spinner", price: 2000 },
      { title: "A second Tesla Model S", price: 90000 },
    ]
    const actual = shoppingSpree(wishlist)
    const expected = 227005
    expect(actual).toBe(expected)
  })
})

describe("flatten", () => {
  it("should return an empty array when given an empty array", () => {
    const actual = flatten([])
    const expected = []
    expect(actual).toEqual(expected)
  })

  it("should return a flattened array", () => {
    const actual = flatten([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
    const expected = [1, 2, 3, 4, 5, 6]
    expect(actual).toEqual(expected)
  })
})

describe("voterResults", () => {
  it("should return an empty object when given an empty array", () => {
    const actual = voterResults([])
    const expected = {}
    expect(actual).toEqual(expected)
  })

  it("should return an object with the correct number of voters", () => {
    const voters = [
      { name: "Bob", age: 30, voted: true },
      { name: "Jake", age: 32, voted: true },
      { name: "Kate", age: 25, voted: false },
      { name: "Sam", age: 20, voted: false },
      { name: "Phil", age: 21, voted: true },
      { name: "Ed", age: 55, voted: true },
      { name: "Tami", age: 54, voted: true },
      { name: "Mary", age: 31, voted: false },
      { name: "Becky", age: 43, voted: false },
      { name: "Joey", age: 41, voted: true },
      { name: "Jeff", age: 30, voted: true },
      { name: "Zack", age: 19, voted: false },
    ]
    const actual = voterResults(voters)
    const expected = {
      numYoungVotes: 1,
      numYoungPeople: 4,
      numMidVotesPeople: 3,
      numMidsPeople: 4,
      numOldVotesPeople: 3,
      numOldsPeople: 4,
    }
    expect(actual).toEqual(expected)
  })
})

describe("getNumberOfWatchers", () => {
  it("should return 0 when no username is given", () => {
    getNumberOfWatchers().then((res) => {
      const actual = res
      const expected = 0
      expect(actual).toBe(expected)
    })
  })

  it("should return the number of watcher for a given user", () => {
    let actual
    getNumberOfWatchers("colt").then((res) => {
      actual = res
      const expected = 152
      expect(actual).toBe(expected)
    })
  })
})
