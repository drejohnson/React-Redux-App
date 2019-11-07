import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions';

const BookList = props => {
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <>
      <div>Books</div>
      {props.data.map(book => (
        <div key={book.primary_isbn10}>
          <img src={book.book_image} />
          <div>
            <h2>{book.title}</h2>
            <h4>Written by {book.author}</h4>
          </div>
        </div>
      ))}
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
