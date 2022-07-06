const crypto = require('crypto')

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = '0'
  const MAX_PARTITION_KEY_LENGTH = 256
  let candidate

  if (!event) {
    return TRIVIAL_PARTITION_KEY
  }

  let { partitionKey } = event

  if (partitionKey) {
    candidate =
      typeof candidate === 'string'
        ? partitionKey
        : JSON.stringify(partitionKey)
  } else {
    const data = JSON.stringify(event)
    candidate = createHash(data)
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate)
  }

  return candidate
}

function createHash(data) {
  return crypto.createHash('sha3-512').update(data).digest('hex')
}
