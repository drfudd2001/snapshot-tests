import { render, screen } from '@testing-library/react'
import App from './App'
// import renderer from 'react-test-renderer'

// This first test is commented out since we have the other snapshot test that checks the GitHubCard component
// test('renders a snapshot', () => {
//   const tree = renderer.create(<App/>).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('renders text drfudd2001', () => {
  render(<App />)
  const nameElement = screen.getByText(/Elmer Figueroa-Garcia/i)
  expect(nameElement).toBeInTheDocument()
});