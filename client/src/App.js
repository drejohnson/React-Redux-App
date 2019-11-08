import React from 'react';
import styled from 'styled-components/macro';

import BookList from './components/BookList';
import Header from './components/Header';

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

function App() {
  return (
    <Wrapper className='App'>
      <Header />
      <BookList />
    </Wrapper>
  );
}

export default App;
