import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  color: #111;
  background: white;
  width: 100%;
  height: 100vh;
  padding: 2rem;

  span {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;

    &:hover {
      cursor: pointer;
    }
  }

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
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

const Details = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const BookInfo = styled.div`
  max-width: 600px;
  padding: 1rem;

  a {
    color: indianred;
    text-decoration: underline;
  }
`;

const BookDetails = ({ book, open, close }) =>
  open
    ? ReactDOM.createPortal(
        <>
          <Wrapper>
            <span onClick={close}>X</span>
            <Details>
              <ImgWrapper>
                <img src={book.book_image} />
              </ImgWrapper>
              <BookInfo>
                <h4>Ranked number {book.rank}</h4>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <p>Written by {book.author}</p>
                <p>Published by {book.publisher}</p>
                <div>
                  <h4>Available for purchase at:</h4>
                  <ul>
                    {book.buy_links.map(link => (
                      <li key={link.name}>
                        <a href={link.url}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </BookInfo>
            </Details>
          </Wrapper>
        </>,
        document.body,
      )
    : null;

export default BookDetails;
