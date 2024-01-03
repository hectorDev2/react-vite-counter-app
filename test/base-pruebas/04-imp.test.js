import { getHeroById, getHeroByOwner } from '../../src/base-pruebas/08-imp-exp'
describe('test to Hero', () => {
  test('get hero by id 2', () => {
    expect(getHeroById(2)).toEqual({
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
    })
  })

  test('get hero undefined ', () => {
    expect(getHeroById(100)).toBeUndefined()
  })

  test('get array with specific owner Marvel', () => {
    const owner = 'Marvel'
    const heroes = getHeroByOwner(owner)
    expect(heroes.length).toBe(2)
  })

  test('get array with error owner', () => {
    const owner = 'Mar'
    const heroes = getHeroByOwner(owner)
    expect(heroes.length).toBe(0)
  })
})
