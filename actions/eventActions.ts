import * as ActionTypes from './actionTypes';
import { Tweet } from '../models/tweet';
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
        const response = await fetch('http://10.0.2.2:8002/generate-event', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
        location: 'San Francisco'
        })
        });
        clearTimeout(timeoutId);
        const data = await response.json();
        let jsonArray = JSON.parse(data['response']);
        // Assuming that your Tweet class is defined and takes an object in its constructor
        const tweets = jsonArray.map(jsonTweet => Tweet.fromJSON(jsonTweet));
        dispatch(fetchEventSuccess(tweets));
      } catch (error) {
        console.log(`Error:${error.toString()}`);
        dispatch(fetchEventFailure(error.toString()));
      }
    };
};
  