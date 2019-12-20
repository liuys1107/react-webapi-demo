import React from 'react'
import { App } from './app'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

const renderApp = () => {
  const { getByText } = render(<App />)

  return { getByText };
};

describe('Sample test', () => {
  test('render app without crashes', () => {
    const text = 'Hello world'
    const { getByText } = renderApp()
    const container = getByText(text)

    expect(container).toBeInTheDocument()
  })
});
