import { getImage } from '../../src/base-pruebas/11-async-await'
describe('test async await', () => {
  test('async await', async () => {
    const image = await getImage()
    console.log({ image })
    expect(typeof image).toBe('string')
  })
})
