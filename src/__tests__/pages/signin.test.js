import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { SignIn } from '../../pages';
import { FirebaseContext } from '../../context/firebase';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve('I am signed in!')
    ),
  })),
};

describe('<SignIn />', () => {
  it('renders the sign in page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignIn />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('Email address'), {
        target: { value: 'jubbb123@gmail.com' },
      });
      await fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: '123456' },
      });
      fireEvent.click(getByTestId('sign-in'));

      expect(getByPlaceholderText('Email address').value).toBe(
        'jubbb123@gmail.com'
      );

      expect(getByPlaceholderText('Password').value).toBe('123456');
      expect(queryByTestId('error')).toBeFalsy();
      expect(mockHistoryPush).toHaveBeenCalledWith('/browse');
    });
  });
});
