export default function distributeGifts(packOfGifts, reindeers) {
  if (!packOfGifts || !reindeers) return 0

  // Calculate pack of gifts weight
  const packOfGiftsWeight = packOfGifts.reduce(
    (acc, gift) => acc + gift.length,
    0
  )
  // Calculate reindeers weight
  const reindeersWeight = reindeers.reduce(
    (acc, reindeer) => acc + reindeer.length * 2,
    0
  )

  const totalPacksOfGifts = Math.floor(reindeersWeight / packOfGiftsWeight)

  return totalPacksOfGifts
}
