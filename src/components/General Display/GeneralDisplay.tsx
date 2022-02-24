import React, {ChangeEvent} from "react";
import s from "../../App.module.css";
import CounterDisplay from "../Counter/CounterDisplay";
import {Route, useHistory} from "react-router-dom";
import {SettingsDisplay} from "../Settings/SettingsDisplay";

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

const GeneralDisplay = (props: RootPropsType) => {

    const history = useHistory() //для изменение адреса

    const onClickSettingsV2 = () => { // попадаем на дисплей счетчика из окна настроек при клике по кнопке SET
        props.onClickSettings()
        history.push("/counterV2")
    }

    return (
        <div>
            <Route exact path="/counterV2" render={() =>
                <div className={s.containerRoot}>
                    <CounterDisplay
                        type={"counterV2"}
                        value={props.value}
                        incData={props.incData}
                        resData={props.resData}
                        maxValue={props.maxValue}
                        startValue={props.startValue}
                        isMessage={props.isMessage}
                        condition={props.condition}
                    />
                </div>}/>
            <Route exact path="/counterV2/settings" render={() =>
                <div className={s.containerRoot}>
                    <SettingsDisplay
                        startValue={props.startValue}
                        maxValue={props.maxValue}

                        onChangeHandlerStart={props.onChangeHandlerStart}
                        onChangeHandlerMax={props.onChangeHandlerMax}

                        condition={props.condition}
                        onClickSettings={onClickSettingsV2}
                    />
                </div>}/>
        </div>
    )
}

export default GeneralDisplay