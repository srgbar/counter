import React from "react";
import s from "../../App.module.css"

type DisplayPropsType = {
    value: number
    maxValue: number
    isMessage: boolean
    condition: boolean
}

export function Display(props: DisplayPropsType) {

    return <>
        {!props.condition
            ? !props.isMessage
                ? <span className={`${s.displayCount} ${s.messageName}`}>Enter values and press 'set'</span>
                : props.value >= props.maxValue
                    ? <div className={`${s.displayCount} ${s.maxValue}`}>
                        <span>{props.value}</span>
                        <span className={s.errorName}>max value</span>
                    </div>
                    : <span className={s.displayCount}>{props.value}</span>
            : <span className={`${s.displayCount} ${s.errorSettings}`}>Incorrect value!</span>
        }
    </>
}