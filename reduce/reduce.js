import axios from "axios"

export const total = (arr) => {
  if (!arr || !arr.length) return 0
  const initialValue = 0
  const reducer = (sum, val) => sum + val
  const result = arr.reduce(reducer, 0)
  return result
}

// total([1, 2, 3]) // 6

export const stringConcat = (arr) => {
  const reducer = (sum, val) => sum + val.toString()
  const initialValue = ""
  return arr.reduce(reducer, initialValue)
}

// stringConcat([1, 2, 3]) // "123"

export const totalVotes = (arr) => {
  if (!arr || !arr.length) return 0

  const reducer = (sum, val) => sum + (val.voted ? 1 : 0)
  const initialValue = 0
  return arr.reduce(reducer, initialValue)
}

//console.log(totalVotes(voters)) // 7

export const shoppingSpree = (arr) => {
  if (!arr || !arr.length) return 0

  return arr.reduce((sum, val) => sum + val.price, 0)
}

// console.log(shoppingSpree(wishlist)); // 227005

export const flatten = (arr) => {
  if (!arr || !arr.length) return []

  const reducer = (sum, val) => sum.concat(val)
  const initialValue = []

  return arr.reduce(reducer, initialValue)
}

// console.log(flatten(arrays)) // ["1", "2", "3", true, 4, 5, 6];

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

export const voterResults = (arr) => {
  if (!arr || !arr.length) return {}

  const initialResults = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  }
  const reducer = (sum, val) => {
    if (val.age >= 18 && val.age <= 25) {
      sum.numYoungPeople += 1
      if (val.voted) {
        sum.numYoungVotes += 1
      }
    } else if (val.age >= 26 && val.age <= 35) {
      sum.numMidsPeople += 1
      if (val.voted) {
        sum.numMidVotesPeople += 1
      }
    } else if (val.age >= 36) {
      sum.numOldsPeople += 1
      if (val.voted) {
        sum.numOldVotesPeople += 1
      }
    }
    return sum
  }
  return arr.reduce(reducer, initialResults)
}

export const getNumberOfWatchers = async (username) => {
  if (!username) return 0
  const baseUrl = `https://api.github.com/users/${username}/repos`
  const res = await axios.get(baseUrl)
  const data = await res.data
  const reducer = (sum, val) => sum + val.watchers_count
  const initialValue = 0
  return data.reduce(reducer, initialValue)
}
