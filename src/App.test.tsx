import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axiosMock from 'axios';
import App from './App';

jest.mock('axios');

const jokes = [{
    "id":1,
    "type":"general",
    "setup":"Why does Norway have barcodes on their battleships?",
    "punchline":"So when they get back to port, they can Scandinavian."
  },{
    "id":2,
    "type":"general",
    "setup":"Bad at golf?",
    "punchline":"Join the club."
  },{
    "id":3,
    "type":"general",
    "setup":"Why do you never see elephants hiding in trees?",
    "punchline":"Because they're so good at it."
  },{
    "id":4,
    "type":"general",
    "setup":
    "When does a joke become a dad joke?",
    "punchline":"When it becomes apparent."
  }
];

beforeEach(() => {
	axiosMock.get.mockReturnValueOnce({data: jokes});
});

it('ContainerJokeWindow successfully fetches jokes', async () => { 
  await render(<App />); 

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith('https://official-joke-api.appspot.com/random_ten');
});

it('renders without crashing', async () => {
  const div = document.createElement('div');
  await ReactDOM.render(<App />, div);
});

it('App should take a snapshot', async () => {
  const { asFragment } = await render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});

it('Header elements rendered', async () => { 
  const {getByTestId, getByText} = await render(<App />); 
  
  expect(getByText('Random Jokes', {
  	selector: 'a',
  })).toBeInTheDocument();
  expect(getByTestId('info-icon')).toBeVisible();
  expect(getByTestId('github-icon')).toBeVisible();
  expect(getByTestId('linkedin-icon')).toBeVisible();
});

it('Move between jokes when DirectedButtons are pressed', async () => {
  const {getByTestId, getByText} = await render(<App />);

  expect(getByTestId('down-button')).toBeVisible();
  expect(getByTestId('up-button')).toBeVisible();

  expect(getByText(jokes[0].setup)).toBeVisible()

  fireEvent.click(getByTestId('down-button'));
  expect(getByText(jokes[1].setup)).toBeVisible();

  fireEvent.click(getByTestId('up-button'));
  expect(getByText(jokes[0].setup)).toBeVisible();
})

it('Clicking JokeCard reveals the joke', async () => {
  const {queryByText, getByTestId} = await render(<App />);

  expect(queryByText(jokes[0].setup)).toBeVisible();
  expect(queryByText(jokes[0].punchline)).not.toBeInTheDocument();

  expect(getByTestId('joke-card-setup')).toBeVisible();
  fireEvent.click(getByTestId('joke-card-setup'));

  expect(queryByText(jokes[0].punchline)).toBeVisible();
});

it('Change jokes when revealed does not reveal the next joke', async () => {
  const {getByTestId, getByText, queryByText} = await render(<App />);

  expect(getByText(jokes[0].setup)).toBeVisible()
  expect(queryByText(jokes[0].punchline)).not.toBeInTheDocument();

  expect(getByTestId('joke-card-setup')).toBeVisible();
  fireEvent.click(getByTestId('joke-card-setup'));

  expect(getByTestId('down-button')).toBeVisible();
  fireEvent.click(getByTestId('down-button'));

  expect(getByText(jokes[1].setup)).toBeVisible();
  expect(queryByText(jokes[0].punchline)).not.toBeInTheDocument();
  expect(queryByText(jokes[1].punchline)).not.toBeInTheDocument();
})

it('FilterButton filters joke types by calling different API endpoints', async () => {
	axiosMock.get.mockReturnValueOnce({data: jokes});
  const {queryByText, getByTestId, getAllByTestId} = await render(<App />);

  expect(getByTestId('filter-button')).toBeVisible();

  fireEvent.click(getByTestId('filter-button'));
  fireEvent.click(getAllByTestId('general-jokes-choice')[0]);
  axiosMock.get.mockReturnValueOnce({data: jokes});
  expect(axiosMock.get).toHaveBeenCalledWith('https://official-joke-api.appspot.com/jokes/general/ten');

  fireEvent.click(getByTestId('filter-button'));
  fireEvent.click(getAllByTestId('programming-jokes-choice')[0]);
  axiosMock.get.mockReturnValueOnce({data: jokes});
  expect(axiosMock.get).toHaveBeenCalledWith('https://official-joke-api.appspot.com/jokes/programming/ten');

  fireEvent.click(getByTestId('filter-button'));
  fireEvent.click(getAllByTestId('all-jokes-choice')[0]);
  axiosMock.get.mockReturnValueOnce({data: jokes});
  expect(axiosMock.get).toHaveBeenCalledWith('https://official-joke-api.appspot.com/random_ten');
});

it('Clicking info icon opens about-website card', async () => {
  const {getByTestId} = await render(<App />);

  expect(getByTestId('info-icon')).toBeVisible();
  expect(getByTestId('about-card')).not.toBeVisible();

  fireEvent.click(getByTestId('info-icon'));
  expect(getByTestId('about-card')).toBeVisible();
});