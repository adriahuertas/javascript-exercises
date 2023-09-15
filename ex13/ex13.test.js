import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"

import getFilesToBackup from "./ex13"

describe("getFilesToBackup", () => {
  it("should be a function", () => {
    expect(typeof getFilesToBackup).toBe("function")
  })

  it("should return an empty array when no files are passed", () => {
    expect(getFilesToBackup()).toEqual([])
  })

  it("should return an empty array when no changes are passed", () => {
    expect(getFilesToBackup("2020-01-01", [])).toEqual([])
  })

  it("should return the only item when only one change is passed and meets the criteria", () => {
    expect(getFilesToBackup(1546300800, [[1, 1546300900]])).toEqual([1])
  })
  it("should return [1, 3]", () => {
    const lastBackup = 1546300800
    const changes = [
      [3, 1546301100],
      [2, 1546300800],
      [1, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
    ]
    expect(getFilesToBackup(lastBackup, changes)).toEqual([1, 3])
  })

  it("should return [1, 2, 3]", () => {
    const lastBackup = 1546300800
    const changes = [
      [3, 1546301100],
      [2, 1546300800],
      [1, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [2, 1546301200],
    ]
    expect(getFilesToBackup(lastBackup, changes)).toEqual([1, 2, 3])
  })

  it("should return [1]", () => {
    const lastBackup = 1546300800
    const changes = [
      [1, 1546300900],
      [1, 1546301000],
      [1, 1546301100],
      [1, 1546301200],
      [1, 1546301300],
    ]
    expect(getFilesToBackup(lastBackup, changes)).toEqual([1])
  })

  it("should return [] when no files meet the criteria", () => {
    const lastBackup = 1546300800
    const changes = [
      [1, 1546300900],
      [1, 1546301000],
      [1, 1546301100],
      [1, 1546301200],
      [1, 1546301300],
    ]
    expect(getFilesToBackup(lastBackup, changes)).toEqual([1])
  })
})
