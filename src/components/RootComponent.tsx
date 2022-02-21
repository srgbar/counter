import React, {ChangeEvent} from "react";
import s from "../App.module.css"
import CounterDisplay from "./Counter/CounterDisplay";
import {SettingsDisplay} from "./Settings/SettingsDisplay";

export type RootPropsType = {
    countValue: number
    startInputValue: number
    maxInputValue: number
    onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    incData: () => void
    resData: () => void
    onClickSettings: () => void
    isMessage: boolean
    condition: boolean
}

const RootComponent = (props: RootPropsType) => {

    return (
        <div className={s.containerRoot}>
            <SettingsDisplay
                onChangeHandlerStart={props.onChangeHandlerStart}
                onChangeHandlerMax={props.onChangeHandlerMax}
                startInputValue={props.startInputValue}
                maxInputValue={props.maxInputValue}
                onClickSettings={props.onClickSettings}
                condition={props.condition}
            />
            <CounterDisplay
                countValue={props.countValue}
                incData={props.incData}
                resData={props.resData}
                maxInputValue={props.maxInputValue}
                isMessage={props.isMessage}
                condition={props.condition}
            />
        </div>
    )
}

export default RootComponent