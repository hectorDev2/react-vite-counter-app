describe('Test in demo:😃', () => {
  test('this test must be error', () => {
    // 1. initialization
    const message1 = 'Hola Mundo'

    // 2. feeling
    const message2 = message1.trim()

    // 3. watch the result
    expect(message1).toBe(message2)
  })
})
