import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {changeMaxValueAC, changeStartValueAC, incValueAC, resetAC, setValuesAC} from "./bll/counter-reducer";
import GeneralDisplayRootComponent from "./components/GeneralDisplayRootComponent";
import {Navbar} from "./components/Navbar/Navbar";
import SeparateDisplayRootComponent from "./components/SeparateDisplayRootComponent";

const App = () => {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)

    const dispatch = useDispatch()

    const condition = startValue < 0 || startValue > maxValue || startValue === maxValue // проверка на условия ввода

    // const [countValue, setCountValue] = useState<number>(0) // текущее значение счетчика
    // const [startInputValue, setStartInputValue] = useState(0) // стартовое значение счетчика
    // const [maxInputValue, setMaxInputValue] = useState<number>(5) // макс значение счетчика

    const [isMessage, setIsMessage] = useState<boolean>(true) // показывать или нет сообщения вместо value


    // получаем стартовое и максимальное значения счетчика из Local Storage
    // useEffect(() => {
    //     const localStorageStartValueStr = localStorage.getItem("startInputValue")
    //     const localStorageMaxValueStr = localStorage.getItem("maxInputValue")
    //
    //     if (localStorageStartValueStr) {
    //         // setStartInputValue(JSON.parse(localStorageStartValueStr))
    //     }
    //     if (localStorageMaxValueStr) {
    //         // setMaxInputValue(JSON.parse(localStorageMaxValueStr))
    //     }
    //     console.log(localStorageStartValueStr, localStorageMaxValueStr)
    // }, [])

    const incData = () => {  // увеличение счетчика на единицу
        dispatch(incValueAC())
    }

    const resData = () => { // сброс значения счетчика до стартового
        // setCountValue(startInputValue)
        dispatch(resetAC(startValue))
    }

    // изменение стартового значения в настройках
    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValueAC(+e.currentTarget.value))
        setIsMessage(false)
    }

    // изменение максимального значения в настройках
    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(+e.currentTarget.value))
        setIsMessage(false)
    }

    const onClickSettings = () => { // передача настроек счетчика
        dispatch(setValuesAC(startValue, maxValue))
        setIsMessage(true)
        // localStorage.setItem("startInputValue", JSON.stringify(startValue))
        // localStorage.setItem("maxInputValue", JSON.stringify(maxValue))
    }

    return <div className={s.app}>
        <Navbar/>
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to="/counterV1"/>}/>
            <Route path="/counterV1" render={() => <SeparateDisplayRootComponent
                value={value}
                startValue={startValue}
                maxValue={maxValue}

                incData={incData}
                resData={resData}

                onChangeHandlerStart={onChangeHandlerStart}
                onChangeHandlerMax={onChangeHandlerMax}
                onClickSettings={onClickSettings}

                isMessage={isMessage}
                condition={condition}
            />}/>
            <Route path="/counterV2" render={() => <GeneralDisplayRootComponent
                value={value}
                startValue={startValue}
                maxValue={maxValue}

                incData={incData}
                resData={resData}

                onChangeHandlerStart={onChangeHandlerStart}
                onChangeHandlerMax={onChangeHandlerMax}
                onClickSettings={onClickSettings}

                isMessage={isMessage}
                condition={condition}
            />}/>
        </Switch>
    </div>
}

export default App
