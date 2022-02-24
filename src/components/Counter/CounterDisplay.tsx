import React from "react";
import s from "../../App.module.css"
import Button from "../Button/Button";
import {Display} from "./Display";
import {useHistory} from "react-router-dom";

export type CounterPropsType = {
    value: number
    incData: () => void
    resData: () => void
    maxValue: number
    startValue: number
    isMessage: boolean
    condition: boolean
    type: "counterV1" | "counterV2"
}

const CounterDisplay = (props: CounterPropsType) => {

    const history = useHistory() //для изменения адреса

    const setButtonHandler = () => { // попадаем в окно настроек из дисплея счетчика при клике по кнопке SET
        history.push("/counterV2/settings")
    }

    if (props.type === 'counterV1') {
        return <div className={s.containerDisplay}>
            <Display value={props.value}
                     maxValue={props.maxValue}
                     isMessage={props.isMessage}
                     condition={props.condition}
            />
            <div className={s.containerButton}>
                <Button
                    titleButton={"INC"}
                    disable={props.value >= props.maxValue}
                    onClickHandler={props.incData}
                />
                <Button
                    titleButton={"RESET"}
                    disable={props.value <= props.startValue}
                    onClickHandler={props.resData}
                />
            </div>
        </div>
    } else if (props.type === 'counterV2') {
        return <div className={s.containerDisplay}>
            <Display value={props.value}
                     maxValue={props.maxValue}
                     isMessage={props.isMessage}
                     condition={props.condition}
            />
            <div className={s.containerButton}>
                <Button
                    titleButton={"INC"}
                    disable={props.value >= props.maxValue}
                    onClickHandler={props.incData}
                />
                <Button
                    titleButton={"RESET"}
                    disable={props.value <= props.startValue}
                    onClickHandler={props.resData}
                />
                <Button
                    titleButton={"SET"}
                    disable={!!props.condition}
                    onClickHandler={setButtonHandler}
                />
            </div>
        </div>
    } else {
        return <div>no type defined</div>
    }
}

export default CounterDisplay
