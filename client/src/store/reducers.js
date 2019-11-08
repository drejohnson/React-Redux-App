import {
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
} from './actions';

export const initialState = {
  data: [],
  error: null,
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: null,
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        data: [],
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
