import { getUser, getUserActive } from '../../src/base-pruebas/05-funciones'
describe('test functions', () => {
  const toUser = {
    uid: 'ABC123',
    username: 'El_Papi1502',
    additionalProperty: ''
  }

  test('return user', () => {
    const user = getUser()
    expect(user).toStrictEqual(toUser)
  })

  test('return userActive', () => {
    const name = 'El_Papi1502'
    const user = getUserActive(name)
    expect(user).toStrictEqual({ uid: 'ABC567', username: name })
  })
  test('should return user object with additional properties', () => {
    const user = getUser()
    expect(user).toHaveProperty('uid')
    expect(user).toHaveProperty('username')
    expect(user).toHaveProperty('additionalProperty')
  })
})
