import React from "react";
import s from "./BlockDisplay.module.css";

type DisplayPropsType = {
    countValue: number
    maxInputValue: number
    startInputValue: number
}

export function Display(props: DisplayPropsType) {

    const condition = props.startInputValue < 0 || props.startInputValue > props.maxInputValue || props.startInputValue === props.maxInputValue

    return <>
        {!condition
            ? props.countValue >= props.maxInputValue
                ? <div className={`${s.display} ${s.maxValue}`}>
                    <span>{props.countValue}</span>
                    <span className={s.errorName}>max value</span>
                </div>
                : <span className={s.display}>{props.countValue}</span>

            : <span className={`${s.display} ${s.errorSettings}`}>Incorrect value!</span>
        }
    </>;
}