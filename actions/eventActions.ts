import * as ActionTypes from './actionTypes';
import { getCurrentDate } from '../utilities/utilities';
import { BACKEND_URL } from 'react-native-dotenv';

interface FetchEventRequestAction {
  type: typeof ActionTypes.FETCH_EVENT_REQUEST;
}

interface FetchEventSuccessAction {
  type: typeof ActionTypes.FETCH_EVENT_SUCCESS;
  payload: any;  // Define a more specific type based on your data structure
}

interface FetchEventFailureAction {
  type: typeof ActionTypes.FETCH_EVENT_FAILURE;
  payload: string;
}

export type EventActionTypes = FetchEventRequestAction | FetchEventSuccessAction | FetchEventFailureAction;

export const fetchEventRequest = (): FetchEventRequestAction => ({
  type: ActionTypes.FETCH_EVENT_REQUEST,
});

export const fetchEventSuccess = (data: any): FetchEventSuccessAction => ({
  type: ActionTypes.FETCH_EVENT_SUCCESS,
  payload: data,
});

export const fetchEventFailure = (error: string): FetchEventFailureAction => ({
  type: ActionTypes.FETCH_EVENT_FAILURE,
  payload: error,
});

export const fetchEvent = () => {
    return async (dispatch: any) => {
      dispatch(fetchEventRequest());
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => {
            controller.abort()
        }, 18000000)
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            signal: controller.signal,
            body: JSON.stringify({
            location: 'San Francisco, CA', // TODO: Make this dynamic
            date: getCurrentDate(),
          })
        });
        clearTimeout(timeoutId);
        const data = await response.json();
        let jsonArray = JSON.parse(data['response']);
        dispatch(fetchEventSuccess(jsonArray));
      } catch (error) {
        console.log(`Error:${error.toString()}`); // TODO: Replace with proper logging
        dispatch(fetchEventFailure(error.toString()));
      }
    };
};
  