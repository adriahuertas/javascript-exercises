export default function wrapping(gifts) {
  if (!gifts) return []
  const result = []
  for (let i = 0; i < gifts.length; i++) {
    const length = gifts[i].length + 2
    const wrappedGift = "*"
      .repeat(length)
      .concat(`\n*${gifts[i]}*\n`)
      .concat("*".repeat(length))
    result.push(wrappedGift)
  }
  return result
}
