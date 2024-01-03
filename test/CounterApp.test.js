import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('my counter App', () => {
  test('should check snapshot', () => {
    const { container } = render(<CounterApp value={13} />)
    expect(container).toMatchSnapshot()
  })

  test('should render the counter title', () => {
    render(<CounterApp value={13} />)

    const heading = screen.getByRole('heading', { level: 2 }).innerHTML
    expect(heading).toContain('13')
  })

  test('click on button +1', () => {
    render(<CounterApp value={13} />)
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('14')).toBeTruthy()
  })

  test('click on button -1', () => {
    render(<CounterApp value={13} />)
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText('12')).toBeTruthy()
  })

  test('click on button reset', () => {
    render(<CounterApp value={13} />)
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('Reset'))
    expect(
      screen.getByRole('button', {
        name: 'btn-reset'
      })
    ).toBeTruthy()
  })
})
