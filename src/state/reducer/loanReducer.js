export const loanReducer = (state = { cats: [] }, action) => {
    switch (action.type) {
        case "addCats":
            return {                                // here we are doing pubs
                ...state,
                cats: action.payload,
            }
        default:
            return state
    }
    return state;
}