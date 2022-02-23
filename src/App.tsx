import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import RootComponent from "./components/RootComponent";
import {Navbar} from "./Navbar/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import GeneralDisplay from "./components/General Display/GeneralDisplay";

const App = () => {

    const [countValue, setCountValue] = useState<number>(0) // текущее значение счетчика
    const [startInputValue, setStartInputValue] = useState(0) // стартовое значение счетчика
    const [maxInputValue, setMaxInputValue] = useState<number>(5) // макс значение счетчика
    const [isMessage, setIsMessage] = useState<boolean>(true) // показывать или нет сообщения вместо value
    const condition = startInputValue < 0 || startInputValue > maxInputValue || startInputValue === maxInputValue // проверка на условия ввода

    // сохраняем стартовое и максимальное значения счетчика в Local Storage
    useEffect(() => {
        const localStorageStartValueStr = localStorage.getItem("startInputValue")
        const localStorageMaxValueStr = localStorage.getItem("maxInputValue")

        if (localStorageStartValueStr) {
            setStartInputValue(JSON.parse(localStorageStartValueStr))
        }
        if (localStorageMaxValueStr) {
            setMaxInputValue(JSON.parse(localStorageMaxValueStr))
        }
    }, [])

    const incData = () => {  // увеличение счетчика на единицу
        setCountValue(countValue + 1)
    }

    const resData = () => { // сброс значения счетчика до стартового
        setCountValue(startInputValue)
    }

    const onClickSettings = () => { // передача настроек счетчика
        setCountValue(startInputValue)
        setMaxInputValue(maxInputValue)
        setIsMessage(true)
        localStorage.setItem("startInputValue", JSON.stringify(startInputValue))
        localStorage.setItem("maxInputValue", JSON.stringify(maxInputValue))
    }

    // изменение стартового значения в настройках
    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartInputValue(+e.currentTarget.value)
        setIsMessage(false)
    }

    // изменение максимального значения в настройках
    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxInputValue(+e.currentTarget.value)
        setIsMessage(false)
    }

    return <div className={s.app}>
        <Navbar/>
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to="/counterV1"/>}/>
            <Route path="/counterV1" render={() => <RootComponent
                countValue={countValue}
                startInputValue={startInputValue}
                maxInputValue={maxInputValue}

                incData={incData}
                resData={resData}

                onChangeHandlerStart={onChangeHandlerStart}
                onChangeHandlerMax={onChangeHandlerMax}
                onClickSettings={onClickSettings}

                isMessage={isMessage}
                condition={condition}
            />}/>
            <Route path="/counterV2" render={() => <GeneralDisplay
                countValue={countValue}
                startInputValue={startInputValue}
                maxInputValue={maxInputValue}

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
