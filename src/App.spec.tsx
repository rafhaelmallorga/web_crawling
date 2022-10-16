import { render } from "@testing-library/react"
import App from "./App"
import Header from "./components/Header"

test('sum', () => {
    const { getByText } = render(<Header />)
    
    expect(getByText('Web Crawling')).toBeTruthy()
})