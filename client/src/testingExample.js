// import { render, screen } from '@testing-library/react';
// import App from './App';

// [This is the default test when you build a react app, tests that spinny page]
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// SYNTAX LOOKS LIKE.. 
// test('description', () => {

// })
// it('description', () => {
    //[ render a component we want to test ]
    //[ find elements we want to interact with ]
    //[ interact with those elements (if there is interaction/events/actions)] 
    //[ assert that the results are as expected]
// })

// QUERY METHODS.. 
  // getBy/getAllBy - no match/multiple matches returns an error, the All versions returns an array for single and multiple matches
  // findBy/findAllBy - similar to getBy but async/await friendly
  // queryBy/queryAllBy - no match returns null (good for checking absense of an element)

  // getByRole - gets by <element> type, such as <button>, <h etc..
  // getByLabelText - 