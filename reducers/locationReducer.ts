import {
    GET_LOCATION_REQUEST,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAILURE,
  } from '../actions/actionTypes';
  
  export interface LocationState {
    loading: boolean;
    data: any;
    error: string | null;
  }
  
  const initialState: LocationState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const locationReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case GET_LOCATION_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_LOCATION_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case GET_LOCATION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default locationReducer;