type ActionType =
    ReturnType<typeof incValueAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof changeStartValueAC>
    | ReturnType<typeof changeMaxValueAC>
    | ReturnType<typeof setValuesAC>

export type InitialStateType = typeof initialState

const initialState = {
    value: 0,
    startValue: 0,
    maxValue: 5,
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "RESET":
            return {
                ...state, value: state.startValue
            }
        case "CHANGE-START-VALUE":
            return {
                ...state, startValue: action.startValue
            }
        case "CHANGE-MAX-VALUE":
            return {
                ...state, maxValue: action.maxValue
            }
        case "SET-VALUES":
            return {
                ...state, value: action.startValue, maxValue: action.maxValue, startValue: action.startValue
            }
        default:
            return state
    }
}

export const incValueAC = () => ({type: "INC-VALUE"} as const)
export const resetAC = () => ({type: "RESET"} as const)
export const changeStartValueAC = (startValue: number) => ({type: "CHANGE-START-VALUE", startValue} as const)
export const changeMaxValueAC = (maxValue: number) => ({type: "CHANGE-MAX-VALUE", maxValue} as const)
export const setValuesAC = (startValue: number, maxValue: number) => ({
    type: "SET-VALUES",
    startValue,
    maxValue
} as const)