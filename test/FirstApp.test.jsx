import { FirstApp } from '../src/FirstApp'
import { render, screen } from '@testing-library/react'

describe('first component app', () => {
  // test('checking Snapshot app', () => {
  //   const title = 'soy hector!'
  //   const { container } = render(<FirstApp title={title} />)

  //   expect(container).toMatchSnapshot()
  // })

  test('title h1', () => {
    const title = 'soy hector!'
    render(<FirstApp title={title} />)

    const h1 = screen.getByText(title)
    expect(h1.innerHTML).toBe(title)
  })
})
