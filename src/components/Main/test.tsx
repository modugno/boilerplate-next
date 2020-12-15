import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should be render component', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /olá mundo/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
