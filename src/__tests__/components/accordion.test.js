import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import faqsData from '../../fixtures/faqs';
import { Accordion } from '../../components';

describe('<Accordion />', () => {
  it('renders the <Accordion /> with populated data', () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqsData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    );

    expect(getByText('Frequently Asked Questions')).toBeTruthy();
    expect(getByText('What is Netflix?')).toBeTruthy();
    expect(getByText('How much does Netflix cost?')).toBeTruthy();
    expect(getByText('Where can I watch?')).toBeTruthy();
    expect(getByText('How do I cancel?')).toBeTruthy();
    expect(getByText('What can I watch on Netflix?')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('opens and closes the <Accordion /> component', () => {
    const { container, getByText, queryByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqsData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body data-testid="accordion-body">
                {item.body}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    );

    fireEvent.click(queryByText('What is Netflix?'));
    fireEvent.click(getByText('What is Netflix?'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
