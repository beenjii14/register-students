import * as actions from "../../../shared/redux/constants";

const initialState = {
    requesting: false,
    error: null,
    response: null,
    success: null
};

const reducer = (state = initialState, action: any) => {
    let newState = null;

    switch (action.type) {
        case actions.DETAILS_STUDENT_STARTS:
            newState = {
                ...state,
                requesting: true,
            };
            break;

        case actions.DETAILS_STUDENT_SUCCESS:
            newState = {
                ...state,
                response: action.payload,
                success: true,
            };
            break;

        case actions.DETAILS_STUDENT_FAILED:
            newState = {
                ...state,
                response: action.payload,
                success: false
            };
            break;

        case actions.DETAILS_STUDENT_ENDS:
            newState = {
                ...state,
                requesting: false,
                success: false
            };
            break;

        default:
            newState = state;
            break;
    }

    return newState;
};

export default reducer;