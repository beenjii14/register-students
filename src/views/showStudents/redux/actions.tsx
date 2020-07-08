import * as actions from '../../../shared/redux/constants';

export const starts = () => {
    return {
        type: actions.LIST_STUDENT_STARTS,
        payload: {
            requesting: true,
        }
    }
}

export const ends = () => {
    return {
        type: actions.LIST_STUDENT_ENDS,
        payload: {
            requesting: true,
        }
    }
}

export const fails = (error: any) => {
    return {
        type: actions.LIST_STUDENT_FAILED,
        payload: error
    }
}

export const success = (response: any) => {
    return {
        type: actions.LIST_STUDENT_SUCCESS,
        payload: response
    }
}

export const fetch = () => {
    return {
        type: actions.LIST_STUDENT_FETCH,
    }
}
