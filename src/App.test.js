import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test.skip('should display a "sign in" button when user is logged out', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
