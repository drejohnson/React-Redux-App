import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import { CSSTransition } from 'react-transition-group';
import { fetchData } from '../store/actions';

import BookDetails from './BookDetails';

const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-gap: 1rem;
  padding: 6rem 1rem 2rem;
`;

const BookWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 25%;
  grid-gap: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  img {
    object-fit: contain;
    object-position: 50% 50%;
  }
`;

const BookInfo = styled.div`
  justify-self: center;
`;

const BookList = props => {
  const [showDetails, setShowDetails] = useState(false);
  const [bookView, setBookView] = useState();

  const toggleDetails = () => setShowDetails(!showDetails);

  const viewBookDetails = rank => {
    props.data
      .filter(item => item.rank === rank)
      .map(book => setBookView(book));
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    props.fetchData();
    console.log('bookView', bookView);
  }, [bookView]);
  return (
    <>
      <CSSTransition in={showDetails} timeout={300} classNames='show-details'>
        <BookDetails book={bookView} open={showDetails} close={toggleDetails} />
      </CSSTransition>

      <BooksWrapper>
        {props.data.map(book => (
          <BookWrapper
            key={book.primary_isbn10}
            onClick={() => viewBookDetails(book.rank)}
          >
            <ImgWrapper>
              <img src={book.book_image} />
            </ImgWrapper>
            <BookInfo>
              <h2>{book.title}</h2>
            </BookInfo>
          </BookWrapper>
        ))}
      </BooksWrapper>
    </>
  );
};

const mapDispatchToProps = {
  fetchData,
};

export default connect(
  state => state,
  mapDispatchToProps,
)(BookList);
