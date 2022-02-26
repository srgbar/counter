import {counterReducer, incValueAC, InitialStateType, resetAC, setValuesAC} from "./counter-reducer";

let initialState: InitialStateType

beforeEach(()=>{

    initialState = {
        value: 0,
        startValue: 2,
        maxValue: 5,
    }
})

test('increment value + 1', () => {

    const resultState = counterReducer(initialState, incValueAC())

    console.log(resultState.value)

    expect(resultState.value).toBe(1) // первостепенная проверка
    expect(resultState.startValue).toBe(2)
    expect(resultState.maxValue).toBe(5)
})

test('reset to start value', () => {

    const resultState = counterReducer(initialState, resetAC())

    expect(resultState.value === resultState.startValue).toBeTruthy() // первостепенная проверка
    expect(resultState.startValue).toEqual(resultState.value) // аналогичная проверка (второй вариант)
    expect(resultState.value).toBe(2)
})

test('change start value and max value', () => {

    const resultState = counterReducer(initialState, setValuesAC(4, 7))

    expect(resultState.value).toBe(resultState.startValue)
    expect(resultState.value).toBe(4)
    expect(resultState.startValue).toBe(4)
    expect(resultState.maxValue).toBe(7)
})