import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"

function getFilesToBackup(lastBackup, changes) {
  if (!changes || !changes.length || !lastBackup) return []

  const filesChanged = []

  changes.map((change) => {
    if (change[1] > lastBackup) filesChanged.push(change[0])
  })

  if (!filesChanged.length) return []

  const filesChangedUnique = [...new Set(filesChanged)]
  // if (changes[0][1] > lastBackup) filesChanged.push(changes[0][0])
  console.log(filesChangedUnique)

  return filesChangedUnique.sort()
}

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
})
