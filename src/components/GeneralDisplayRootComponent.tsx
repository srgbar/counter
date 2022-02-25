import React, {ChangeEvent} from "react";
import s from "../App.module.css";
import {Route, useHistory} from "react-router-dom";
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";
import {RootPropsType} from "./SeparateDisplayRootComponent";

const GeneralDisplayRootComponent = (props: RootPropsType) => {

    const history = useHistory() //для изменение адреса

    const onClickSettingsV2 = () => { // попадаем на дисплей счетчика из окна настроек при клике по кнопке SET
        props.onClickSettings()
        history.push("/counterV2")
    }

    return (
        <div>
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
        </div>
    )
}

export default GeneralDisplayRootComponent