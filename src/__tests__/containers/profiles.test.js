import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { SelectProfileContainer } from '../../containers/profiles';
import { BrowserRouter } from 'react-router-dom';

describe('<Profiles />', () => {
  it('renders the <Profiles />', () => {
    const user = { displayName: 'Tae', photoURL: 'profile.png' };
    const setProfile = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <SelectProfileContainer
          user={user}
          setProfile={setProfile}
        ></SelectProfileContainer>
      </BrowserRouter>
    );
    fireEvent.click(getByTestId('user-profile'));
    expect(setProfile).toHaveBeenCalled();
  });
});
