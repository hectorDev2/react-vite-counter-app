import { getHello } from '../../src/base-pruebas/02-template-string'
describe('test template-string.js', () => {
  test('getSaludo should be return "hi fernando"', () => {
    const name = 'Fernando'
    const message = getHello(name)

    expect(message).toBe(`hi ${name}`)
  })
})
