import React from "react";
import s from "../../App.module.css"
import Button from "../Button/Button";
import {Display} from "./Display";

export type CounterPropsType = {
    countValue: number
    incData: () => void
    resData: () => void
    maxInputValue: number
    isMessage: boolean
    condition: boolean
}

const CounterDisplay = (props: CounterPropsType) => {
    return <div className={s.containerDisplay}>
        <Display countValue={props.countValue}
                 maxInputValue={props.maxInputValue}
                 isMessage={props.isMessage}
                 condition={props.condition}
        />
        <div className={s.containerButton}>
            <Button
                titleButton={"INCREASE"}
                disable={props.countValue >= props.maxInputValue}
                onClickHandler={props.incData}
            />
            <Button
                titleButton={"RESET"}
                disable={props.countValue <= 0}
                onClickHandler={props.resData}
            />
        </div>
    </div>
}

export default CounterDisplay
