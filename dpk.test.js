const { deterministicPartitionKey } = require('./dpk')

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey()
    expect(trivialKey).toBe('0')
  })

  it('Returns valid hash for valid input', () => {
    const key = deterministicPartitionKey('test')
    expect(key).toBe(
      '0fa3727b22cbb0a5271dddfcb7d414a1a512284913ccd690b198751de8100b1ea1935c1b63c35837696f8e73709431de092894581bec9bbfe6532106733af6d8'
    )
  })

  it('Returns valid hash for object', () => {
    const key = deterministicPartitionKey({ test: 1 })
    expect(key).toBe(
      '073a793ebccd0bdd4b0a8932fbb473ae645d92d06a01d3158c47f1c05c30c1dc421aa3f48d235ce0cb1ecdfd8c6e6e5d99c20510bd738953fb6fd99a5059c720'
    )
  })

  it('Returns valid hash for object with partitionKey', () => {
    let partition = { partitionKey: 1 }
    const key = deterministicPartitionKey(partition)
    expect(key).toBe(partition.partitionKey.toString())
  })
})
