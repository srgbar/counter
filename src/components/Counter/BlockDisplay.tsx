import React from "react";
import s from "./BlockDisplay.module.css";
import Button from "../Button/Button";
import {Display} from "./Display";

export type CounterPropsType = {
    countValue: number
    incData: () => void
    resData: () => void
    maxInputValue: number
    startInputValue: number
}

const BlockDisplay = (props: CounterPropsType) => {
    return <div className={s.back}>
        <Display countValue={props.countValue}
                 maxInputValue={props.maxInputValue}
                 startInputValue={props.startInputValue}

        />
        <div className={s.fon}>
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

export default BlockDisplay
