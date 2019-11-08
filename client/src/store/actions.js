export const FETCH_DATA_LOADING = 'FETCH_DATA_LOADING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

export const dataLoading = () => ({ type: FETCH_DATA_LOADING });

export const dataLoadSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const dataLoadFailure = error => ({
  type: FETCH_DATA_FAILED,
  payload: error,
});

export const fetchData = () => async dispatch => {
  dispatch(dataLoading());
  try {
    const res = await fetch(
      'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=6lCoWhaoHYUhjkpKwujA5sd3scna08JC',
    );

    const data = await res.json();
    dispatch(dataLoadSuccess(data.results.books));
  } catch (error) {
    dispatch(dataLoadFailure(error));
  }
};
