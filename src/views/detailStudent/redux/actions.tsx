import * as actions from '../../../shared/redux/constants';

export const starts = () => {
    return {
        type: actions.DETAILS_STUDENT_STARTS,
        payload: {
            requesting: true,
        }
    }
}

export const ends = () => {
    return {
        type: actions.DETAILS_STUDENT_ENDS,
        payload: {
            requesting: true,
        }
    }
}

export const fails = (error: any) => {
    return {
        type: actions.DETAILS_STUDENT_FAILED,
        payload: error
    }
}

export const success = (response: any) => {
    return {
        type: actions.DETAILS_STUDENT_SUCCESS,
        payload: response
    }
}

export const fetch = (data: any) => {
    return {
        type: actions.DETAILS_STUDENT_FETCH,
        payload: data
    }
}
