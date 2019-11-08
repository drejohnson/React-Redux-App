import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import { fetchData } from '../store/actions';

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
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <BooksWrapper>
      {props.data.map(book => (
        <BookWrapper key={book.primary_isbn10}>
          <ImgWrapper>
            <img src={book.book_image} />
          </ImgWrapper>
          <BookInfo>
            <h2>{book.title}</h2>
            <h4>Written by {book.author}</h4>
          </BookInfo>
        </BookWrapper>
      ))}
    </BooksWrapper>
  );
};

const mapDispatchToProps = {
  fetchData,
};

export default connect(
  state => state,
  mapDispatchToProps,
)(BookList);
