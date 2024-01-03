import { usContext } from '../../src/base-pruebas/06-deses-obj'
describe('should return an object with nameKey, years, and latlng properties', () => {
  test('should return an object with nameKey, years, and latlng properties', () => {
    const result = usContext({ key: '123', name: 'John', years: 5 })
    expect(result).toEqual({
      nameKey: '123',
      years: 5,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    })
  })
})
