import React from "react";
import s from "../../App.module.css"

type DisplayPropsType = {
    countValue: number
    maxInputValue: number
    isMessage: boolean
    condition: boolean
}

export function Display(props: DisplayPropsType) {

    return <>
        {!props.condition
            ? !props.isMessage
                ? <span className={`${s.displayCount} ${s.messageName}`}>Enter values and press 'set'</span>
                : props.countValue >= props.maxInputValue
                    ? <div className={`${s.displayCount} ${s.maxValue}`}>
                        <span>{props.countValue}</span>
                        <span className={s.errorName}>max value</span>
                    </div>
                    : <span className={s.displayCount}>{props.countValue}</span>
            : <span className={`${s.displayCount} ${s.errorSettings}`}>Incorrect value!</span>
        }
    </>
}