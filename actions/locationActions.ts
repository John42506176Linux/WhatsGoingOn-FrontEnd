import { Dispatch } from 'redux';
import {
  GET_LOCATION_REQUEST,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAILURE,
} from './actionTypes';
import * as Location from 'expo-location';

export const getLocationRequest = () => ({
  type: GET_LOCATION_REQUEST,
});

export const getLocationSuccess = (location: any) => ({
  type: GET_LOCATION_SUCCESS,
  payload: location,
});

export const getLocationFailure = (error: string) => ({
  type: GET_LOCATION_FAILURE,
  payload: error,
});

export const getLocation = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getLocationRequest());
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        dispatch(getLocationFailure('Permission to access location was denied'));
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      dispatch(getLocationSuccess(location));
    } catch (error) {
      dispatch(getLocationFailure(error.message));
    }
  };
};