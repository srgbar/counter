import React, {ChangeEvent} from "react";
import s from "../App.module.css"
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";

export type RootPropsType = {
    value: number
    startValue: number
    maxValue: number
    onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    incData: () => void
    resData: () => void
    onClickSettings: () => void
    isMessage: boolean
    condition: boolean
}

const SeparateDisplayRootComponent = (props: RootPropsType) => {

    return (
        <div className={s.containerRoot}>
            <SettingsDisplay
                startValue={props.startValue}
                maxValue={props.maxValue}
                onChangeHandlerStart={props.onChangeHandlerStart}
                onChangeHandlerMax={props.onChangeHandlerMax}
                onClickSettings={props.onClickSettings}
                condition={props.condition}
            />
            <CounterDisplay
                type={"counterV1"}
                value={props.value}
                incData={props.incData}
                resData={props.resData}
                maxValue={props.maxValue}
                startValue={props.startValue}
                isMessage={props.isMessage}
                condition={props.condition}
            />
        </div>
    )
}

export default SeparateDisplayRootComponent