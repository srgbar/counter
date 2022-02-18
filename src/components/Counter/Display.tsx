import React from "react";
import s from "./Counter.module.css";

type DisplayPropsType = {
    countValue:number
    maxInputValue:number
    startValue:number
}

export function Display(props: DisplayPropsType) {
    return <>
        {props.countValue >= props.maxInputValue
            ? <div className={`${s.display} ${s.maxValue}`}>
                <span>{props.countValue}</span>
                <span className={s.errorName}>max value</span>
            </div>
            : <span className={s.display}>{props.countValue}</span>
        }
    </>;
}