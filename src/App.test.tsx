import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the site shell and section navigation', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'TV Programs' })).toHaveAttribute('href', '/')
    expect(screen.getByText('Programs')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('heading', { name: "I'm Taylor Vance. I program." })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })
})
