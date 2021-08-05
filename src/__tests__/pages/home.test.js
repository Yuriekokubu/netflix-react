import React from 'react';
import { Home } from '../../pages';
import { getAllByAltText, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test('render the homepage', () => {
  const { getAllByText, getByText, getAllByPlaceholderText } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
  expect(getByText('Watch anywhere. Cancel at any time.')).toBeTruthy();
  expect(getAllByPlaceholderText('Email address')).toBeTruthy();
  expect(getAllByText('Try it now')).toBeTruthy();
  expect(
    getAllByText(
      'Ready to watch? Enter your email to create or restart your membership.'
    )
  ).toBeTruthy();
});
