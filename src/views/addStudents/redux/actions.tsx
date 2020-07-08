import * as actions from '../../../shared/redux/constants';

export const starts = () => {
  return {
    type: actions.REQUEST_STUDENT_STARTS,
    payload: {
      requesting: true,
    },
  };
};

export const ends = () => {
  return {
    type: actions.REQUEST_STUDENT_ENDS,
    payload: {
      requesting: true,
    },
  };
};

export const fails = (error: any) => {
  return {
    type: actions.REQUEST_STUDENT_FAILED,
    payload: error,
  };
};

export const success = (response: any) => {
  return {
    type: actions.REQUEST_STUDENT_SUCCESS,
    payload: response,
  };
};

export const fetch = (data: any) => {
  return {
    type: actions.REQUEST_STUDENT_FETCH,
    payload: data,
  };
};

export const remove = (data: any) => {
  return {
    type: actions.REQUEST_STUDENT_REMOVE,
    payload: data,
  };
};

export const reset = () => {
  return {
    type: actions.RESET_STATE,
  };
};
