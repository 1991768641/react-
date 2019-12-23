import {
    LOADDATA,
    SETSHOW
} from 'pages/action-type.js'

const defaultState = {
    list: [],
    classifylist: [],
    IsShowMap:localStorage.getItem('flag')==='false'?false:true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        // case ClASSDATA:
        //     return {
        //         classifylist: action.data
        //     }
        case LOADDATA:
            return {
                ...state,
                list: action.data
            }
        case SETSHOW:
            return {
                ...state,
                IsShowMap:action.data
            }
        default:
            return state
    }
}