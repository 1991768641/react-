import {
    LOADDATA,
    ClASSDATA
} from 'pages/action-type.js'

const defaultState = {
    list: [],
    classifylist: []
}

export default (state = defaultState, action) => {
    // console.log(action.data)
    switch (action.type) {
        case ClASSDATA:
            return {
                classifylist: action.data
            }
        case LOADDATA:
            return {
                list: action.data
            }
        default:
            return state
    }
}