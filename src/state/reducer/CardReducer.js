export const CardReducer = (state = { cards: [], trans: [] }, action) => {     //we take default state because if we didnt any then it will show that we can take many default state 

    switch (action.type) {                                          //here we match type

        case "addCards":

            return {                                                // here we are doing pubs
                ...state,
                cards: action.payload,
            }

        case "addtrans":

            return {
                ...state,
                trans: action.payload
            }

        default:
            return state
    }
    return state;
}

